// HTML renderings for matrix-table and cards-2x2 charts (semantic markup, CSS in chartCss).
import { esc, clean, table } from './lib.mjs';

const e = (s) => esc(clean(s));
const wrapDiv = (type, alt, inner) => `<div class="chart-html chart-${type}" role="group" aria-label="${e(alt)}">${inner}</div>`;
const chip = (cls, label, tip) =>
  `<span class="ch-chip ch-${cls} mark" tabindex="0" data-tip="${e(tip)}"><span class="ch-sw" aria-hidden="true"></span>${e(label)}</span>`;
const key = (items) => `<ul class="ch-key">${items.map(([cls, label]) => `<li class="ch-${cls}"><span class="ch-sw" aria-hidden="true"></span>${e(label)}</li>`).join('')}</ul>`;

// ---------------------------------------------------------------------------
export function capabilityMatrix(spec, D) {
  const rows = D.csv(spec.data.file);
  // encoding.status_colour: yes-open = green, yes-unclear = amber, yes-closed = grey, absent = red outline
  const ST = {
    'yes-open': ['open', 'Exists, open'],
    'yes-unclear': ['unclear', 'Exists, access unclear'],
    'yes-closed': ['closed', 'Exists, closed'],
    absent: ['absent', 'Not found'],
  };
  const body = rows
    .map((r) => {
      const [cls, label] = ST[r.status] || ['closed', r.status];
      return `<tr><th scope="row">${e(r.capability)}</th><td>${chip(cls, label, `${r.capability}: ${label}`)}</td><td>${e(r.exists_in_vietnam)}</td><td>${e(r.who || '')}</td><td>${e(r.open_to_third_parties || '')}</td></tr>`;
    })
    .join('');
  const html = wrapDiv(
    spec.type,
    spec.alt_text,
    key(Object.values(ST)) +
      `<div class="ch-scroll"><table class="ch-matrix"><thead><tr><th scope="col">Capability</th><th scope="col">Status</th><th scope="col">Exists in Vietnam</th><th scope="col">Who</th><th scope="col">Open to third parties</th></tr></thead><tbody>${body}</tbody></table></div>`,
  );
  const tbl = table(spec.title, [
    { key: 'capability', label: 'Capability' },
    { key: 'status', label: 'Status', fmt: (v) => (ST[v] ? ST[v][1] : v) },
    { key: 'exists_in_vietnam', label: 'Exists in Vietnam' },
    { key: 'who', label: 'Who' },
    { key: 'open_to_third_parties', label: 'Open to third parties' },
  ], rows);
  return { html, table: tbl };
}

// ---------------------------------------------------------------------------
// Colour rule from the spec notes: self-declaration or listed feed = green; self-declaration with legal
// risk, or aquafeed trial ambiguity = amber; GMO closed-production, cultivated or new microbial biomass = red.
export const ROUTE_STATUS = {
  'RT-001': 'green', // plant-based food: self-declaration
  'RT-002': 'green', // koji: self-declaration
  'RT-003': 'amber', // fungal biomass food: self-declaration with legal risk
  'RT-004': 'amber', // microalgae food: self-declaration, new-species risk as for fungal biomass
  'RT-005': 'amber', // imported precision-fermented protein: self-declaration, GMO-product risk
  'RT-006': 'red', //   made-in-Vietnam precision fermentation: GMO closed-production certificate, timeline unpublished
  'RT-007': 'red', //   cultivated meat or seafood: no national route
  'RT-008': 'green', // insect meal, livestock: listed feed
  'RT-009': 'amber', // insect meal, aquafeed: aquafeed trial ambiguity
  'RT-010': 'green', // duckweed or algae meal, livestock: listed feed
  'RT-011': 'amber', // duckweed or microalgae, aquafeed: aquafeed trial ambiguity
  'RT-012': 'green', // yeast protein, livestock: listed feed
  'RT-013': 'amber', // yeast protein, aquafeed: aquafeed listing ambiguity
  'RT-014': 'red', //   new microbial biomass, livestock
  'RT-015': 'red', //   SCP, aquafeed: new microbial biomass
  'RT-016': 'amber', // fermented soybean meal: aquafeed ambiguity
  'RT-017': 'amber', // new additive or enzyme: registration route exists; enzyme and GM-derived status unclear
};
export function routeToMarket(spec, D) {
  const rows = D.csv(spec.data.file);
  const ST = {
    green: ['green', 'Clear route'],
    amber: ['amber', 'Route with legal risk'],
    red: ['red', 'No route or unpublished timeline'],
  };
  const body = rows
    .map((r) => {
      const [cls, label] = ST[ROUTE_STATUS[r.record_id] || 'amber'];
      return `<tr><th scope="row">${e(r.product_type)}</th><td>${chip(cls, label, `${r.product_type}: ${label}`)}</td><td>${e(r.route)}</td><td>${e(r.documented_agency_time)}</td><td>${e(r.main_open_risk)}</td></tr>`;
    })
    .join('');
  const html = wrapDiv(
    spec.type,
    spec.alt_text,
    key(Object.values(ST)) +
      `<div class="ch-scroll"><table class="ch-matrix"><thead><tr><th scope="col">Product type</th><th scope="col">Status</th><th scope="col">Route</th><th scope="col">Documented agency time</th><th scope="col">Main open risk</th></tr></thead><tbody>${body}</tbody></table></div>`,
  );
  const tbl = table(spec.title, [
    { key: 'product_type', label: 'Product type' },
    { key: 'record_id', label: 'Status', fmt: (v) => ST[ROUTE_STATUS[v] || 'amber'][1] },
    { key: 'route', label: 'Route' },
    { key: 'documented_agency_time', label: 'Documented agency time' },
    { key: 'main_open_risk', label: 'Main open risk' },
  ], rows);
  return { html, table: tbl };
}

