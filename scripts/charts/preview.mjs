// Writes scripts/charts/.preview/index.html with every chart, for visual review.
//   node scripts/charts/preview.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderAllCharts, chartCss } from './index.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const reportDir = path.resolve(here, '../../report');
const outDir = path.join(here, '.preview');
fs.mkdirSync(outDir, { recursive: true });

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
const charts = renderAllCharts(reportDir);

// Optional local copy of Work Sans (not committed; .preview is ignored) so screenshots use real metrics offline.
const localFont = fs.existsSync(path.join(outDir, 'worksans-latin.woff2'))
  ? "@font-face{font-family:'Work Sans';font-style:normal;font-weight:100 900;src:url(worksans-latin.woff2) format('woff2')}"
  : '';
const css = `
${localFont}
:root{--series-1:#009a8f;--series-2:#eb6834;--series-3:#2a78d6;--series-4:#eda100;--series-5:#4a3aa7;--series-6:#e87ba4;--series-7:#008300;--series-8:#e34948;
--seq-1:#d3f1ed;--seq-2:#a7e3db;--seq-3:#6fcfc3;--seq-4:#33b5a8;--seq-5:#009a8f;--seq-6:#007b72;--seq-7:#005d56;
--chart-ink:#16211f;--chart-muted:#56635f;--chart-grid:#e6e9e4;--chart-axis:#9aa39f;--chart-surface:#ffffff;--chart-highlight:#009a8f;--chart-dim:#c9d1cd;--chart-band:rgba(0,154,143,.14);--chart-on-dark:#ffffff;
--radius:8px;--line:#e6e9e4}
[data-theme=dark]{--series-1:#1aa89b;--series-2:#d95926;--series-3:#3987e5;--series-4:#c98500;--series-5:#9085e9;--series-6:#d55181;--series-7:#008300;--series-8:#e66767;
--seq-1:#12302d;--seq-2:#154540;--seq-3:#1a5d56;--seq-4:#1f7a70;--seq-5:#1aa89b;--seq-6:#58c4b8;--seq-7:#a6e3da;
--chart-ink:#e7eeec;--chart-muted:#a9b6b2;--chart-grid:#26322f;--chart-axis:#56635f;--chart-surface:#121a19;--chart-highlight:#1aa89b;--chart-dim:#34413e;--chart-band:rgba(26,168,155,.18);--chart-on-dark:#0b1413;--line:#26322f}
body{margin:0;background:var(--chart-surface);color:var(--chart-ink);font-family:'Work Sans',system-ui,sans-serif}
main{max-width:720px;margin:0 auto;padding:16px 20px}
figure.chart{margin:0 0 40px;padding:16px 0}
figure.chart h2{font-size:18px;margin:0 0 4px}
figure.chart .sub{color:var(--chart-muted);margin:0 0 12px;font-size:14px}
figure.chart .notes{color:var(--chart-muted);font-size:13px;margin:8px 0 0}
figure.chart .meta{color:var(--chart-muted);font-size:12px}
svg.chart-svg{display:block;width:100%;height:auto}
.mark:focus{outline:2px solid var(--chart-ink);outline-offset:1px}
.mark:hover{opacity:.85}
details{margin-top:8px;font-size:12px}
table.chart-data{border-collapse:collapse;font-size:12px}
table.chart-data th,table.chart-data td{border-bottom:1px solid var(--chart-grid);padding:2px 6px;text-align:left;vertical-align:top}
table.chart-data .num{text-align:right}
${chartCss}
`;

const figs = Object.values(charts)
  .map(
    (c) => `<figure class="chart" id="${c.id}" data-type="${c.type}">
<h2>${esc(c.title)}</h2><p class="sub">${esc(c.subtitle)}</p>
<div class="chart-body">${c.svg}</div>
${c.notes ? `<p class="notes">${esc(c.notes)}</p>` : ''}
<p class="meta">${esc(c.id)} | ${esc(c.type)} | ${esc(c.evidence)}, ${esc(c.confidence)} | sources: ${esc(c.source_ids.join(', '))}${c.interactive ? ' | interactive' : ''}</p>
<details><summary>Show data</summary>${c.table}</details>
</figure>`,
  )
  .join('\n');

const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Chart preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body><main>${figs}</main></body></html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), html);
console.log(`Wrote ${path.join(outDir, 'index.html')} with ${Object.keys(charts).length} charts`);
