# blog.duanfei.org

个人博客，基于 [EmDash](https://github.com/emdash-cms/emdash)（Astro + React）构建，部署在 Cloudflare Workers 上。

## 技术栈

- **CMS**：EmDash（管理后台 `/_emdash/admin`）
- **框架**：Astro 7 + @astrojs/cloudflare 适配器
- **存储**：D1（内容）、R2（媒体）、KV（会话）
- **图片**：Cloudflare Images 绑定实时缩放（`/_image` 端点，见 `src/endpoints/image.ts`）

## 本地开发

```bash
pnpm install
gunzip -k seed/seed.json.gz   # 首次需要，解压种子数据
pnpm dev                       # http://localhost:4321
```

常用命令：

```bash
pnpm build       # 构建
pnpm typecheck   # 类型检查
```

## 部署

push 到 `main` 分支，Cloudflare Workers Builds 自动构建并部署到 <https://blog.duanfei.org>。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `src/pages/` | 页面路由（首页、文章、归档、搜索、RSS） |
| `src/layouts/Base.astro` | 基础布局（导航、页脚、SEO） |
| `src/endpoints/image.ts` | 自定义图片变换端点（支持路径式 media key，兼容 legacy billing 回退） |
| `src/utils/media.ts` | 媒体 URL 与 srcset 生成 |
| `seed/seed.json.gz` | EmDash 种子数据（结构 + 全部文章），见 `seed/README.md` |
| `wrangler.jsonc` | Worker 配置与绑定 |
