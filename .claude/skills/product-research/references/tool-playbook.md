# 工具速查：想查什么 → 用哪个工具

调研一个线上产品时，不同信息要用不同工具拿。这张表是从实战里沉淀的，避免每次重新摸索。

| 想查什么 | 用哪个工具 | 备注 |
|---------|-----------|------|
| 营销 / 公开信息（定位、定价、团队） | WebFetch / WebSearch | 落地页、manifesto、第三方评测、LinkedIn |
| 页面渲染了哪些文本 | 浏览器自动化的 get_page_text / read_page | 一次抓整页，存进 raw/ |
| 页面有哪些可点元素 + 它们的 ref | read_page（filter=interactive） | 拿到 ref 才能点 |
| 自然语言找元素 | find | "那个 Send 按钮" |
| 跑 JS / 探测全局状态 | javascript_tool | 技术指纹探针靠它（见 fingerprint-probes.md） |
| 视觉确认 / 节点样式 | screenshot | 存进 raw/ |
| 普通网络请求列表（不含 WS） | read_network_requests | 抓不到 WebSocket（见 network-capture.md） |
| 抓流式 / WebSocket | reload 前注入 monkey patch | 标准面板抓不到，见 network-capture.md |
| 公开 npm/CLI/daemon | npm view / npm pack / --help | 登录被挡住时的弱灰盒证据，结果仍要和线上行为区分 |

## 几条实战经验

- **登录态产品**：先确认浏览器已登录目标账号，否则只能看到落地页。
- **登录被挡住时**：先引导用户本人登录并说明边界；用户暂不登录时，再转公开页面 / bundle / 公开包 / CLI，并把缺失集中进 `open-questions.md`。
- **抓包要趁早建立通路**：第一个场景就用最简单的输入把抓包链路打通，别一上来挑最复杂的功能。
- **边抓边存**：原始文本、帧、截图当场存进 `raw/`，别指望最后回头补，很多状态过了就没了。
- **反爬**：部分聚合站（aitoolnet 类）有 403 反爬，WebFetch 抓不到就换 WebSearch 找二手信息，并在 provenance 里标"未直接抓到"。带 Cloudflare 挑战页的产品（curl/WebFetch 直接 403）必须用能过挑战的真实浏览器。
- **登录态会过期**：JWT 常 ~2h，中途掉登录（`AUTH_REFRESH_FAILED` 之类）是常态 → 交还用户在浏览器里重登，**别自己代登**（密码 / OAuth 由用户本人完成）。
- **用账号前先说明**：发查询 / 点按钮前告诉用户会做什么、消耗什么、不碰什么（见 SKILL.md 登录态调研规范）。
