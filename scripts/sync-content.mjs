// Bring the report pages in a running EmDash site in line with seed/seed.json.
//
//   EMDASH_TOKEN=ec_pat_... node scripts/sync-content.mjs --url https://scoping.altprotein.vn          # plan only
//   EMDASH_TOKEN=ec_pat_... node scripts/sync-content.mjs --url https://scoping.altprotein.vn --apply  # make the changes
//
// Pages are matched by slug (the page id). New pages are created and published; changed pages are
// updated and published (EmDash keeps the previous version as a revision); pages that are no longer
// in the report are moved to the trash, from where an administrator can restore them. Pages whose
// text is unchanged are left alone. Needs an API token with content read and write scopes, created
// in the admin by an administrator. `EMDASH_COOKIE` can be used instead for a local dev session.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib/report.mjs';

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const base = (arg('--url') ?? 'http://127.0.0.1:4321').replace(/\/$/, '');
const apply = args.includes('--apply');
const keepRetired = args.includes('--keep-retired');
const token = process.env.EMDASH_TOKEN;
const cookie = process.env.EMDASH_COOKIE;
if (!token && !cookie) {
  console.error('Set EMDASH_TOKEN (an EmDash API token) or EMDASH_COOKIE.');
  process.exit(1);
}

const FIELDS = ['title', 'short_title', 'subtitle', 'summary', 'body'];
const seed = JSON.parse(fs.readFileSync(path.join(ROOT, 'seed/seed.json'), 'utf8'));
const wanted = new Map(seed.content.pages.map((p) => [p.slug, p]));

async function api(method, route, body) {
  const res = await fetch(`${base}/_emdash/api${route}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : { Cookie: cookie }),
      'X-EmDash-Request': '1',
      Origin: base,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text.slice(0, 300) };
  }
  if (!res.ok)
    throw new Error(`${method} ${route}: ${res.status} ${JSON.stringify(json).slice(0, 400)}`);
  return json.data ?? json;
}

async function listPages() {
  const items = [];
  let cursor;
  do {
    const q = new URLSearchParams({ limit: '100' });
    if (cursor) q.set('cursor', cursor);
    const page = await api('GET', `/content/pages?${q}`);
    items.push(...(page.items ?? []));
    cursor = page.nextCursor;
  } while (cursor);
  return items;
}

const same = (a, b) => (a ?? '') === (b ?? '');

const existing = await listPages();
const bySlug = new Map(existing.map((e) => [e.slug, e]));
const plan = { create: [], update: [], unchanged: [], retire: [] };
for (const [slug, page] of wanted) {
  const current = bySlug.get(slug);
  if (!current) plan.create.push(page);
  else {
    const full = await api('GET', `/content/pages/${current.id}`);
    const item = full.item ?? full;
    const data = item.data ?? {};
    const changed = FIELDS.filter((f) => !same(data[f], page.data[f]));
    if (changed.length || item.status !== 'published') plan.update.push({ page, item, changed });
    else plan.unchanged.push(slug);
  }
}
for (const e of existing) if (!wanted.has(e.slug)) plan.retire.push(e);

console.log(`Site: ${base}`);
console.log(`Create ${plan.create.length}: ${plan.create.map((p) => p.slug).join(', ') || 'none'}`);
console.log(
  `Update ${plan.update.length}: ${plan.update.map((u) => `${u.page.slug} (${u.changed.join(', ') || u.item.status})`).join('; ') || 'none'}`,
);
console.log(`Unchanged ${plan.unchanged.length}`);
console.log(
  `${keepRetired ? 'Keep' : 'Move to trash'} ${plan.retire.length}: ${plan.retire.map((e) => e.slug).join(', ') || 'none'}`,
);
if (!apply) {
  console.log('\nPlan only. Run again with --apply to make these changes.');
  process.exit(0);
}

for (const page of plan.create) {
  const created = await api('POST', '/content/pages', { data: page.data, slug: page.slug });
  const id = (created.item ?? created).id;
  await api('POST', `/content/pages/${id}/publish`, {});
  console.log(`created ${page.slug}`);
}
for (const { page, item } of plan.update) {
  await api('PUT', `/content/pages/${item.id}`, { data: { ...item.data, ...page.data } });
  await api('POST', `/content/pages/${item.id}/publish`, {});
  console.log(`updated ${page.slug}`);
}
if (!keepRetired)
  for (const e of plan.retire) {
    await api('DELETE', `/content/pages/${e.id}`);
    console.log(`moved to trash ${e.slug}`);
  }
console.log('Done.');
