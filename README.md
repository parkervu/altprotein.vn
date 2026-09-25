# scoping.altprotein.vn

The website for **Alternative protein in Vietnam: a supply-side scoping study** (AltProtein Vietnam, draft v0.6, September 2026). It publishes the full report package in `report/`: 81 pages (nine front pages, 30 chapters in five parts, six audience briefs and 36 appendices coded M, S, D, F and R), 184 data tables, 2,384 sources, 56 charts and the working papers.

Astro and EmDash on Cloudflare Workers, with D1 (content), R2 (CMS media) and KV (editor sessions).

## What the site does

- **Every page** of the package, rendered from its Markdown with the report tokens: numbered citations with a per-page source list linked to Appendix T, evidence badges (`VN-direct`, `VN-adjacent`, `general` with confidence), foresight badges for Part V (with `vision` styled apart), cross-links, key-number tiles and charts. Callouts (corrections, method notes, speculative, vision) have their own styles.
- **Charts** are drawn as inline SVG at build time from `report/charts/chart-specs.json` (no chart library), in light and dark themes, each with its data table and source line.
- **Plays ranking** (chapter 11): presets and seven weight sliders re-rank the ten plays; each play opens its card. Without JavaScript the balanced ranking and all cards are shown.
- **Scenario explorer** (chapter 18): a two-by-two of the 2050 worlds with each world's picture, signposts and play scores. Without JavaScript all four are shown.
- **Audience paths**: pick an audience on the home page to get its reading path and highlight its pages everywhere.
- **Data browser** at `/data`: all tables with the data dictionary's column descriptions; filter, sort and download. Zip downloads of all data, the working papers and the report Markdown.
- **Search** across the full text of every page (EmDash full-text search), the glossary and the main registers; a **bilingual glossary** at `/glossary`.
- **English or Vietnamese interface**: every page is also served under `/vi/…` with Vietnamese navigation and labels. Report text stays in English, except the Vietnamese executive summary (`/tom-tat`), the bilingual glossary and the Vietnamese key-number labels.
- Light and dark themes, print styles, keyboard navigation, no trackers.

## Local development

Use Node.js 24 and pnpm 11.19.0 (Node 22.12 or later works).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

In another terminal, initialise the **local** CMS and import the report:

```sh
pnpm setup:local
```

Open [the site](http://127.0.0.1:4321) and [the local editor](http://127.0.0.1:4321/_emdash/api/auth/dev-bypass?redirect=/_emdash/admin). The helper is an EmDash development-only endpoint; it does not exist in production. Local D1, R2 and sessions persist under `.wrangler/`; delete `.wrangler/state` to start again from the seed.

`pnpm dev`, `pnpm build` and `pnpm typecheck` first run `scripts/build-data.mjs`, which reads `report/` and writes `src/generated/` (bundled into the Worker) and `public/data/`, `public/downloads/` (static files). These outputs are not committed.

## Where things live

| Path                                 | What it is                                                                                                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `report/`                            | The report package as delivered: content, data, charts, sources, tools, working papers, and its own `README.md` (build brief) and `STYLE.md` (writing and token rules). |
| `seed/seed.json`                     | EmDash schema and initial content, generated from `report/content` by `pnpm content:seed`.                                                                              |
| `scripts/build-data.mjs`             | Build-time data: page tree, key numbers, sources, glossary, plays, scenarios, data dictionary, search records, charts and zip downloads.                                |
| `scripts/charts/`                    | The SVG chart renderer (`pnpm charts:check` renders a preview and checks every chart).                                                                                  |
| `src/lib/markdown.ts`                | The report-token renderer.                                                                                                                                              |
| `src/lib/site.ts`, `src/lib/i18n.ts` | Page tree, URLs, and interface text in English and Vietnamese.                                                                                                          |
| `src/pages/`                         | Routes: `/`, `/summary`, `/tom-tat`, `/report/{id}`, `/briefs/{id}`, `/appendices/{id}`, `/data`, `/glossary`, `/search`, `/about`, and `/vi/…` for each.               |

## Editorial workflow

- **Report pages** in the EmDash admin holds all 81 pages. Each has a title, a short title, a summary (used for cards and meta descriptions) and a **body in Markdown with the report tokens** exactly as in the package (see `report/STYLE.md`): `[@MAC-04]`, `{VN-direct|High}` (escaped as `{VN-direct\|High}` inside tables), `{fx:projection}`, `{dx:revealed}`, `[[ch07-rules]]`, `{{kn:…}}`, `{{chart:…}}` and `> **Correction.** …` callouts. Save a draft, preview, then publish.
- Previews need a signed-in Editor or Administrator. Public pages send `private, no-store`.
- The **structure** (which pages exist, their order, part and section, navigation, audiences and reading paths) comes from `report/site-manifest.json` and the page frontmatter, and the **data** (key numbers, sources, charts, CSVs) from `report/data` and `report/charts`. Changing those is a code change: edit `report/`, run `python3 report/tools/validate.py` (needs PyYAML) and `pnpm content:check`, and deploy.
- After first setup, EmDash (D1) is the source of truth for page text. `pnpm content:seed` regenerates the seed from `report/content`; it does **not** overwrite a running CMS.
- The site does not change the substance of the content. Where a chart spec's note was an instruction to the builder rather than a note for readers, `src/lib/charts.ts` shows a reader-facing version; the spec is unchanged.

## Updating to a new report package

1. Replace `report/` with the new package and run `python3 report/tools/validate.py` (0 errors).
2. `pnpm content:seed`, then fix anything `pnpm test` reports. The tests fail if a page the interface refers to by role (`ROLE` in `src/lib/site.ts`) was renamed, or if a chart spec has no renderer in `scripts/charts/`.
3. If page ids changed, add the old ids to `src/lib/redirects.ts` so links keep working.
4. Deploy, then bring the live CMS in line with the seed. An administrator creates an API token (content read and write) in the admin, and:

   ```sh
   EMDASH_TOKEN=ec_pat_... node scripts/sync-content.mjs --url https://scoping.altprotein.vn          # shows the plan
   EMDASH_TOKEN=ec_pat_... node scripts/sync-content.mjs --url https://scoping.altprotein.vn --apply  # applies it
   ```

   It creates new pages, updates changed ones (EmDash keeps the earlier version as a revision), and moves pages that left the report to the trash. Pages whose text already matches are left alone, so edits made in the CMS since the last package survive unless the package changed the same page.

## Validation

```sh
pnpm content:check     # seed matches report/content; the package validator reports 0 errors
pnpm test              # rendering, tokens, scores, search, charts
pnpm cf:types
pnpm typecheck
pnpm test:e2e          # every page, widgets, data browser, CMS editing (Playwright)
pnpm charts:check      # optional: chart preview and checks
pnpm build:production
```

For a preinstalled Chromium, set `PLAYWRIGHT_EXECUTABLE=/path/to/chromium` (or `PLAYWRIGHT_CHANNEL=chrome`). Browser tests run only against `127.0.0.1:4321` and restore the page they edit.

GitHub Actions runs these checks on pull requests with read-only permissions. It does not deploy.

See [deployment and recovery](docs/deployment.md), including the steps to replace the first edition's content in production.
