# blog.duanfei.org

个人博客，基于 [EmDash](https://github.com/emdash-cms/emdash)（Astro + React）构建，部署在 Cloudflare Workers 上。

## 站点功能

- 首页：精选文章大图 + 最新文章网格
- `/posts` 全部文章；`/posts/[slug]` 文章详情（左侧作者与日期，右侧目录、搜索、分类）
- `/search` 全文搜索（EmDash FTS）
- `/category/[slug]`、`/tag/[slug]` 分类与标签归档
- `/pages/[slug]` 独立页面（About 等）
- `/rss.xml` RSS；文章页带评论

## 技术栈

- **CMS**：EmDash，管理后台 `/_emdash/admin`
- **框架**：Astro 7 + React 19，`@astrojs/cloudflare` 适配器
- **数据**：D1（内容）、R2（媒体）、KV（会话）
- **缓存**：Workers Cache（`cacheCloudflare()`），按路由设置 `maxAge`，发布时按缓存标签失效
- **图片**：Cloudflare Images 绑定实时缩放；自定义 `/_image` 端点（`src/endpoints/image.ts`）在 EmDash 端点基础上支持路径式 media key
- **字体**：Inter（正文与标题）、JetBrains Mono（代码），通过 Astro Fonts 接入

## 本地开发

```bash
pnpm install
gunzip -k seed/seed.json.gz   # 首次需要
pnpm dev                      # http://localhost:4321
```

首次运行还需要把种子数据写入本地 D1、把媒体二进制导入本地 R2，否则文章为空、图片 404。`.agents/setup` 会自动完成这两步；手动步骤见 [seed/README.md](seed/README.md)。

常用命令：

```bash
pnpm build       # 构建
pnpm typecheck   # 类型检查（astro check）
pnpm deploy      # 构建并 wrangler deploy
```

## 部署

push 到 `main` 分支，Cloudflare Workers Builds 自动构建并部署到 <https://blog.duanfei.org>；也可以本地执行 `pnpm deploy` 手动发布。

`wrangler.jsonc` 配置了每小时 cron，用于定时发布等维护任务。内容更新由发布时的缓存标签 purge 生效；评论审核通过不触发 purge，最长约 1 小时后对外可见。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `src/pages/` | 页面路由（首页、文章、分类、标签、独立页面、搜索、RSS、404） |
| `src/layouts/Base.astro` | 全站布局：导航菜单、页脚、SEO、Cloudflare Web Analytics |
| `src/components/PostCard.astro` | 文章卡片 |
| `src/endpoints/image.ts` | 自定义 `/_image` 图片变换端点（支持路径式 media key） |
| `src/utils/reading-time.ts` | 阅读时长估算（按 CJK 字符与西文词数分别计算） |
| `src/utils/site-identity.ts` | 站点标题、tagline、logo 的解析与默认值 |
| `src/styles/tokens.css` / `theme.css` | 设计令牌与主题覆盖 |
| `src/worker.ts` | Worker 入口与每小时 cron 调度 |
| `seed/seed.json.gz` | EmDash 种子数据（结构 + 全部文章），见 `seed/README.md` |
| `astro.config.mjs` | Astro 配置：EmDash 集成、缓存规则、字体、图片端点 |
| `wrangler.jsonc` | Worker 配置与绑定（D1、R2、KV、cron） |
