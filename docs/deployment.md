# Deploying scoping.altprotein.vn

Production is live at **https://scoping.altprotein.vn** as of 19 September 2026. The Worker is `altprotein-scoping` in the Parker Vu Cloudflare account. D1 and session KV identifiers are pinned in `wrangler.jsonc`; R2 is bound by its bucket name. The apex domain is unchanged. The initial administrator registered a passkey on the production domain.

## 1. Validate and build

Use the checked-in pnpm lockfile and Node.js 24. Run the checks in the README. The intended runtime is Cloudflare Workers, not Pages.

```sh
pnpm exec wrangler login
pnpm build:production
```

`CLOUDFLARE_ENV=production` selects the production bindings at build time. Wrangler reads Astro's generated `.wrangler/deploy/config.json` pointer and `dist/server/wrangler.json`; inspect that generated configuration before deployment. It must name `altprotein-scoping`, with production D1 and R2 names. Astro also injects a `SESSION` KV binding and the static asset binding. Do not edit generated build files.

## 2. Deploy to the production domain

```sh
pnpm exec wrangler deploy --env production
```

Production resources already exist. Subsequent deployments reconnect to them and preserve CMS edits:

| Binding   | Resource                        | Purpose                                      |
| --------- | ------------------------------- | -------------------------------------------- |
| `DB`      | D1 `altprotein-scoping`         | Content, revisions, schema, CMS settings     |
| `MEDIA`   | R2 `altprotein-scoping-media`   | CMS media and backups                        |
| `SESSION` | KV, provisioned for this Worker | Editor sessions                              |
| `ASSETS`  | Worker static assets            | Compiled CSS, JS, logo and self-hosted fonts |

Keep local and production resources separate. Do not add `remote: true` to local bindings. If Wrangler writes resource identifiers back to configuration, review and commit those identifiers; they are configuration, not credentials.

EmDash applies core migrations on first request with its default migration mode. On a new site it initializes the collections, then the setup wizard imports the bundled report when **sample content is selected**. That checkbox represents the supplied full report, not placeholder content.

## 3. First administrator and content

Open `https://scoping.altprotein.vn/_emdash/admin` and sign in with your passkey. Initial setup and import are complete. On a separate new installation, use EmDash's setup wizard and import the bundled content before creating the first administrator on that installation's permanent domain. Default passkeys need no email service; email invitations and magic links require a separately configured provider.

Confirm there is one Report entry and 19 published Chapters. Check the homepage, tables in chapters 8 and 16, source links in chapter 19, editor draft preview, and publication. Editing a published entry should leave public content unchanged until Publish is clicked.

Preview links are intentionally restricted to signed-in Editor/Administrator sessions. The `/report/{id}` preview URL redirects to `/about` with its token; chapter previews resolve both slugs and CMS IDs. Pages containing previews send `noindex` and `private, no-store`. No public HTML cache is enabled in this scaffold.

## 4. Activate the custom domain

The following property is already configured inside `env.production` in `wrangler.jsonc`:

```json
"routes": [{ "pattern": "scoping.altprotein.vn", "custom_domain": true }]
```

Then rebuild and deploy:

```sh
pnpm deploy:production
```

HTTPS, public routes, and the canonical EmDash Site URL were verified on this final origin. `workers.dev` and version preview URLs are disabled. Passkeys are domain-bound; retain a supported account recovery path before changing the hostname.

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

## Production verification

Remote D1 initialization imported 19 published chapters and one report entry. All report pages, sitemap and logo returned 200 over verified HTTPS. Unknown chapters returned 404; anonymous draft previews and the development authentication bypass returned 403. Administrator passkey setup is complete. A private D1 export was saved outside Git after setup. Worker request logs showed successful requests without exceptions. Scheduled maintenance is configured every minute. See `validation.md` for the deployment version and remaining operational checks.

References: [EmDash deployment](https://docs.emdashcms.com/deployment/cloudflare/), [seed behavior](https://docs.emdashcms.com/themes/seed-files/), [authentication](https://docs.emdashcms.com/guides/authentication/), [evolving a deployed site](https://docs.emdashcms.com/deployment/schema-evolution/).
