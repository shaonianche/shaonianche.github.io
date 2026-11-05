# seed/

`seed.json` is the EmDash seed file: the site schema plus the full content of all 24 posts.

Because of the GitHub API push size limit, the repository stores a gzipped copy. `.agents/setup` decompresses it and seeds the local environment automatically (D1 content + R2 media binaries), so no manual steps are needed. To decompress it manually:

```bash
gunzip -k seed/seed.json.gz   # creates seed/seed.json
```

You can also re-export the latest version from the live D1 at any time:

```bash
npx emdash export-seed
```

## How local media works

- The `emdash seed` CLI downloads images referenced by `$media` in the seed to `./uploads/<storage_key>`, but the dev server reads media from the R2 binding (miniflare), not from `./uploads`.
- After seeding, import the binaries into local R2 (`.agents/setup` does this automatically). For each row in the `media` table, run:
  `npx wrangler r2 object put "blog/<storage_key>" --file "uploads/<storage_key>" --local`
- Do not trigger auto-seeding with an HTTP request on first visit: auto-seed has no storage and races the manual seed, leaving media rows without binaries.
