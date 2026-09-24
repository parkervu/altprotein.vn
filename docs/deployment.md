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

## 2. Replace the first edition in production (one time)

Edition 1.1 replaces the first site's `report` and `chapters` collections with a single `pages` collection. EmDash applies a seed only when a site is first set up, so the cleanest replacement is a **new, empty D1 database**; the old one stays untouched as a backup and a rollback path.

> **Workers Builds is connected to this repository.** Merging to `main` deploys to production. The new database must therefore be bound in `wrangler.jsonc` **in the same pull request, before it is merged**; otherwise the edition 1.1 code would start against the old database, which has no `pages` collection.

1. **Back up the current database** somewhere private (outside Git and outside `public/`):

   ```sh
   pnpm exec wrangler d1 export altprotein-scoping --remote --env production --output <private-path>/altprotein-scoping-edition-1.sql
   ```

2. **Create the new database** and note its id:

   ```sh
   pnpm exec wrangler d1 create altprotein-scoping-v2
   ```

3. In `wrangler.jsonc`, under `env.production.d1_databases`, set `database_name` to `altprotein-scoping-v2` and `database_id` to the new id, on the edition 1.1 branch. Run `pnpm cf:types`, commit, and let CI pass.

4. **Merge** (Workers Builds deploys), or deploy by hand with `pnpm deploy:production`. On the first request EmDash creates its schema in the new database.

5. **Run the setup wizard** at `https://scoping.altprotein.vn/_emdash/admin` straight away. Choose to include the bundled content (this is the full report, 57 pages, not placeholder content) and create the administrator. Passkeys are stored in the database, so the administrator registers a passkey again, on the production domain. Until setup is done, report pages show the not-found page (the home, data and glossary pages still load). Invite other editors from the admin.

6. **Check:** the admin lists 57 published Report pages; `/`, `/summary`, `/tom-tat`, `/report/ch11-plays` (sliders re-rank the plays), `/report/ch18-scenarios-2050` (scenario explorer), `/data/companies`, `/search?q=cassava`, `/glossary`, `/vi` and `/sitemap.xml` load; `/chapters/anything` redirects to `/report`; an anonymous request with `?_preview=x` gets 403; saving a draft leaves the public page unchanged until Publish.

7. Keep the old database for as long as you want a rollback path, then delete it with `wrangler d1 delete altprotein-scoping`.

**Rollback:** point `DB` back at the old database id and deploy the previous release (the commit before edition 1.1) with `wrangler rollback` or a redeploy. Do not point the edition 1.1 code at the old database: its schema has no `pages` collection.

**If you must keep the same database** (for example to keep the existing D1 id), export it as in step 1, then delete the old `report` and `chapters` collections in the admin, create the `pages` collection with the fields in `seed/seed.json`, and import the pages with EmDash's seed tooling or the admin. This is slower and easier to get wrong than steps 2 to 5.

## 3. Subsequent deploys

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
