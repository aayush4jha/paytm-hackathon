# 代码访问：判断层级、还原前端、读仓库

外部抓包是黑盒下的无奈手段。只要能拿到代码，就该优先读代码——结论更硬、推测更少。这篇讲怎么判断你处在哪一层、怎么把"看起来黑盒"的产品提升到灰盒、以及拿到仓库后先读哪里。

**底线**：只研究你有权访问的代码——开源项目、你自己的产品、产品公开 ship 的 source map、明确获授权的仓库。不要为调研去获取未授权的私有代码。下面的方法都建立在"合法可得"之上。

## 第一步：判断访问层级

动手前先花几分钟探一下，很多"以为是黑盒"的产品其实是灰盒。

| 想确认 | 怎么查 |
|--------|--------|
| 是不是开源（白盒） | 搜 GitHub / GitLab 组织名、产品名 + "github"；看落地页 footer 有没有仓库链接 |
| 前端有没有 source map（灰盒） | 看 bundle 同目录有没有 `.js.map`；DevTools Sources 面板能不能还原出源码目录树 |
| bundle 是否未混淆 | 直接看 main bundle，变量名是不是可读（`directorAgent` vs `a.Bx`） |
| 有没有公开 API 文档 / SDK | 搜 "{产品} API docs" / npm 上有没有官方 SDK 包 |
| 有没有公开发布包 / CLI | 搜 npm / PyPI / Homebrew / Docker image；跑 `npm view`、`npm pack`、`--help`，看包内 dist、schema、命令和依赖 |

## 灰盒：从 source map 还原前端

如果产品 ship 了 source map（开发疏忽或有意保留，很常见）：

- DevTools → Sources，能直接看到还原后的源码目录结构、组件名、甚至注释。
- 批量还原可用工具把 `.js.map` 展开回源码树（如 `source-map` 库、各类 unpack 工具）。
- 即使没有 `.map`，未混淆的 bundle 里也常能读出：组件名、事件类型常量、API 路径字符串、WebSocket 消息 type、自定义 tag 名。

能读前端源码后，这些黑盒难题直接有答案：
- 事件 / 消息 schema（不用靠抓帧逐个统计）
- 节点 / 卡片组件清单（不用靠 DOM 反推）
- 输出渲染逻辑（`<diagram>` / `<tex>` 怎么解析）
- 前端调用了哪些后端端点（搜源码里的 path 字符串）

后端逻辑（模型、prompt、RAG）前端代码里通常仍然看不到——这部分回到抓包 + 推断，进 `open-questions.md`。

## 公开包 / CLI：弱灰盒证据

很多 agent 产品会公开 npm 包、CLI、daemon、SDK、Docker image。它们不是完整仓库，但通常比网页 bundle 更接近真实产品契约。合法前提下，把这些当作弱灰盒证据：

- registry metadata：版本、发布时间、迁移说明、仓库 URL、bin、dependencies。
- `npm pack` / wheel / image contents：公开发布的 dist、schema、协议常量、默认模型列表、权限名、错误码。
- CLI help：用户和 agent 能执行哪些操作，哪些命令需要登录，推荐的 onboarding 流程。
- 包名迁移：旧包指向新包、legacy alias、内部命名，常能判断产品阶段。

写文档时要标清边界：公开包说明"客户端/本机侧能力"，不等于服务端当前一定按同样逻辑运行。真实线上行为仍要用登录态抓包验证；没验证的差异进 `open-questions.md`。

## 白盒：拿到完整仓库后先读哪里

有完整仓库时，按"最难从外部得到的东西"优先读，效率最高：

| 优先级 | 读什么 | 对应支柱 |
|--------|--------|---------|
| 1 | 路由 / API 定义（`routes`、`api/`、controller） | 3 网络层 |
| 2 | agent / LLM 调用层（provider 配置、模型名、tool 定义） | 3 + 技术核心 |
| 3 | prompt 模板（搜 `system`、`prompt`、`.md` / `.txt` 模板目录） | 黑盒永远拿不到的部分 |
| 4 | 数据模型 / schema（`models`、`migrations`、`schema.prisma`） | 商业逻辑 |
| 5 | 输出渲染 / 前端组件 | 5 差异化 |
| 6 | 配置 / 依赖（`package.json`、`requirements.txt`、env 示例） | 技术栈全貌 |

读仓库时仍守 provenance 纪律：结论标注来自哪个文件哪一行。代码会变，标清版本 / commit。

## 抓包的新角色：验证

有代码后，抓包不再是主要信息源，而是**验证手段**：跑一次真实请求，确认线上行为和代码读出来的一致（线上可能跑的是更新版本、有 feature flag、有 A/B）。代码读出来的是"应该怎样"，抓包确认"线上实际怎样"。
