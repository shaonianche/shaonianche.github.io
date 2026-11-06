# seed/

`seed.json` is the EmDash seed file: the site schema plus the full content of all 24 posts.

Because of the GitHub API push size limit, the repository stores a gzipped copy. `.agents/setup` decompresses it and seeds the local environment automatically (D1 content + R2 media binaries), so no manual steps are needed. To decompress it manually:

```bash
gunzip -k seed/seed.json.gz   # creates seed/seed.json
```

The live D1 database is the source of truth for content; `seed.json.gz` is a snapshot used to bootstrap local and orb environments, so it drifts whenever content is edited in the admin UI. Refresh it before starting content-related work:

```bash
pnpm seed:sync
```

The script (`scripts/sync-seed.ts`) reads production read-only through `wrangler d1 execute --remote`, then in one pass:

- rewrites `seed/seed.json` and `seed.json.gz` in the seed's own format;
- replaces the content tables in the local miniflare D1 (`.wrangler/state/v3/d1/...`);
- downloads media keys that local R2 does not have yet (tracked in `.wrangler/seed-sync-media.json`).

`pnpm dev` runs a freshness check first (`scripts/check-seed.ts`): it compares entry counts, the newest `updated_at`, and the site title/tagline, then prints a warning when the seed is behind. The check never blocks the dev server, skips silently when wrangler is unavailable or offline, caches a clean result for ten minutes, and can be disabled with `SKIP_SEED_CHECK=1`. Run `pnpm check:seed` to check on demand.

Restart the dev server afterwards. `pnpm seed:sync` needs a wrangler login with access to the `blog` D1. Collections and fields are not written into the seed — schema comes from code and migrations — and the script warns when production's schema differs from the seed.

A whole-database `wrangler d1 export` does not work for this schema: D1 refuses to export databases containing FTS5 virtual tables, and `emdash export-seed` only reads a local SQLite file.

`emdash seed` stamps `published_at`, `created_at`, and `updated_at` with the time of seeding and ignores the dates in the seed file. `.agents/setup` restores them from `seed.json` right after seeding; seeding by hand needs the same update, or every post ends up dated to the moment it was seeded.

## How local media works

- The `emdash seed` CLI downloads images referenced by `$media` in the seed to `./uploads/<storage_key>`, but the dev server reads media from the R2 binding (miniflare), not from `./uploads`.
- After seeding, import the binaries into local R2 (`.agents/setup` does this automatically). For each row in the `media` table, run:
  `npx wrangler r2 object put "blog/<storage_key>" --file "uploads/<storage_key>" --local`
- Do not trigger auto-seeding with an HTTP request on first visit: auto-seed has no storage and races the manual seed, leaving media rows without binaries.
