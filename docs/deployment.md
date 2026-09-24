# Deploying scoping.altprotein.vn

The site runs as the Cloudflare Worker `altprotein-scoping` in the Parker Vu Cloudflare account, on the custom domain `scoping.altprotein.vn`. Bindings are set in `wrangler.jsonc` under `env.production`:

| Binding   | Resource                      | Purpose                                              |
| --------- | ----------------------------- | ---------------------------------------------------- |
| `DB`      | D1 database                   | Page content, revisions, schema, CMS settings, users |
| `MEDIA`   | R2 `altprotein-scoping-media` | CMS media and backups                                |
| `SESSION` | KV namespace                  | Editor sessions                                      |
| `ASSETS`  | Worker static assets          | CSS, JS, fonts, logo, CSV data and zip downloads     |

The Worker upload is about 4.2 MB gzipped (EmDash, the bundled seed, and the build-time charts and data), within the 10 MB limit of the Workers Paid plan. Static assets (about 20 MB, including `public/data` and `public/downloads`) are served by Workers static assets.

## 1. Validate and build

Use the checked-in lockfile and Node.js 24, and run the checks in the README. Then:

```sh
pnpm exec wrangler login
pnpm build:production
```

`build:production` regenerates `src/generated/`, `public/data/` and `public/downloads/` from `report/`, then builds with the production bindings. Inspect `dist/server/wrangler.json` before deploying: it must name `altprotein-scoping` and the production D1 and R2 resources.

## 2. Automatic deploys (Workers Builds)

Workers Builds is connected to this repository. A push to `main` builds with `pnpm build` and deploys with `wrangler deploy`; other branches get preview versions.

`pnpm build` (`scripts/build.mjs`) selects the `production` environment of `wrangler.jsonc` when Workers Builds builds `main` (`WORKERS_CI=1` and `WORKERS_CI_BRANCH=main`), so production deploys bind the production D1, R2 and KV. Preview branches and local builds keep the default bindings (`altprotein-scoping-local` and `altprotein-scoping-media-local`), so code under review never touches production data. Setting `CLOUDFLARE_ENV` explicitly overrides this. If the Workers Builds build command is changed from `pnpm build` (or `npm run build`), keep this behaviour, or set the deploy command to `pnpm deploy:production`.

## 3. Replacement of the first edition (done on 24 September 2026)

Edition 1.1 replaced the first site's `report` and `chapters` collections with one `pages` collection, on a new database:

- Production `DB` is `altprotein-scoping-v2` (`0d53e2ec-79d3-4fd9-8638-ceb2cae66f86`, APAC).
- The edition 1 database `altprotein-scoping` (`24951da1-734d-45c8-91ca-8a72934de162`) is unchanged and kept as a backup. An SQL export is in the private R2 bucket at `backups/d1-altprotein-scoping-edition-1-2026-09-24.sql`.
- The content was imported with EmDash's setup endpoint (bundled content included). The first attempt stopped after 51 of 57 pages; rerunning it is safe because existing entries are skipped, and the second run created the remaining 6.
- The administrator registers a passkey in the setup wizard at `/_emdash/admin`.

To repeat this on a fresh database: export the current one, `wrangler d1 create <name> --location apac`, set its name and id under `env.production.d1_databases`, merge (or `pnpm deploy:production`), then complete the setup wizard straight away, including the bundled content. Until an administrator exists, the first visitor to the wizard can claim that role. Check: the admin lists 57 published Report pages; `/`, `/summary`, `/tom-tat`, `/report/ch11-plays`, `/report/ch18-scenarios-2050`, `/data/companies`, `/search?q=cassava`, `/glossary`, `/vi` and `/sitemap.xml` load; `/chapters/anything` redirects to `/report`; an anonymous `?_preview=x` request gets 403.

**Rollback:** point `DB` back at the old database id and deploy the previous release (the commit before edition 1.1) with `wrangler rollback` or a redeploy. Do not point the edition 1.1 code at the old database: its schema has no `pages` collection.

## 4. Subsequent deploys

- Build from the lockfile, run CI, and deploy the same reviewed build (`pnpm deploy:production`). Deploying never overwrites page text edited in the CMS.
- Changes to data, charts, key numbers, sources or the page structure are made in `report/` and ship with a deploy. Changes to page text are made in the CMS. If the same page text changes in `report/content` too, copy it into the CMS by hand (or on a fresh setup the seed carries it).
- Before a schema or dependency upgrade, export D1 and create an EmDash backup; store exports outside Git and `public/`.

```sh
pnpm exec wrangler d1 export <database-name> --remote --env production --output <private-backup-path.sql>
pnpm exec wrangler versions list --env production
```

A code rollback does not undo data migrations or content edits. Recover content through EmDash revisions and backups.

## Notes

- `workers.dev` and version preview URLs are disabled; the custom domain route is in `wrangler.jsonc`.
- R2 is private. Do not expose the bucket: backups may share it with media.
- The scheduled handler runs EmDash maintenance every minute. Observability is enabled; check Worker logs after deploying.
- No analytics, email sending, paid plugins or AI Search are configured. Previews are limited to signed-in Editors and Administrators.

References: [EmDash deployment](https://docs.emdashcms.com/deployment/cloudflare/), [seed behaviour](https://docs.emdashcms.com/themes/seed-files/), [authentication](https://docs.emdashcms.com/guides/authentication/), [evolving a deployed site](https://docs.emdashcms.com/deployment/schema-evolution/).
