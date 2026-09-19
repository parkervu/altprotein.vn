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

## Production deployment — 19 September 2026

Deployed to https://scoping.altprotein.vn with Worker version `f2da4b02-2935-4429-8c39-707361e99200`. D1, private R2 and session KV were provisioned. The report import created all 20 entries; the administrator completed passkey registration on the final domain. A second deployment retained the imported content and completed setup.

Verified HTTPS responses for all 19 chapters, homepage, front matter, sitemap and logo; 404 for an unknown chapter; 403 for anonymous previews and the development login endpoint. Public and authoritative DNS resolve to Cloudflare. The operator's local resolver initially retained an NXDOMAIN response, so endpoint checks used the authoritative IP with full TLS hostname verification.

A private D1 backup was exported outside Git. Live request logs and two scheduled maintenance events showed successful outcomes without exceptions. A backup restore drill remains an operational follow-up check. Desktop and mobile browser smoke checks passed without runtime errors or mobile page overflow. The original local persistence and editor tests remain the evidence for edit/rebuild behavior; production content was not changed for those tests.
