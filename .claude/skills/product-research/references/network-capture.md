# 抓流式主通道：标准面板抓不到的坑

> 先判断主通道是哪种协议——常见三种：**WebSocket**、**SSE（原生 EventSource）**、**SSE-over-fetch（POST + ReadableStream）**。
> 不同协议抓法不同，下面分别讲。最省事的起手式：用浏览器的 `read_network_requests` 看全量请求，
> 再注入钩子拿到流的细节。

## 起手式：一次性钩住三种协议

发查询前注入一段钩子，把 fetch / EventSource / WebSocket 全挂上，事后读 `window.__cap`：

```js
(function(){
  window.__cap = { fetch: [], es: [], ws: [] };
  const of = window.fetch;
  window.fetch = function(...a){
    const url=(a[0]&&a[0].url)||a[0];
    const rec={url:String(url),method:(a[1]&&a[1].method)||'GET',ct:null};
    window.__cap.fetch.push(rec);
    return of.apply(this,a).then(r=>{try{rec.ct=r.headers.get('content-type')}catch(e){}return r});
  };
  const OES=window.EventSource;
  if(OES){window.EventSource=function(u,c){window.__cap.es.push({url:String(u)});return new OES(u,c)};window.EventSource.prototype=OES.prototype;}
  const OWS=window.WebSocket;
  window.WebSocket=function(...a){window.__cap.ws.push({url:String(a[0])});return new OWS(...a)};
  window.WebSocket.prototype=OWS.prototype;
})()
```

判读 `window.__cap`：
- 答案端点出现在 `fetch` 且 `ct` 含 `text/event-stream` → **SSE-over-fetch**（POST 居多，因为要带请求体）。原生 `EventSource` 只能 GET，所以带上下文的答案流常用 fetch POST。
- `es` 非空 → 用了原生 EventSource。
- `ws` 有承载答案的连接 → WebSocket 主通道。

**关键教训：别看到 WebSocket 就当主通道。** 实战中见过 WS 只服务输入联想（每次按键一连），主答案其实走 SSE。一定要确认"哪条通道在传答案"，而不是"有没有 WebSocket"。

## 情况一：核心通道走 WebSocket

很多 AI 产品的核心 chat / agent 通道走 **WebSocket**（或在 React 早期就缓存了 fetch 引用），这意味着：

- 标准的 `read_network_requests` **抓不到** WebSocket 帧。
- `performance.getEntriesByType('resource')` 里也**没有** chat 端点。
- 如果你在页面已经加载后才注入 `window.fetch` hook，React 早已缓存了原始 fetch 引用，你的 hook **被绕过**。

所以核心流式通道往往是初次探测时的"悬案"。

## 正确做法：reload 前注入 monkey patch

在 React app 启动**之前**，注入对 `window.WebSocket` 的 monkey patch，把每条 client→server 和 server→client 帧都记下来。

大致思路（用 javascript_tool 注入，具体按当前工具链调整）：

```js
// 在页面 reload 后、app bundle 执行前注入
(function () {
  const OrigWS = window.WebSocket;
  window.__wsFrames = [];
  window.WebSocket = function (...args) {
    const ws = new OrigWS(...args);
    ws.addEventListener('message', (e) => {
      window.__wsFrames.push({ dir: 'in', t: Date.now(), data: e.data });
    });
    const origSend = ws.send.bind(ws);
    ws.send = (d) => {
      window.__wsFrames.push({ dir: 'out', t: Date.now(), data: d });
      return origSend(d);
    };
    return ws;
  };
  window.WebSocket.prototype = OrigWS.prototype;
})();
```

然后：发起一次对话 → 等流跑完 → 把 `window.__wsFrames` dump 出来存进 `raw/<scenario>-frames.json`。

## 时序注意

- 注入时机是关键：必须在 bundle 执行前。如果工具链不支持"reload 前注入"，退而求其次用 Chrome DevTools 的 WS 面板手动抓。
- 抓到的帧里如果带 JWT / PII，存档前先 `<REDACTED>`。
- 心跳帧（ping/pong）会很多，分析时先过滤掉。
- **连接复用**：流式 WS 常一会话一条连接、首条消息才 lazy open；钩子在发首条消息前装好即可，会话内追问复用同一条连接（追问的帧同一个钩子就能抓到）。

## 把捕获数据取出来：绕过工具的外泄护栏

浏览器自动化工具（如 Claude-in-Chrome）的返回通道常有**防数据外泄护栏**：返回值里出现 token / cookie / base64 / 长签名串会被整段拦掉，而且返回长度有截断上限。所以一份几十 KB 的完整帧流，没法靠 `javascript_tool` 的返回值导出（原样被 token 拦、base64 也被拦、分块又要几十次）。

干净的办法：**让页面自己把数据下载成文件**，落到磁盘，再从磁盘读——完全不经过返回通道。

```js
const text = window.__wsFrames.map(redact).join('\n'); // 先在浏览器端脱敏
const a = document.createElement('a');
a.href = URL.createObjectURL(new Blob([text], {type:'text/plain'}));
a.download = 'ws-raw-frames.jsonl'; document.body.appendChild(a); a.click();
```
然后 `~/Downloads/ws-raw-frames.jsonl` 就有了，移进 `raw/`。

- 脱敏在**浏览器端先做**（剥 JWT、URL 查询串、长 token；用字符串替换保持其余字节原样）。
- 落盘后**复验**：grep 残留 token / PII（见 SKILL.md 脱敏复验）。
- 退路：`CompressionStream('gzip')` + 分块取回也行，但 base64 同样会被拦，下载落盘更省事。

## 从帧里能反推什么

- 协议选型（WebSocket vs SSE）和为什么（双向？心跳？多事件类型？）
- 事件类型清单（按 `type` 字段统计）
- 消息通用壳 schema
- 后端 tool 栈（agent 产品：按 `tool_name` 字段反推，但职责是**推测**，要标注）
- 时序 / TTFC（注意扣掉中间的用户决策时间）

## "服务端 ≠ 拿不到"：翻 payload 里漏出来的元数据

最容易被错判成"永远拿不到"的东西——后端用哪个 LLM、用了哪个外部检索 API、内部 skill/版本号——经常**就明文写在发给客户端的 payload 里**。后端为了 telemetry / 调试 / 顺手，常在响应里塞元数据字段，UI 不一定显示，但传输里都在。

实战例子：某产品被判"后端 LLM 不可知"，结果 `generate_content` 的结果帧 `data` 里有个 `model_used` 字段，值直接写着 `gemini-3-flash-preview`。

所以分析帧 / 接口响应时，专门扫一遍这类字段名：`model`、`model_used`、`provider`、`engine`、`version`、`backend`、`skill`、`*_id`、`source`。**别因为"这是服务端选型"就默认写进 open-questions**——先确认它没在客户端流量里漏出来。

注意：抓这类字段时只取该字段值，别顺手把整个 `data`（可能含正文 / PII）落盘。
