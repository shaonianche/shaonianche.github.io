# seed/

`seed.json` 是 EmDash 的种子文件（数据结构 + 24 篇文章完整内容）。

因 GitHub API 单次推送大小限制，仓库中存放的是 gzip 压缩版。
`.agents/setup` 会自动解压并完成本地播种（D1 内容 + R2 媒体二进制），无需手动操作。
手动解压：

```bash
gunzip -k seed/seed.json.gz   # 得到 seed/seed.json
```

也可随时从线上 D1 重新导出最新版：
`npx emdash export-seed`

## 本地媒体的工作原理

- `emdash seed`（CLI）会把 seed 里 `$media` 引用的图片下载到 `./uploads/<storage_key>`，
  但 dev server 从 R2 绑定（miniflare）读媒体，不读 `./uploads`。
- 因此播种后需要把二进制导入本地 R2（`.agents/setup` 已自动化）：
  对 media 表里的每条记录执行
  `npx wrangler r2 object put "blog/<storage_key>" --file "uploads/<storage_key>" --local`。
- 不要通过 HTTP 请求触发首次访问自动播种（auto-seed 不带 storage，且与手动播种竞争，
  会产生没有二进制的 media 记录）。
