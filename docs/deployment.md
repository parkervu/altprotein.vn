# Deploying scoping.altprotein.vn

This scaffold is deploy-ready but **not deployed**. The commands below create or change Cloudflare resources only when an operator runs them. `altprotein.vn` must be an active Cloudflare zone in the same account as the Worker.

## 1. Validate and build

Use the checked-in pnpm lockfile and Node.js 24. Run the checks in the README. The intended runtime is Cloudflare Workers, not Pages.

```sh
pnpm exec wrangler login
pnpm build:production
```

`CLOUDFLARE_ENV=production` selects the production bindings at build time. Wrangler reads Astro's generated `.wrangler/deploy/config.json` pointer and `dist/server/wrangler.json`; inspect that generated configuration before deployment. It must name `altprotein-scoping`, with production D1 and R2 names. Astro also injects a `SESSION` KV binding and the static asset binding. Do not edit generated build files.

## 2. Provision and deploy to workers.dev

```sh
pnpm exec wrangler deploy --env production
```

The first deployment provisions/reconnects named resources through Wrangler's supported auto-provisioning flow:

| Binding   | Resource                        | Purpose                                      |
| --------- | ------------------------------- | -------------------------------------------- |
| `DB`      | D1 `altprotein-scoping`         | Content, revisions, schema, CMS settings     |
| `MEDIA`   | R2 `altprotein-scoping-media`   | CMS media and backups                        |
| `SESSION` | KV, provisioned for this Worker | Editor sessions                              |
| `ASSETS`  | Worker static assets            | Compiled CSS, JS, logo and self-hosted fonts |

Keep local and production resources separate. Do not add `remote: true` to local bindings. If Wrangler writes resource identifiers back to configuration, review and commit those identifiers; they are configuration, not credentials.

EmDash applies core migrations on first request with its default migration mode. On a new site it initializes the collections, then the setup wizard imports the bundled report when **sample content is selected**. That checkbox represents the supplied full report, not placeholder content.

## 3. First administrator and content

Open `https://<worker>.<account>.workers.dev/_emdash/admin`, complete setup, and import the bundled content. Create the administrator using EmDash's passkey flow. For a first production setup, complete this step before sharing the site publicly. Default passkeys need no email service; email invitations and magic links require a separately configured provider.

Confirm there is one Report entry and 19 published Chapters. Check the homepage, tables in chapters 8 and 16, source links in chapter 19, editor draft preview, and publication. Editing a published entry should leave public content unchanged until Publish is clicked.

Preview links are intentionally restricted to signed-in Editor/Administrator sessions. The `/report/{id}` preview URL redirects to `/about` with its token; chapter previews resolve both slugs and CMS IDs. Pages containing previews send `noindex` and `private, no-store`. No public HTML cache is enabled in this scaffold.

## 4. Activate the custom domain

After the workers.dev site is working, add this property inside `env.production` in `wrangler.jsonc`:

```json
"routes": [{ "pattern": "scoping.altprotein.vn", "custom_domain": true }]
```

Then rebuild and deploy:

```sh
pnpm deploy:production
```

Verify HTTPS and all key routes at `https://scoping.altprotein.vn`. Set EmDash's Site URL to this final origin. Passkeys are bound to their registration domain: establish and verify administrator access on the final domain before retiring workers.dev access. Keep a supported account recovery path available during the transition.

The root `altprotein.vn` hostname is not assigned a route by this project. No analytics, email sending, paid plugins, or AI Search is configured.

## 5. Subsequent deploys and recovery

- Build from the lockfile, run CI, and deploy the same reviewed build. Application deployment does not synchronize `seed/seed.json` over existing CMS content.
- For content/schema changes after launch, use the CMS and EmDash's documented schema migration workflow. Do not rerun a seed in overwrite mode.
- Before a schema or dependency upgrade, export D1 and create an EmDash backup. Store exports outside the public asset directory and outside Git.

```sh
pnpm exec wrangler d1 export altprotein-scoping --remote --env production --output <private-backup-path.sql>
pnpm exec wrangler versions list --env production
```

Rollback a Worker with Wrangler's supported rollback command after checking database compatibility. A code rollback does **not** undo data migrations or content edits. Recover content through EmDash revisions/backups; use a D1 recovery plan for database changes.

R2 is private. Do not expose the entire bucket: backups may share it with media. The scheduled Worker handler runs EmDash maintenance every minute. Observability is enabled; inspect Worker logs for migration, request, and scheduled-task failures after deployment.

## Live checks still required

Cloudflare account access/billing, resource creation, migration on remote D1, real passkey setup, custom-domain DNS/TLS, backups, and production observability must be verified during deployment. None was exercised against a live Cloudflare account for this scaffold.

References: [EmDash deployment](https://docs.emdashcms.com/deployment/cloudflare/), [seed behavior](https://docs.emdashcms.com/themes/seed-files/), [authentication](https://docs.emdashcms.com/guides/authentication/), [evolving a deployed site](https://docs.emdashcms.com/deployment/schema-evolution/).
