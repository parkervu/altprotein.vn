// Line and scatter charts.
import {
  W, S, INK, MUTED, AXIS, SURFACE, BAND, GRID,
  fmtStr, fmtNum, num, linear, text, textLines, line, rect, hit, hitCircle, mark, dot, circle,
  tipFields, legend, wrap, textWidth, yAxis, table, R,
} from './lib.mjs';

const uniq = (arr) => [...new Set(arr)];
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
const path = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${R(p[0])},${R(p[1])}`).join('');
const strokePath = (d, col, extra = '') => `<path d="${d}" style="fill:none;stroke:${col};stroke-width:2;stroke-linejoin:round;stroke-linecap:round${extra}"/>`;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ---------------------------------------------------------------------------
export function fishmealPrice(spec, D) {
  const rows = D.csv(spec.data.file);
  const types = uniq(rows.map((r) => r.period_type));
  const lg = legend(
    [
      { label: 'Fishmeal (Peru 65%)', color: S(1), shape: 'line' },
      { label: 'Soybean meal', color: S(2), shape: 'dot' },
    ],
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 30;
  const base = top + 260;
  const left = 60;
  const right = W - 16;
  // Unequal periods: ordinal positions with a gap between annual means, quarters and months (annotation).
  const pos = rows.map((r, i) => i + types.indexOf(r.period_type) * 0.8);
  const x = linear(-0.6, pos[pos.length - 1] + 0.6, left, right);
  const y = linear(0, 3000, base, top);
  parts.push(yAxis(y, [0, 500, 1000, 1500, 2000, 2500, 3000], left, right, fmtNum, { title: 'USD per tonne', titleX: left - 52 }));
  parts.push(line(left, base, right, base, AXIS, 1));
  // fishmeal line: solid within a period type, dotted across a change of period type
  const pts = rows.map((r, i) => [x(pos[i]), y(num(r.fishmeal_usd_per_t))]);
  for (const t of types) {
    const idx = rows.map((r, i) => (r.period_type === t ? i : -1)).filter((i) => i >= 0);
    parts.push(strokePath(path(idx.map((i) => pts[i])), S(1)));
  }
  for (let i = 1; i < rows.length; i++)
    if (rows[i].period_type !== rows[i - 1].period_type) parts.push(strokePath(path([pts[i - 1], pts[i]]), S(1), ';stroke-dasharray:2 4'));
  const perLabel = (p) => {
    let m = p.match(/^(\d{4}) (Q\d)$/);
    if (m) return [m[2], m[1]];
    m = p.match(/^(\d{4})-(\d{2})$/);
    if (m) return [MONTHS[+m[2] - 1], m[1]];
    return [p];
  };
  const perLong = (p) => {
    const m = p.match(/^(\d{4})-(\d{2})$/);
    return m ? `${MONTHS[+m[2] - 1]} ${m[1]}` : p;
  };
  rows.forEach((r, i) => {
    const [px, py] = pts[i];
    const tip = [`Fishmeal, ${perLong(r.period)}: USD ${fmtStr(r.fishmeal_usd_per_t)} per t`, ...tipFields(r, spec.encoding.tooltip)];
    parts.push(mark(tip, dot(px, py, 4.5, S(1)) + hitCircle(px, py, 12)));
    if (r.soybean_meal_usd_per_t) {
      const sy = y(num(r.soybean_meal_usd_per_t));
      const stip = [`Soybean meal, ${perLong(r.period)}: USD ${fmtStr(r.soybean_meal_usd_per_t)} per t`, ...tipFields(r, spec.encoding.tooltip)];
      parts.push(mark(stip, dot(px, sy, 5, S(2)) + hitCircle(px, sy, 12)));
      parts.push(text(px, sy - 16, fmtStr(r.soybean_meal_usd_per_t), { halo: true, size: 12, fill: INK, anchor: 'middle' }));
    }
    const pl = perLabel(r.period);
    parts.push(textLines(px, base + 14, pl, { halo: true, size: 12, fill: INK, anchor: 'middle', lineH: 14 }));
  });
  // selective labels: first annual mean, last annual mean, and the August 2026 point (annotation)
  const firstA = 0;
  const lastA = rows.map((r) => r.period_type).lastIndexOf(types[0]);
  parts.push(text(pts[firstA][0], pts[firstA][1] - 16, fmtStr(rows[firstA].fishmeal_usd_per_t), { halo: true, size: 12, fill: INK, anchor: 'middle' }));
  parts.push(text(pts[lastA][0], pts[lastA][1] - 16, fmtStr(rows[lastA].fishmeal_usd_per_t), { halo: true, size: 12, fill: INK, anchor: 'middle' }));
  const last = rows.length - 1;
  const ann = (spec.annotations || []).find((a) => /^Label the/.test(a));
  const annTxt = ann ? ann.replace(/^Label the [^:]+:\s*/, '').replace(/\.$/, '') : fmtStr(rows[last].fishmeal_usd_per_t);
  parts.push(text(pts[last][0] - 12, pts[last][1], annTxt, { halo: true, size: 13, fill: INK, anchor: 'end', weight: 600 }));
  // soybean meal direct label on first point
  const sIdx = rows.findIndex((r) => r.soybean_meal_usd_per_t);
  if (sIdx >= 0) parts.push(text(pts[sIdx][0] - 12, y(num(rows[sIdx].soybean_meal_usd_per_t)), 'Soybean meal', { halo: true, size: 12, fill: INK, anchor: 'end' }));
  // period-type brackets
  const by = base + 50;
  const tl = { 'annual mean': 'Annual means', quarter: 'Quarters', month: 'Months' };
  for (const t of types) {
    const idx = rows.map((r, i) => (r.period_type === t ? i : -1)).filter((i) => i >= 0);
    const x0 = pts[idx[0]][0] - 14;
    const x1 = pts[idx[idx.length - 1]][0] + 14;
    parts.push(line(x0, by, x1, by, MUTED, 1) + line(x0, by - 4, x0, by, MUTED, 1) + line(x1, by - 4, x1, by, MUTED, 1));
    parts.push(text((x0 + x1) / 2, by + 12, tl[t] || cap(t), { size: 12, anchor: 'middle' }));
  }
  const tbl = table(spec.title, [
    { key: 'period', label: 'Period', fmt: (v) => perLong(v) },
    { key: 'period_type', label: 'Period type' },
    { key: 'fishmeal_usd_per_t', label: 'Fishmeal (USD per t)', num: true },
    { key: 'fishmeal_usd_per_t_protein', label: 'Fishmeal (USD per t of protein)', num: true },
    { key: 'soybean_meal_usd_per_t', label: 'Soybean meal (USD per t)', num: true },
    { key: 'soybean_meal_usd_per_t_protein', label: 'Soybean meal (USD per t of protein)', num: true },
  ], rows);
  return { body: parts.join(''), height: by + 24, table: tbl };
}

// ---------------------------------------------------------------------------
export function sbmScenarios(spec, D) {
  const rows = D.csv(spec.data.file);
  const scen = uniq(rows.map((r) => r.scenario));
  const color = (s) => S(scen.indexOf(s) + 1);
  const lg = legend(
    [
      ...scen.map((s) => ({ label: s, color: color(s), shape: 'line' })),
      { label: 'Vision range (chapter 19)', color: BAND, shape: 'band' },
      { label: '2025 level', color: INK, shape: 'dotted' },
    ],
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 30;
  const base = top + 300;
  const left = 50;
  const right = W - 110;
  const x = linear(2025, 2050, left, right);
  const y = linear(6, 12.5, base, top);
  parts.push(yAxis(y, [6, 7, 8, 9, 10, 11, 12], left, right, fmtNum, { title: 'Million tonnes (Mt)', titleX: left - 42 }));
  parts.push(line(left, base, right, base, AXIS, 1));
  const years = uniq(rows.map((r) => num(r.year))).sort((a, b) => a - b);
  for (const yr of years) parts.push(text(x(yr), base + 16, String(yr), { halo: true, size: 12, fill: INK, anchor: 'middle' }));
  // vision band
  const bandRows = rows.filter((r) => r.scenario === scen[0]).sort((a, b) => num(a.year) - num(b.year));
  const upper = bandRows.map((r) => [x(num(r.year)), y(num(r.vision_band_high_mt))]);
  const lower = bandRows.map((r) => [x(num(r.year)), y(num(r.vision_band_low_mt))]).reverse();
  const bandTip = ['Vision range (chapter 19)', ...bandRows.map((r) => `${r.year}: ${rangeTxtS(r.vision_band_low_mt, r.vision_band_high_mt)} Mt`)];
  parts.push(mark(bandTip, `<path d="${path([...upper, ...lower])}Z" style="fill:${BAND}"/>`));
  // 2025 level dotted line (annotation)
  const y25 = y(7.2);
  parts.push(line(left, y25, right, y25, INK, 1.5, ';stroke-dasharray:2 3;stroke-linecap:round'));
  parts.push(text(x(2029), y25 + 13, '2025 level, 7.2 Mt', { halo: true, size: 12, fill: INK }));
  // lines
  for (const s of scen) {
    const sr = rows.filter((r) => r.scenario === s).sort((a, b) => num(a.year) - num(b.year));
    parts.push(strokePath(path(sr.map((r) => [x(num(r.year)), y(num(r.sbm_import_need_mt))])), color(s)));
  }
  for (const s of scen) {
    const sr = rows.filter((r) => r.scenario === s).sort((a, b) => num(a.year) - num(b.year));
    for (const r of sr) {
      const px = x(num(r.year));
      const py = y(num(r.sbm_import_need_mt));
      const tip = [`${s}, ${r.year}: ${fmtStr(r.sbm_import_need_mt)} Mt`, `Vision range: ${rangeTxtS(r.vision_band_low_mt, r.vision_band_high_mt)} Mt`];
      parts.push(mark(tip, dot(px, py, 4, color(s)) + hitCircle(px, py, 10)));
    }
  }
  // end labels (annotation text)
  const ann = (spec.annotations || []).find((a) => /^Label line ends/.test(a));
  const endLabels = ann ? ann.replace(/^Label line ends in \d{4}:\s*/, '').replace(/\.$/, '').split(/,\s*/) : [];
  for (const lab of endLabels) {
    const code = lab.split(' ')[0];
    const r = rows.find((q) => q.scenario === code && q.year === '2050');
    if (!r) continue;
    const py = y(num(r.sbm_import_need_mt));
    parts.push(text(x(2050) + 10, py, lab, { halo: true, size: 13, fill: INK, weight: 600 }));
  }
  let yy = base + 42;
  const note = (spec.annotations || []).find((a) => /^Note under the chart:/.test(a));
  if (note) {
    const lines = wrap(note.replace(/^Note under the chart:\s*/, ''), W - 8, 12);
    parts.push(textLines(0, yy, lines, { size: 12, fill: MUTED, lineH: 15 }));
    yy += lines.length * 15;
  }
  const tbl = table(spec.title, [
    { key: 'scenario', label: 'Scenario' },
    { key: 'year', label: 'Year' },
    { key: 'sbm_import_need_mt', label: 'Soybean-meal need (Mt)', num: true },
    { key: 'vision_band_low_mt', label: 'Vision range low (Mt)', num: true },
    { key: 'vision_band_high_mt', label: 'Vision range high (Mt)', num: true },
  ], rows);
  return { body: parts.join(''), height: yy + 4, table: tbl };
}
const rangeTxtS = (lo, hi) => (lo === hi ? fmtStr(lo) : `${fmtStr(lo)} to ${fmtStr(hi)}`);

// ---------------------------------------------------------------------------
export function policyScatter(spec, D) {
  const rows = D.csv(spec.data.file)
    .filter((r) => r.report_rank !== '') // spec filter
    .sort((a, b) => num(a.report_rank) - num(b.report_rank));
  const levels = ['Low', 'Medium', 'High'];
  const tiers = uniq(rows.map((r) => r.report_tier)).sort();
  const color = (t) => S(tiers.indexOf(t) + 1);
  const lg = legend(tiers.map((t) => ({ label: `Tier ${t}`, color: color(t), shape: 'dot' })), 0, 0, W);
  const parts = [lg.svg];
  const top = lg.height + 18;
  const left = 112;
  const right = W - 8;
  const cellW = (right - left) / 3;
  const cellH = 118;
  const bottom = top + cellH * 3;
  // grid
  for (let i = 0; i <= 3; i++) {
    parts.push(line(left + i * cellW, top, left + i * cellW, bottom, i === 0 ? AXIS : GRID, 1));
    parts.push(line(left, top + i * cellH, right, top + i * cellH, i === 3 ? AXIS : GRID, 1));
  }
  levels.forEach((l, i) => {
    parts.push(text(left + cellW * (i + 0.5), bottom + 16, `${l} effort`, { halo: true, size: 13, fill: INK, anchor: 'middle' }));
    parts.push(text(left - 10, top + cellH * (2 - i + 0.5), `${l} impact`, { halo: true, size: 13, fill: INK, anchor: 'end' }));
  });
  // deterministic packing within each cell (spec: jitter, many points share a cell)
  for (const e of levels)
    for (const im of levels) {
      const pts = rows.filter((r) => r.effort === e && r.impact === im);
      if (!pts.length) continue;
      const cols = Math.min(pts.length, 5);
      const nrows = Math.ceil(pts.length / cols);
      const dx = 38;
      const dy = 30;
      const cx0 = left + cellW * (levels.indexOf(e) + 0.5) - ((cols - 1) * dx) / 2 - 6;
      const cy0 = top + cellH * (2 - levels.indexOf(im) + 0.5) - ((nrows - 1) * dy) / 2;
      pts.forEach((r, k) => {
        const px = cx0 + (k % cols) * dx;
        const py = cy0 + Math.floor(k / cols) * dy;
        const tip = [`Rank ${r.report_rank} (tier ${r.report_tier}): ${r.effort} effort, ${r.impact} impact`, ...tipFields(r, spec.encoding.tooltip)];
        parts.push(mark(tip, dot(px, py, 6, color(r.report_tier)) + text(px + 10, py, r.report_rank, { halo: true, size: 12, fill: INK, weight: 600 }) + hit(px - 12, py - 12, 36, 24)));
      });
    }
  const tbl = table(spec.title, [
    { key: 'report_rank', label: 'Rank' },
    { key: 'report_tier', label: 'Tier' },
    { key: 'option', label: 'Option' },
    { key: 'effort', label: 'Effort' },
    { key: 'impact', label: 'Impact' },
    { key: 'owner_agency', label: 'Owner' },
    { key: 'timeline', label: 'Timeline' },
  ], rows);
  return { body: parts.join(''), height: bottom + 30, table: tbl };
}

// ---------------------------------------------------------------------------
export function driversMatrix(spec, D) {
  const rows = D.csv(spec.data.file).map((r, i) => ({ ...r, n: i + 1 }));
  const classes = uniq(rows.map((r) => r.class));
  const color = (c) => S(classes.indexOf(c) + 1);
  const lg = legend(classes.map((c) => ({ label: cap(c), color: color(c), shape: 'dot' })), 0, 0, W);
  const parts = [lg.svg];
  const top = lg.height + 20;
  const left = 64;
  const right = W - 12;
  const bottom = top + 390;
  const [dx0, dx1] = spec.encoding.x_domain || [0.5, 5.5];
  const [dy0, dy1] = spec.encoding.y_domain || [0.5, 5.5];
  const x = linear(dx0, dx1, left, right);
  const y = linear(dy0, dy1, bottom, top);
  // shaded scenario-axes cell (annotation: impact 4 to 5, uncertainty 4 to 5)
  parts.push(rect(x(3.5), y(5.5), x(5.5) - x(3.5), y(3.5) - y(5.5), BAND));
  parts.push(text(x(3.5) + 8, y(5.5) + 14, 'scenario axes', { halo: true, size: 13, fill: INK, weight: 600 }));
  for (let v = 1; v <= 5; v++) {
    parts.push(line(x(v), top, x(v), bottom, GRID, 1));
    parts.push(line(left, y(v), right, y(v), GRID, 1));
    parts.push(text(x(v), bottom + 14, String(v), { size: 12, anchor: 'middle' }));
    parts.push(text(left - 8, y(v), String(v), { size: 12, anchor: 'end' }));
  }
  parts.push(line(left, bottom, right, bottom, AXIS, 1) + line(left, top, left, bottom, AXIS, 1));
  parts.push(text(right, bottom + 34, 'Uncertainty to 2050 (1 low to 5 high)', { size: 12, anchor: 'end' }));
  parts.push(text(left - 56, top - 12, 'Impact (1 low to 5 high)', { size: 12 }));
  // clusters: points sharing a cell are spread horizontally and numbered (annotation: jitter, label every point)
  const key = (r) => `${r.uncertainty_score}|${r.impact_score}`;
  const groups = {};
  rows.forEach((r) => (groups[key(r)] ??= []).push(r));
  for (const g of Object.values(groups)) {
    const n = g.length;
    g.forEach((r, k) => {
      const px = x(num(r.uncertainty_score)) + (k - (n - 1) / 2) * 32 - 5;
      const py = y(num(r.impact_score));
      const tip = [`${r.n}. ${r.driver}: impact ${r.impact_score}, uncertainty ${r.uncertainty_score}`, `Class: ${r.class}`, ...tipFields(r, spec.encoding.tooltip)];
      parts.push(mark(tip, dot(px, py, 6, color(r.class)) + text(px + 10, py, String(r.n), { halo: true, size: 12, fill: INK, weight: 600 }) + hit(px - 12, py - 12, 34, 24)));
    });
  }
  // numbered key
  let ky = bottom + 60;
  const colW = W / 2;
  const half = Math.ceil(rows.length / 2);
  let colY = [ky, ky];
  rows.forEach((r, i) => {
    const c = i < half ? 0 : 1;
    const kx = c * colW;
    const lines = wrap(r.driver, colW - 40, 12);
    parts.push(circle(kx + 5, colY[c], 5, color(r.class)));
    parts.push(text(kx + 16, colY[c], String(r.n), { halo: true, size: 12, fill: INK, weight: 600 }));
    parts.push(textLines(kx + 36, colY[c], lines, { halo: true, size: 12, fill: INK, lineH: 15 }));
    colY[c] += lines.length * 15 + 5;
  });
  const tbl = table(spec.title, [
    { key: 'n', label: 'Number', get: (r) => String(r.n) },
    { key: 'driver', label: 'Driver' },
    { key: 'class', label: 'Class' },
    { key: 'impact_score', label: 'Impact (1 to 5)' },
    { key: 'uncertainty_score', label: 'Uncertainty (1 to 5)' },
    { key: 'channel', label: 'Channel' },
    { key: 'horizon', label: 'Horizon' },
  ], rows);
  return { body: parts.join(''), height: Math.max(...colY) + 4, table: tbl };
}
