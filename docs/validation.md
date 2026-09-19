# Validation record

Validated locally on 19 September 2026 with Node.js 24, pnpm 11.19.0, Astro 7.3.3, EmDash 0.38.0, Wrangler 4.134.0, and Chrome.

## Content

Eight automated tests verify deterministic import, all 19 chapters and eight parts, exact text preservation for paragraphs/list items/body headings/table cells, all 27 tables and 966 cells, unchanged source URLs, unique anchors and cross-reference destinations, ordered-list starts, evidence labels, and safe HTML/link rendering. The source Markdown and SVG logo are retained unchanged.

The seed is a first-install artifact. Scientific claims and citations were not independently re-verified, and their uncertainty/revision caveats remain in the report.

## Browser and CMS

Four Playwright tests exercise every chapter, homepage rankings, section anchors, sitemap, 404 responses, evidence focus/reset by mouse and keyboard, mobile contents, horizontal tables, print visibility, and the native EmDash editor. CMS checks save a private draft, confirm published content stays unchanged, reject anonymous signed-preview requests, permit authenticated editor preview, publish the edit, and prove repeat seed setup preserves it. The original content is restored after testing.

Desktop (1440px) and mobile (390px) screenshots were visually inspected. Work Sans and the supplied logo render correctly; navigation and tables remain within the viewport.

## Runtime and persistence

A published local test edit survived stopping the application, rebuilding, and cold-starting the compiled Worker against the same local D1 state. The original chapter was then restored through EmDash.

The compiled Worker returned successful responses for the homepage, chapter pages, sitemap, and CMS login. Its development-only setup endpoint returned 403. A scheduled event invoked through Miniflare's `/cdn-cgi/handler/scheduled` endpoint returned `200 ok`.

A fresh checkout installed successfully with `pnpm install --frozen-lockfile`. Content validation and all eight unit tests passed from that clean installation. Type checking completed without errors or warnings, and its production build succeeded. The build emits an upstream large-chunk advisory for bundled CMS assets; this is not a failed build.

## Deployment boundary

No live Cloudflare resources or DNS changes were made. Production account access, remote D1 migration, domain-bound passkeys, DNS/TLS, and live backup/observability checks remain part of deployment, as detailed in `deployment.md`.
