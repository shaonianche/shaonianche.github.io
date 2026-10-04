# seed/

`seed.json` 是 EmDash 的种子文件（数据结构 + 24 篇文章完整内容）。

因 GitHub API 单次推送大小限制，仓库中存放的是 gzip 压缩版。
使用前解压：

```bash
gunzip -k seed/seed.json.gz   # 得到 seed/seed.json
```

也可随时从线上 D1 重新导出最新版：
`npx emdash export-seed`
