# 技术指纹探针：几秒钟判定前端栈

一组现成的 JS 探针，用 javascript_tool 在目标页面跑，秒级判定框架 / 路由 / 渲染模式 / 分析栈 / 字体。每条都给可写进文档的"证据"。

## 框架与路由

```js
({
  react: !!document.querySelector('*')?.[Object.keys(document.querySelector('div')||{}).find(k=>k.startsWith('__reactContainer'))],
  reactFiber: Object.keys(document.body).some(k => k.startsWith('__reactContainer') || k.startsWith('__reactFiber')),
  reactRouter: typeof window.__reactRouterVersion !== 'undefined',
  next: typeof window.__NEXT_DATA__ !== 'undefined',
  nextScript: !!document.getElementById('__NEXT_DATA__'),
  vue: !!window.__VUE__,
  svelte: !!document.querySelector('[class*="svelte-"]'),
})
```

判读：
- `reactFiber` 真 → React。
- `reactRouter` 真且 `next` 假 → React Router（不是 Next.js）。这是个常见的反主流选择，值得在文档里点出。
- `next` / `nextScript` 真 → Next.js（多半 SSR + hydration）。

## 渲染模式（CSR vs SSR）

```js
// 看初始 HTML 是不是空壳：禁用 JS 抓源码，或看 document 首屏文本量
document.documentElement.outerHTML.length
```

更可靠的判法：看页面源码（view-source / WebFetch 抓 HTML）里有没有实际内容。空壳 + 全靠 mount → CSR；首屏有完整内容 → SSR/SSG。

## 分析 / 监测栈

```js
({
  cloudflare: !!window.__cfBeacon,
  clarity: !!window.__clr || !!window.clarity,
  ga: !!window.gtag || !!window.dataLayer,
  segment: !!window.analytics,
  posthog: !!window.posthog,
  sentry: !!window.Sentry,
})
```

配合 `read_network_requests` 看打到哪些第三方域名（`a.clarity.ms`、`/cdn-cgi/rum` 等）交叉确认。

## 字体方案

```js
performance.getEntriesByType('resource')
  .filter(e => /\.(woff2?|ttf|otf)(\?|$)/.test(e.name))
  .map(e => e.name)
```

判读：
- 同源 `/assets/.../*.woff2` → 自托管。
- `cdn.jsdelivr.net` / `fonts.gstatic.com` → CDN（注意大陆访问性：Google Fonts 在大陆不可达，jsdelivr 一般可用）。
- 中英文分别用不同字体是常见做法（英文衬线/无衬线 + 中文开源字体）。

## 数学 / 图表渲染

- 看 DOM 里有没有 KaTeX（`.katex` 类）/ MathJax（`mjx-container`）。
- Mermaid 渲染后是 `<svg>` 包在特定容器里。
- 自定义 tag（`<tex>` / `<diagram>` 之类）说明产品用了自定义输出 schema 而非纯 markdown —— 这往往是富输出产品的关键技术点，重点记。

## 静态资源路径规律

```js
performance.getEntriesByType('resource').map(e => e.name).filter(n => n.includes('/assets/') || n.includes('/pages/'))
```

如果资源路径长得像**源码目录结构**（`/pages/mainPages/home/...`），通常是 Vite 把 source 路径原样暴露成 public path —— 一个判定打包工具的旁证。