// ---------------------------------------------------------------------------
function card({ id, name, pos, body }) {
  return `<article class="ch-card"><p class="ch-card-title"><span class="ch-id">${e(id)}</span> <strong>${e(name)}</strong></p>${pos ? `<p class="ch-pos">${e(pos)}</p>` : ''}${body}</article>`;
}
const dl = (pairs) => `<dl>${pairs.map(([k, v]) => `<dt>${e(k)}</dt><dd>${e(v)}</dd>`).join('')}</dl>`;

export function scenarios2035(spec, D) {
  const rows = D.csv(spec.data.file);
  // Axes: x = food_law_route (no workable route | workable route), y = fishmeal_soy_gap (wide top, narrow bottom).
  // Notes: S2 spans both route states; S3 spans both gap states. S3 takes the whole right column; S2 sits
  // top left and says it spans both route states.
  const col = (r) => (/^No workable/i.test(r.food_law_route) ? 1 : /^Workable/i.test(r.food_law_route) ? 2 : 1);
  const rowOf = (r) => (/^Wide/i.test(r.fishmeal_soy_gap) ? 1 : /^Narrow/i.test(r.fishmeal_soy_gap) ? 2 : 0);
  const cells = rows
    .map((r) => {
      const c = col(r);
      const rr = rowOf(r);
      const area = rr === 0 ? `grid-column:${c + 1};grid-row:2 / span 2` : `grid-column:${c + 1};grid-row:${rr + 1}`;
      const pos = `Food-law route: ${r.food_law_route}. Fishmeal-soy price gap: ${r.fishmeal_soy_gap}.`;
      return `<div class="ch-cell" style="${area}">${card({ id: r.scenario_id, name: r.name, pos, body: dl([['Picture', r.picture], ['Drivers', r.drivers], ['Signposts', r.signposts]]) })}</div>`;
    })
    .join('');
  const html = wrapDiv(
    spec.type,
    spec.alt_text,
    `<div class="ch-quad">` +
      `<div class="ch-xhead" style="grid-column:2;grid-row:1">Food-law route: <strong>no workable route</strong></div>` +
      `<div class="ch-xhead" style="grid-column:3;grid-row:1">Food-law route: <strong>workable route with reliance</strong></div>` +
      `<div class="ch-yhead" style="grid-column:1;grid-row:2"><span>Price gap: <strong>wide</strong></span></div>` +
      `<div class="ch-yhead" style="grid-column:1;grid-row:3"><span>Price gap: <strong>narrow</strong></span></div>` +
      cells +
      `</div>`,
  );
  const tbl = table(spec.title, [
    { key: 'scenario_id', label: 'Scenario' },
    { key: 'name', label: 'Name' },
    { key: 'food_law_route', label: 'Food-law route' },
    { key: 'fishmeal_soy_gap', label: 'Fishmeal-soy gap' },
    { key: 'picture', label: 'Picture' },
    { key: 'drivers', label: 'Drivers' },
    { key: 'signposts', label: 'Signposts' },
  ], rows);
  return { html, table: tbl };
}

