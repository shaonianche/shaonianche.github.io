This is an EmDash site -- a CMS built on Astro with a full admin UI.

## Commands

```bash
pnpm install             # Install dependencies (pnpm is the package manager)
pnpm dev                 # Start the Astro dev server
pnpm exec emdash types   # Regenerate TypeScript types from a running site
pnpm seed:sync           # Refresh seed.json.gz + local D1 from production
```

`pnpm dev` first checks whether `seed/seed.json.gz` is behind production D1 and prints a warning (it never blocks startup); run `pnpm seed:sync` to refresh the seed and the local database from production.

The first local run also needs the seed applied to D1 and its media imported into R2, or the site has no posts and images 404. `.agents/setup` does both; the manual steps are in `seed/README.md`.

The admin UI is at `http://localhost:4321/_emdash/admin`.

## Key Files

| File                     | Purpose                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------- |
| `astro.config.mjs`       | Astro config with `emdash()` integration, database, and storage                    |
| `src/live.config.ts`     | EmDash loader registration (boilerplate -- don't modify)                           |
| `seed/seed.json.gz`      | Gzipped schema + all content (collections, fields, taxonomies, menus, widgets); decompress to the gitignored `seed/seed.json` -- see `seed/README.md` |
| `emdash-env.d.ts`        | Generated types for collections (auto-regenerated on dev server start)             |
| `src/layouts/Base.astro` | Base layout with EmDash wiring (menus, search, page contributions)                 |
| `src/pages/`             | Astro pages -- all server-rendered                                                 |

## Skills

Agent skills are in `.agents/skills/`. Load them when working on specific tasks:

- **building-emdash-site** -- Querying content, rendering Portable Text, schema design, seed files, site features (menus, widgets, search, SEO, comments, bylines). Start here.
- **creating-plugins** -- Building EmDash plugins with hooks, storage, admin UI, API routes, and Portable Text block types.
- **emdash-cli** -- CLI commands for content management, seeding, type generation, and visual editing flow.

## Documentation

The EmDash docs are available as an MCP server at `https://docs.emdashcms.com/mcp`. When you need to verify an API, hook, config option, field type, or pattern, call `search_docs` against the live documentation rather than relying on training-data recall. The docs reflect current behaviour; assumptions may not.

The repo ships with `.mcp.json`, so Claude Code auto-discovers the docs server. Cursor and VS Code read their own config (`.cursor/mcp.json`, `.vscode/mcp.json`); those directories are gitignored here, so add the server manually. Other tools (OpenCode, Windsurf, etc.) need the same one-time setup -- see [docs.emdashcms.com/docs-mcp](https://docs.emdashcms.com/docs-mcp).

## Rules

- All content pages must be server-rendered (`output: "server"`). No `getStaticPaths()` for CMS content.
- Image fields are objects (`{ src, alt }`), not strings. Use `<Image image={...} />` from `"emdash/ui"`.
- `entry.id` is the slug (for URLs). `entry.data.id` is the database ULID (for API calls like `getEntryTerms`).
- When Astro's cache is enabled, pass content-query hints to `Astro.cache.set(cacheHint)`. Use the `WithCacheHint` variants for site settings, menus, taxonomies, and widget areas rendered by cached routes.
- Taxonomy names in queries must match the seed's `"name"` field exactly (e.g., `"category"` not `"categories"`).

## This Template

A blog with posts, pages, categories, tags, full-text search, and RSS. Designed for personal writing, technical writing, indie newsletters, and anything where the writing is the product. Editorial-tech aesthetic: confident sans-serif, restrained accent, real article structure with bylines and reading time.

## Pages

| Page        | Path               | What it shows                                                                                          |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| Home        | `/`                | Featured post hero (large image + excerpt), latest posts grid                                          |
| All posts   | `/posts`           | Paginated list (20 per page, `?cursor=`), newest first, with tag chips                                 |
| Post detail | `/posts/[slug]`    | Featured image, title, left meta rail (date + reading time), 680px body, right rail (TOC + widgets)    |
| Search      | `/search`          | Full-text search UI with cursor paging                                                                 |
| Page        | `/pages/[slug]`    | Static page content (Portable Text)                                                                    |
| Category    | `/category/[slug]` | Posts filtered by category                                                                             |
| Tag         | `/tag/[slug]`      | Posts filtered by tag                                                                                  |
| RSS         | `/rss.xml`         | Generated feed                                                                                         |

## Schema

- `posts` collection: `title`, `featured_image`, `content` (Portable Text), `excerpt` (text).
- `pages` collection: `title`, `content` (Portable Text). Used for `/about` etc.
- Taxonomies: `category`, `tag`.
- Single `primary` menu (Home, About, Posts by default).

Site settings have `title` and `tagline` -- both render in the header / footer.

## Visual character

System fonts only, defined in `src/styles/custom.css`. `--font-body` is a Chinese-first stack: `system-ui` / `-apple-system` first, then `SF Pro SC`, `PingFang SC`, `Hiragino Sans GB`, `Microsoft YaHei`, `Noto Sans CJK SC`. It follows apple.com.cn's Chinese face order without shipping a webfont. `--font-mono` is the system monospace stack for labels, inline code, and code blocks. Body and headings share the same family; weight and size carry the hierarchy (`--font-weight-heading` 600, `--font-weight-display` 600 for h1/page titles).

Chinese typography: 17px base, zero letter-spacing (negative tracking is a Latin convention and makes CJK glyphs collide), 1.3 heading leading, and 1.85 leading in `.prose`. Paragraph gaps are 1.15em.

The theme is monochrome: `--color-brand` is near-black in light mode and near-white in dark mode, and drives buttons, the logo mark, and focus rings. Body links are text-coloured with a subtle underline (see `prose.css`). There is no accent colour -- photographs supply the only colour on the page. `--color-text-secondary` and `--color-muted` carry meta information.

The layout is built from `band` sections split by hairline rails with corner crosshairs, and a `frame` container (`--frame-width`) that aligns content with those rails. The article layout is the standout feature: a three-column reading view with a left meta rail (date, reading time), centred 680px body column, and a right rail for the TOC and widget area. Don't flatten that into one column on desktop -- the layout signals "this is something to read".

## Customisation

Design tokens live in `src/styles/tokens.css` with their default values. To restyle the site, override tokens in `src/styles/theme.css` -- declarations there are unlayered, so they always beat the `@layer base` defaults. Don't edit `tokens.css` or `Base.astro` for visual changes.

Colours are defined with `light-dark(<light>, <dark>)`, so each token carries both modes. Overriding with a plain colour changes light and dark at once; use `light-dark()` in the override to keep them distinct. There is no separate dark palette to maintain.

Site-specific styling lives in `src/styles/custom.css`, which Base.astro imports after `tokens.css` and `theme.css`. A template upgrade never touches that file. There is no webfont pipeline: `astro.config.mjs` has no `fonts:` entry and Base.astro has no `<Font>` tags, so the system stacks above are the whole font story. To change the body face, edit `--font-body` in `custom.css`; to give headings their own face, set `--font-heading` there.

CSS variables worth knowing (see `tokens.css` for the full list):

- `--color-brand`, `--color-brand-hover`, `--color-on-brand`, `--color-brand-ring`
- `--color-bg`, `--color-bg-subtle`, `--color-surface`, `--color-fill`, `--color-fill-strong`, `--color-text`, `--color-text-secondary`, `--color-muted`, `--color-border`, `--color-border-subtle`, `--color-border-strong`, `--color-ring`
- `--font-body`, `--font-heading`, `--font-mono`
- `--font-weight-heading` (600) / `--font-weight-display` (600) -- heading weights; lower them if you switch to a serif
- `--tracking-tight` / `--tracking-snug` / `--tracking-wide` / `--tracking-wider` -- letter-spacing tokens used across headings and meta labels
- `--content-width` (680px) -- article body column
- `--wide-width` (1200px) -- max container
- `--frame-margin` / `--frame-padding` / `--frame-width` -- the rail-aligned content frame
- `--gutter-width` (200px) -- right rail (TOC, widgets) on article pages
- `--meta-col-width` (180px) -- left meta rail on article pages
- `--radius-sm` (6px) / `--radius` (8px) / `--radius-lg` (12px) / `--radius-xl` (18px) / `--radius-full` (pills)
- `--card-padding` (6px) -- inset between a card edge and its media
- `--avatar-size-{xs,sm,md,lg}` -- byline avatar sizes at different scales

Article body typography lives in `src/styles/prose.css`, applied by wrapping Portable Text in `.prose`. It sits in `@layer base`, so `theme.css` overrides win; the unlayered block at the end restyles EmDash's code, button, and file blocks with `!important`.

## Upstream Template Sync

The site-facing code is a copy of the official EmDash blog template: `blog-cloudflare/` in [emdash-cms/templates](https://github.com/emdash-cms/templates). This repo was synced from **v1.0.1** (2026-09-28) and ported to **v1.3.0** (2026-10-16), the redesign that introduced `src/styles/prose.css`, `Byline.astro`, `Pagination.astro`, `src/utils/locale.ts`, the `band`/`frame`/`rail` layout, and the current token set. Porting meant re-applying the local deltas below, not copying files.

EmDash package upgrades are separate: commits such as `chore: upgrade EmDash to 1.4.0` touch only `package.json`, `pnpm-lock.yaml`, and `emdash-env.d.ts`. They never update template files.

### Replaced wholesale from upstream

| Path | Notes |
| --- | --- |
| `src/pages/**` | Every route: home, posts list and detail, pages, category, tag, search, 404, `rss.xml.ts` |
| `src/layouts/Base.astro` | Site shell, header, footer, theme switcher (has local edits, see below) |
| `src/components/PostCard.astro`, `Byline.astro`, `Pagination.astro` | Card variants, byline, cursor paging |
| `src/styles/tokens.css`, `src/styles/theme.css`, `src/styles/prose.css` | Design tokens, the theme override point, and article body typography |
| `src/utils/reading-time.ts`, `src/utils/site-identity.ts`, `src/utils/locale.ts` | |
| `src/live.config.ts`, `.mcp.json` | Boilerplate |

Do not take upstream's `seed/seed.json`: it is demo content, while this repo ships `seed/seed.json.gz` with the real migrated content. `AGENTS.md` and `README.md` describe this site and stay local.

### Local files that upstream does not have

Never overwritten by a sync:

- `src/endpoints/image.ts` and the `imageEndpoint` integration in `astro.config.mjs` (path-style media keys)
- `src/components/CodeBlock.astro`
- `src/styles/custom.css` (site typography and any future overrides)
- `wrangler.jsonc` (D1, R2, KV bindings and the hourly cron)
- `seed/seed.json.gz`, `seed/README.md`, `public/media/`, `public/images/`
- `.agents/setup`, `.emdash/migrations.json`, `.github/`, `.npmrc`
- `emdash-env.d.ts` (generated by `pnpm exec emdash types`)
- Dependency ranges in `package.json`, `pnpm-lock.yaml`, and the security `overrides` in `pnpm-workspace.yaml`. `@astrojs/react` stays on 6.x; the template pins `^7`, which is not required here.

### Files that need a manual merge

Re-apply these local changes after replacing the upstream file:

| File | Local change |
| --- | --- |
| `astro.config.mjs` | Workers Cache (`cache`, `routeRules`), custom `/_image` endpoint, `d1({ coalesce: true })`, and no `fonts:` entry (system stack lives in `custom.css`) |
| `src/layouts/Base.astro` | `custom.css` import (after `theme.css`), no `<Font>` tags, favicon links, Cloudflare Web Analytics beacon, footer meta link underline, search input `aria-label` |
| `src/styles/theme.css` | Stays stock: `:root` is empty, no local overrides |
| `src/utils/locale.ts` | `SITE_LOCALE = "zh-CN"` fallback, so dates, `<html lang>`, and the RSS language are Chinese without an Astro `i18n` config |
| `src/pages/posts/[slug].astro` | `CodeBlock` mapping and the comment-closing logic (`getCollectionInfo().commentsClosedAfterDays`) |
| `src/pages/pages/[slug].astro` | `CodeBlock` mapping |
| `src/pages/rss.xml.ts` | Lower-case the feed `<language>` |
| `src/worker.ts` | `generalCron: "0 * * * *"` |
| `tsconfig.json` | `astro/tsconfigs/strict` and the local `include` list |
| `package.json` | Package name, EmDash label, dependency ranges |

Keep new site styling in the `:root` block of `theme.css`, so a sync only has to re-apply one block instead of scattered edits.

## What not to do

- Don't add an accent colour or coloured section backgrounds. The site is black, white, and photography -- the theme ships that way and `theme.css` has no overrides.
- Don't replace the system Chinese stack with a display sans (Bebas, Anton, etc.). Headings rely on weight contrast, not novelty faces.
- Don't collapse the article gutter on desktop -- it's part of the reading experience.
- Don't use stock blog copy ("Welcome to my blog", "Stay tuned for more"). Write a real tagline that says what this blog is about.
- Don't seed the home page with three identical placeholder posts. If you only have one real post, show one real post.
- Comments are enabled on posts and rendered on the post detail page. Configure moderation before publishing the site, or remove `commentsEnabled` and the comments UI together.
