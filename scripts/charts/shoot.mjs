// Verification: renders the preview in Chromium, screenshots each chart (light and dark) and runs checks.
//   node scripts/charts/preview.mjs && node scripts/charts/shoot.mjs [chart-id ...]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import { renderAllCharts } from './index.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const reportDir = path.resolve(here, '../../report');
const outDir = path.join(here, '.preview', 'shots');
fs.mkdirSync(outDir, { recursive: true });
const only = process.argv.slice(2);

// ---- static checks ----
const specs = JSON.parse(fs.readFileSync(path.join(reportDir, 'charts', 'chart-specs.json'), 'utf8')).charts;
const charts = renderAllCharts(reportDir);
const problems = [];
for (const s of specs) if (!charts[s.id]) problems.push(`missing ${s.id}`);
for (const c of Object.values(charts)) {
  for (const [k, v] of Object.entries(c)) {
    const str = typeof v === 'string' ? v : JSON.stringify(v);
    if (/[–—]/.test(str)) problems.push(`${c.id}.${k} contains an en or em dash`);
  }
  for (const k of ['svg', 'table']) {
    if (/#[0-9a-fA-F]{3,8}\b/.test(c[k])) problems.push(`${c.id}.${k} contains a hex colour`);
    if (/\brgba?\(/.test(c[k]) || /\bhsla?\(/.test(c[k])) problems.push(`${c.id}.${k} contains rgb()/hsl()`);
    if (/font-family/.test(c[k])) problems.push(`${c.id}.${k} sets font-family`);
  }
  const sizes = [...c.svg.matchAll(/font-size="([\d.]+)"/g)].map((m) => +m[1]);
  if (sizes.some((s) => s < 11)) problems.push(`${c.id} has font-size below 11`);
  const ids = [...c.svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) problems.push(`${c.id} duplicate ids`);
  if (c.interactive !== (c.type === 'interactive-bar')) problems.push(`${c.id} interactive flag`);
}

const exe = [process.env.PLAYWRIGHT_EXECUTABLE, '/opt/pw-browsers/chromium'].find((p) => p && fs.existsSync(p));
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage({ viewport: { width: 760, height: 900 } });
await page.goto('file://' + path.join(here, '.preview', 'index.html'));
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
console.log('Work Sans loaded:', await page.evaluate(() => document.fonts.check("12px 'Work Sans'")));
// XML well-formedness of every svg string, and counts
const xmlErrors = await page.evaluate((all) => {
  const errs = [];
  for (const [id, c] of Object.entries(all)) {
    if (!c.svg.startsWith('<svg')) continue;
    const doc = new DOMParser().parseFromString(c.svg, 'image/svg+xml');
    if (doc.getElementsByTagName('parsererror').length) errs.push(id + ': ' + doc.getElementsByTagName('parsererror')[0].textContent.slice(0, 200));
  }
  return errs;
}, charts);
problems.push(...xmlErrors);
const nSvg = await page.evaluate(() => document.querySelectorAll('svg.chart-svg').length);
const nHtml = await page.evaluate(() => document.querySelectorAll('.chart-html').length);
// text overflow check: any text element outside its svg viewBox
const overflow = await page.evaluate(() => {
  const out = [];
  for (const svg of document.querySelectorAll('svg.chart-svg')) {
    const vb = svg.viewBox.baseVal;
    const sr = svg.getBoundingClientRect();
    const k = vb.width / sr.width;
    for (const t of svg.querySelectorAll('text')) {
      const r = t.getBoundingClientRect();
      const b = { x: (r.left - sr.left) * k, y: (r.top - sr.top) * k, width: r.width * k, height: r.height * k };
      if (b.x < -1 || b.y < -1 || b.x + b.width > vb.width + 1 || b.y + b.height > vb.height + 1)
        out.push(`${svg.closest('figure').id}: "${t.textContent.slice(0, 40)}" bbox ${Math.round(b.x)},${Math.round(b.y)},${Math.round(b.width)}x${Math.round(b.height)} vs ${vb.width}x${vb.height}`);
    }
  }
  return out;
});
problems.push(...overflow.map((o) => 'overflow ' + o));
console.log(`svg.chart-svg: ${nSvg}, .chart-html: ${nHtml}, total ${nSvg + nHtml} of ${specs.length}`);

for (const theme of ['light', 'dark']) {
  await page.evaluate((t) => document.documentElement.setAttribute('data-theme', t), theme);
  for (const s of specs) {
    if (only.length && !only.includes(s.id)) continue;
    const el = await page.$(`#${s.id}`);
    await el.screenshot({ path: path.join(outDir, `${theme}-${s.id}.png`) });
  }
}
await browser.close();
if (problems.length) {
  console.log('PROBLEMS:\n' + problems.join('\n'));
  process.exitCode = 1;
} else console.log('All checks passed');
