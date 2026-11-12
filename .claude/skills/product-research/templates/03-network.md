<!--
本文职责（唯一信息源）：网络层 —— 端点、协议、鉴权、流式主通道、时序。
抓流式的方法见 references/network-capture.md。原始帧存 raw/，这里放 schema + 结论。
所有数字（端点数 / 事件类型数 / TTFC）同步进 00-overview 的「关键数字」表。
-->

# {产品名} 网络层

> 来源：read_network_requests / 注入抓 WebSocket / JS 探测。原始帧见 `raw/`。

## 鉴权

<!-- 登录链路、token 形态。JWT 里的 PII 一律 <REDACTED>，只留结构信息。 -->

## REST 端点

<!-- 表格合理（≥3 列）。数字与「关键数字」表一致。 -->

| Path | 用途 | 来源 |
|------|------|------|

## 流式主通道（核心）

<!--
这通常是最有价值的部分：协议（WebSocket / SSE）、URL、鉴权、消息 schema、事件类型。
区分"观察到的"（抓到的帧）和"推测的"（tool 职责靠名字反推 → 标注推测）。
-->

### Client → Server

### Server → Client

### 后端 tool 栈（若是 agent 产品）

<!-- tool 职责多为推断，整列标"推测"，别写成确定。 -->

## 时序与性能

<!-- 关键里程碑耗时。注明是单次还是多次平均、有没有混入用户操作时间。 -->

## 待验证

→ 统一见 [open-questions](open-questions.md)，本文不重复列。