export function scenarios2050(spec, D) {
  const rows = D.csv(spec.data.file);
  const ann = spec.annotations || [];
  const quote = (a) => (a.match(/"([^"]+)"/) || [null, ''])[1];
  const xLabel = quote(ann.find((a) => /^x axis label/i.test(a)) || '');
  const yLabel = quote(ann.find((a) => /^y axis label/i.test(a)) || '');
  const cells = rows
    .map((r) => {
      const c = Number(r.x) + 2; // x 0 = left
      const rr = Number(r.y) === 1 ? 1 : 2; // y 1 = top
      const badges = `<ul class="ch-badges"><li>Grows from 2035: ${e(r.grows_from_2035)}</li><li>Soybean-meal need 2050: ${e(r.sbm_2050_mt_indicative)} Mt (indicative)</li><li>Microbial feed-protein share 2050: ${e(r.microbial_share_2050_indicative)} (indicative)</li></ul>`;
      const pos = `Import stress: ${r.import_stress}. Fermentation market: ${r.fermentation_market}.`;
      return `<div class="ch-cell" style="grid-column:${c};grid-row:${rr}">${card({ id: r.scenario_id, name: r.name, pos, body: `<p class="ch-body">${e(r.one_line)}</p>${badges}` })}</div>`;
    })
    .join('');
  const html = wrapDiv(
    spec.type,
    spec.alt_text,
    `<div class="ch-quad ch-quad-b">` +
      `<div class="ch-yhead" style="grid-column:1;grid-row:1 / span 2"><span>${e(yLabel)}</span></div>` +
      cells +
      `<div class="ch-xfoot" style="grid-column:2 / span 2;grid-row:3">${e(xLabel)}</div>` +
      `</div>`,
  );
  const tbl = table(spec.title, [
    { key: 'scenario_id', label: 'World' },
    { key: 'name', label: 'Name' },
    { key: 'import_stress', label: 'Import stress' },
    { key: 'fermentation_market', label: 'Fermentation market' },
    { key: 'one_line', label: 'Summary' },
    { key: 'grows_from_2035', label: 'Grows from 2035' },
    { key: 'sbm_2050_mt_indicative', label: 'Soybean-meal need 2050 (Mt, indicative)' },
    { key: 'microbial_share_2050_indicative', label: 'Microbial share 2050 (indicative)' },
  ], rows);
  return { html, table: tbl };
}

// ---------------------------------------------------------------------------
export const chartCss = [
  '.chart-html{color:var(--chart-ink);font-size:.875rem;line-height:1.45}',
  '.chart-html .ch-key{list-style:none;margin:0 0 .6rem;padding:0;display:flex;flex-wrap:wrap;gap:.3rem 1rem}',
  '.chart-html .ch-sw{display:inline-block;width:.8em;height:.8em;border-radius:2px;margin-right:.4em;vertical-align:-.1em;box-sizing:border-box}',
  '.chart-html .ch-open .ch-sw,.chart-html .ch-green .ch-sw{background:var(--series-7)}',
  '.chart-html .ch-unclear .ch-sw,.chart-html .ch-amber .ch-sw{background:var(--series-4)}',
  '.chart-html .ch-closed .ch-sw{background:var(--chart-dim)}',
  '.chart-html .ch-red .ch-sw{background:var(--series-8)}',
  '.chart-html .ch-absent .ch-sw{background:none;border:2px solid var(--series-8)}',
  '.chart-html .ch-chip{font-weight:600}',
  '.chart-html .ch-matrix td:nth-child(2){min-width:7.5em;max-width:10em}',
  '.chart-html .ch-scroll{overflow-x:auto}',
  '.chart-html .ch-matrix{width:100%;border-collapse:collapse}',
  '.chart-html .ch-matrix th,.chart-html .ch-matrix td{text-align:left;vertical-align:top;padding:.45rem .6rem .45rem 0;border-bottom:1px solid var(--chart-grid)}',
  '.chart-html .ch-matrix thead th{color:var(--chart-muted);font-weight:600;border-bottom-color:var(--chart-axis)}',
  '.chart-html .ch-matrix tbody th{font-weight:600}',
  '.chart-html .ch-quad{display:grid;grid-template-columns:auto 1fr 1fr;gap:8px}',
  '.chart-html .ch-xhead,.chart-html .ch-xfoot{color:var(--chart-muted);text-align:center;padding:.2rem}',
  '.chart-html .ch-yhead{display:flex;align-items:center;justify-content:center;color:var(--chart-muted)}',
  '.chart-html .ch-yhead span{writing-mode:vertical-rl;transform:rotate(180deg);text-align:center}',
  '.chart-html .ch-card{height:100%;box-sizing:border-box;padding:.75rem .9rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--chart-surface)}',
  '.chart-html .ch-card p{margin:0 0 .4rem}',
  '.chart-html .ch-card-title{font-size:1rem}',
  '.chart-html .ch-id{display:inline-block;padding:0 .45em;border-radius:999px;border:1px solid var(--chart-axis);font-size:.8em;font-weight:600;color:var(--chart-muted)}',
  '.chart-html .ch-pos{color:var(--chart-muted);font-size:.8125rem}',
  '.chart-html dl{margin:0}',
  '.chart-html dt{font-weight:600;margin-top:.4rem}',
  '.chart-html dd{margin:0}',
  '.chart-html .ch-badges{list-style:none;margin:.5rem 0 0;padding:0;display:flex;flex-wrap:wrap;gap:.35rem}',
  '.chart-html .ch-badges li{padding:.1rem .5rem;border-radius:999px;background:var(--chart-band);font-size:.8125rem}',
  '@media (max-width:560px){.chart-html .ch-quad{grid-template-columns:1fr}.chart-html .ch-quad>*{grid-column:1!important;grid-row:auto!important}.chart-html .ch-xhead,.chart-html .ch-yhead,.chart-html .ch-xfoot{display:none}}',
].join('\n');
