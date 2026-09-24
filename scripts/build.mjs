// Build the site: generate the build-time data, then run `astro build`.
//
// Workers Builds deploys the production branch with a plain `wrangler deploy`, which uses the
// configuration Astro generates at build time. So when Workers Builds builds `main`, select the
// production environment in wrangler.jsonc; preview branches and local builds keep the default
// (non-production) bindings. An explicit CLOUDFLARE_ENV always wins.
import { spawnSync } from 'node:child_process';

const env = { ...process.env };
if (!env.CLOUDFLARE_ENV && env.WORKERS_CI === '1' && env.WORKERS_CI_BRANCH === 'main')
  env.CLOUDFLARE_ENV = 'production';
if (env.CLOUDFLARE_ENV) console.log(`Building for Cloudflare environment: ${env.CLOUDFLARE_ENV}`);

for (const [cmd, args] of [
  [process.execPath, ['scripts/build-data.mjs']],
  ['pnpm', ['exec', 'astro', 'build']],
]) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', env });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
