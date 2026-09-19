// Runs only against the local development server. The marker is restored by --restore.
import fs from 'node:fs';
import { request } from '@playwright/test';
const statePath = process.env.PERSISTENCE_STATE;
if (!statePath) throw new Error('PERSISTENCE_STATE must point to an ignored temporary file.');
const editor = await request.newContext({
  baseURL: 'http://127.0.0.1:4321',
  extraHTTPHeaders: { 'X-EmDash-Request': '1', Origin: 'http://127.0.0.1:4321' },
});
try {
  const login = await editor.post('/_emdash/api/auth/dev-bypass');
  if (!login.ok()) throw new Error('Local test editor unavailable');
  const endpoint = '/_emdash/api/content/chapters/1-what-alternative-protein-is';
  const restoring = process.argv.includes('--restore');
  const original = restoring
    ? JSON.parse(fs.readFileSync(statePath, 'utf8'))
    : (await (await editor.get(endpoint)).json()).data.item.data;
  if (!restoring) fs.writeFileSync(statePath, JSON.stringify(original));
  const data = restoring
    ? original
    : { ...original, title: original.title + ' — persistence check' };
  const updated = await editor.put(endpoint, { data: { data } });
  if (!updated.ok()) throw new Error(await updated.text());
  const published = await editor.post(endpoint + '/publish', { data: {} });
  if (!published.ok()) throw new Error(await published.text());
  console.log(restoring ? 'Original chapter restored.' : 'Published temporary persistence marker.');
} finally {
  await editor.dispose();
}
