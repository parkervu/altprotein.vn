# Which novel protein should Vietnam build?

The complete English scoping report from **altprotein.vn**, prepared for **scoping.altprotein.vn**. Nineteen chapters across eight parts, a ranking dashboard, evidence filters, editable tables, and an EmDash editorial backend.

## Local development

Use Node.js 24 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

In another terminal, initialize the **local** CMS and import the report:

```sh
pnpm setup:local
```

Open [the report](http://127.0.0.1:4321) and [the local editor](http://127.0.0.1:4321/_emdash/api/auth/dev-bypass?redirect=/_emdash/admin). The helper is an upstream EmDash **development-only** endpoint; it is unavailable in production. Alternatively, complete the setup wizard at `/_emdash/admin` and select the bundled content.

The first server request creates the CMS schema. Importing content is a separate setup step. Existing entries are skipped on repeat setup, not replaced. Local D1, R2, and sessions persist under `.wrangler/`; keep that directory to retain edits.

Astro may launch in the background when it detects an agent. Use `pnpm exec astro dev --ignore-lock --host 127.0.0.1` for a foreground server, or `pnpm exec astro dev stop` to stop a tracked background server.

## Editorial workflow

- **Chapters** contains the complete report, in chapter-number order. Edit text, evidence labels, and tables directly in the rich-text editor, save a draft, preview, and publish.
- **Report** contains the title, subtitle, revision metadata, reading guide, and revision notes. Its public page is `/about`.
- Previews require an authenticated **Editor or Administrator** session, even with a valid signed URL. Public pages use published content and `private, no-store` to prevent stale revisions or cached previews.
- Evidence labels are ordinary editable text: `[VN-direct]`, `[VN-adjacent]`, and `[general]`. The reader converts these into keyboard-accessible buttons. Only explicitly labelled paragraphs, list items, or table cells are de-emphasized when a different label is selected. Unlabelled context stays visible.
- Chapter slugs are seeded once. Keep slugs and chapter numbers stable to preserve cross-references; create a redirect in EmDash if a slug must change. Section links use block identity (or an existing numbered section); replacing a whole heading block can change its link.
- Native text, emphasis, links, lists, tables, and dividers are supported. The report renderer deliberately does not execute arbitrary HTML. New media/custom block types need a renderer addition before use.

The supplied source is preserved verbatim in `content/report.md`. `pnpm content:import` deterministically regenerates `seed/seed.json`; it **does not synchronize over a running CMS**. After first setup, EmDash/D1 is the editorial source of truth. Export CMS content before any schema migration; do not overwrite it with a regenerated seed.

## Validation

```sh
pnpm content:check
pnpm test
pnpm cf:types
pnpm typecheck
pnpm exec playwright install chromium
pnpm test:e2e
pnpm build:production
```

For an installed Chrome instead of Playwright Chromium, set `PLAYWRIGHT_CHANNEL=chrome` when running `pnpm test:e2e`. Browser tests operate only against `127.0.0.1:4321`, seed the local database, and restore the chapter they edit.

GitHub Actions runs content checks, unit tests, type checking, browser tests, and the production build. It has read-only repository permissions and does not deploy.

## Infrastructure

Astro + EmDash 0.38 on Cloudflare Workers; D1 stores content, R2 stores CMS media, and a KV binding stores editor sessions. The supplied SVG is unchanged. Work Sans is bundled from Fontsource (including Vietnamese glyphs), so readers do not contact a font CDN.

See [deployment and recovery](docs/deployment.md) and [validation record](docs/validation.md). No Cloudflare resources or DNS records are created by installation, tests, or a build. The production target has not been published by this scaffold.
