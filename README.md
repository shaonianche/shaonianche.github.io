# blog.duanfei.org

A personal blog built with [EmDash](https://github.com/emdash-cms/emdash) (Astro + React) and deployed on Cloudflare Workers.

## Features

- Home: a featured post hero with a large image, followed by a grid of recent posts
- `/posts` lists all posts, 20 per page; `/posts/[slug]` shows a post with the date and reading time on the left and a table of contents plus widgets in the right rail
- `/search` full-text search (EmDash FTS)
- `/category/[slug]` and `/tag/[slug]` category and tag archives
- `/pages/[slug]` standalone pages (such as About)
- `/rss.xml` RSS feed; comments on post pages

## Stack

- **CMS**: EmDash; the admin UI lives at `/_emdash/admin`
- **Framework**: Astro 7 + React 19 with the `@astrojs/cloudflare` adapter
- **Data**: D1 (content), R2 (media), KV (sessions)
- **Caching**: Workers Cache (`cacheCloudflare()`), with per-route `maxAge` and tag-based invalidation on publish
- **Images**: Cloudflare Images binding for on-demand resizing; a custom `/_image` endpoint (`src/endpoints/image.ts`) extends the EmDash endpoint to accept path-style media keys
- **Fonts**: Inter for body and headings, JetBrains Mono for code, loaded through Astro Fonts

## Local development

```bash
pnpm install
gunzip -k seed/seed.json.gz   # first run only
pnpm dev                      # http://localhost:4321
```

The first run also needs the seed applied to local D1 and its media imported into local R2; otherwise posts are empty and images return 404. `.agents/setup` does both; see [seed/README.md](seed/README.md) for the manual steps.

Common commands:

```bash
pnpm build       # build
pnpm typecheck   # type-check (astro check)
pnpm seed:sync   # refresh seed.json.gz and local D1 from production
pnpm deploy      # build and run wrangler deploy
```

## Deployment

Pushing to `main` triggers Cloudflare Workers Builds, which builds and deploys to <https://blog.duanfei.org>. You can also publish manually with `pnpm deploy`.

`wrangler.jsonc` defines an hourly cron for scheduled publishing and other maintenance tasks. Content changes take effect through the cache tag purge performed on publish; approving a comment does not purge the cache, so new comments can take up to about an hour to appear.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Page routes (home, posts, categories, tags, standalone pages, search, RSS, 404) |
| `src/layouts/Base.astro` | Site shell: navigation menu, footer, SEO, Cloudflare Web Analytics |
| `src/components/PostCard.astro` | Post card (feature, grid, and row variants) |
| `src/components/Byline.astro` / `Pagination.astro` | Author byline; cursor paging for post lists |
| `src/endpoints/image.ts` | Custom `/_image` transform endpoint (supports path-style media keys) |
| `src/utils/reading-time.ts` | Reading-time estimate (counts CJK characters and Latin words separately) |
| `src/utils/site-identity.ts` | Site title, tagline, and logo resolution with defaults |
| `src/utils/locale.ts` | Site locale (defaults to `zh-CN`) and date formatting |
| `src/styles/tokens.css` / `theme.css` / `prose.css` | Design tokens, theme overrides, article body typography |
| `src/worker.ts` | Worker entry point and hourly cron schedule |
| `seed/seed.json.gz` | EmDash seed data (schema and all content); see `seed/README.md` |
| `astro.config.mjs` | Astro config: EmDash integration, cache rules, fonts, image endpoint |
| `wrangler.jsonc` | Worker config and bindings (D1, R2, KV, cron) |
