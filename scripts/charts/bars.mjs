// Bar-family charts: horizontal, vertical, grouped, stacked, tornado, log bars, and the plays ranking.
import {
  W,
  S,
  INK,
  MUTED,
  AXIS,
  SURFACE,
  HIGHLIGHT,
  DIM,
  BAND,
  GRID,
  esc,
  fmtStr,
  fmtNum,
  num,
  linear,
  logScale,
  niceTicks,
  text,
  textLines,
  line,
  rect,
  hbar,
  vbar,
  rangeBar,
  hit,
  mark,
  tipFields,
  legend,
  wrap,
  textWidth,
  yAxis,
  table,
  R,
} from './lib.mjs';
import { hLayout, endLabel } from './layout.mjs';

const uniq = (arr) => [...new Set(arr)];
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);

/** Horizontal stacked segments with 2px surface gaps; last segment gets the rounded data end. */
function stackH(scale, x0, y, h, segs) {
  let cum = 0;
  const out = [];
  const visible = segs.filter((s) => s.v > 0);
  visible.forEach((s, i) => {
    const a = scale(cum);
    cum += s.v;
    const b = scale(cum);
    const last = i === visible.length - 1;
    const bEnd = last ? b : b - 2;
    const shape = last
      ? hbar(a, bEnd, y, h, s.fill)
      : rect(a, y, Math.max(bEnd - a, 0.8), h, s.fill);
    let lab = '';
    if (s.label && textWidth(s.label, 12) + 10 <= bEnd - a && h >= 16) {
      lab = text((a + bEnd) / 2, y + h / 2, s.label, {
        size: 12,
        fill: s.labelFill || 'var(--chart-on-dark)',
        anchor: 'middle',
        weight: 600,
      });
    }
    out.push(mark(s.tip, shape + lab + hit(a, y - 3, Math.max(b - a, 6), h + 6)));
  });
  return out.join('');
}

// ---------------------------------------------------------------------------
export function feedImportDependence(spec, D) {
  const rows = D.csv(spec.data.file);
  const isHL = (r) => /^Soy protein/.test(r.ingredient); // annotation: highlight the "Soy protein" bar
  const lab = (r) =>
    `${fmtStr(r.import_share_pct_high)}%` +
    (r.imports_2025_mt ? ` (${fmtStr(r.imports_2025_mt)} Mt)` : '');
  const L = hLayout({
    rows: rows.map((r) => ({ label: r.ingredient, bold: isHL(r), data: r })),
    labelW: 180,
    plotRight: W - 118,
    head: 22,
    minRowH: 34,
    makeScale: (l, r) => linear(0, 100, l, r),
    ticks: [0, 25, 50, 75, 100],
    fmtTick: (t) => `${t}%`,
    axisTitle: 'Share of 2025 supply imported (%)',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 22;
      const by = y + (h - bh) / 2;
      const x1 = ctx.scale(num(r.import_share_pct_high));
      const tip = [
        `${r.ingredient}: ${fmtStr(r.import_share_pct_high)}% imported` +
          (r.imports_2025_mt ? `, ${fmtStr(r.imports_2025_mt)} Mt imported in 2025` : ''),
        ...tipFields(r, spec.encoding.tooltip),
      ];
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, by, bh, isHL(r) ? HIGHLIGHT : DIM) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) + endLabel(x1 + 2, y + h / 2, lab(r), W, { weight: isHL(r) ? 600 : undefined, size: 13 })
      );
    },
    under: (ctx) => {
      const x = ctx.scale(100);
      return (
        line(x, ctx.top - 8, x, ctx.bottom, INK, 1) +
        text(x, ctx.top - 16, '100% imported', { size: 12, fill: INK, anchor: 'middle' })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'ingredient', label: 'Ingredient' },
      { key: 'import_share_pct_high', label: 'Share imported, 2025 (%)', num: true },
      { key: 'imports_2025_mt', label: 'Imports, 2025 (Mt)', num: true },
      { key: 'share_note', label: 'Note' },
      { key: 'main_origins', label: 'Main origins' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function animalProteinOutput(spec, D) {
  const rows = D.csv(spec.data.file);
  const bases = uniq(rows.map((r) => r.basis));
  const color = (b) => S(bases.indexOf(b) + 1);
  const lg = legend(
    bases.map((b) => ({
      label:
        b === 'live weight'
          ? 'Meat, live weight'
          : b === 'harvest'
            ? 'Aquaculture, harvest'
            : cap(b),
      color: color(b),
    })),
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 34;
  const plotH = 250;
  const base = top + plotH;
  const left = 60;
  const right = W - 12;
  const y = linear(0, 6000, base, top);
  parts.push(
    yAxis(y, [0, 1000, 2000, 3000, 4000, 5000, 6000], left, right, (t) => fmtNum(t), {
      title: 'Thousand tonnes (kt)',
      titleX: left - 50,
    }),
  );
  // slots with a gap between the two bases
  const nSlots = rows.length + 0.6;
  const slotW = (right - left) / nSlots;
  const bw = 28;
  let labelBottom = base;
  rows.forEach((r, i) => {
    const gi = bases.indexOf(r.basis);
    const cx = left + slotW * (i + (gi > 0 ? 0.6 : 0) + 0.5);
    const v = num(r.output_kt);
    const y1 = y(v);
    const tip = [`${r.product}: ${fmtStr(r.output_kt)} kt (${r.basis}), 2025`];
    parts.push(
      mark(
        tip,
        vbar(cx - bw / 2, bw, base, y1, color(r.basis)) +
          hit(cx - slotW / 2 + 4, y1 - 20, slotW - 8, base - y1 + 20),
      ),
    );
    parts.push(
      text(cx, y1 - 10, `${fmtStr(r.output_kt)} kt`, { size: 13, fill: INK, anchor: 'middle' }),
    );
    const nl = wrap(r.product, slotW - 8, 12);
    parts.push(textLines(cx, base + 14, nl, { size: 12, fill: INK, anchor: 'middle', lineH: 15 }));
    labelBottom = Math.max(labelBottom, base + 14 + nl.length * 15);
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  const tbl = table(
    spec.title,
    [
      { key: 'product', label: 'Product' },
      { key: 'output_kt', label: 'Output, 2025 (kt)', num: true },
      { key: 'basis', label: 'Basis' },
    ],
    rows,
  );
  return { body: parts.join(''), height: labelBottom + 8, table: tbl };
}

// ---------------------------------------------------------------------------
export function cassavaTrade(spec, D) {
  const rows = D.csv(spec.data.file);
  const flows = uniq(rows.map((r) => r.flow));
  const color = (f) => S(flows.indexOf(f) + 1);
  const L = hLayout({
    legend: flows.map((f) => ({ label: f, color: color(f) })),
    rows: rows.map((r) => ({
      label: r.product,
      sub: `${r.reporter}-reported, ${r.year}`,
      data: r,
    })),
    labelW: 170,
    plotRight: W - 150,
    minRowH: 40,
    makeScale: (l, r) => linear(0, 1200, l, r),
    ticks: [0, 300, 600, 900, 1200],
    fmtTick: fmtNum,
    axisTitle: 'USD million',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 22;
      const by = y + (h - bh) / 2;
      const v = num(r.value_usd_m);
      let x1 = ctx.scale(v);
      const tiny = x1 - ctx.plotLeft < 2;
      const shape = tiny
        ? rect(ctx.plotLeft, by, 2, bh, color(r.flow))
        : hbar(ctx.plotLeft, x1, by, bh, color(r.flow));
      if (tiny) x1 = ctx.plotLeft + 2;
      const tip = [
        `${r.product}, ${r.flow}, ${r.year}: USD ${fmtStr(r.value_usd_m)} million`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const isCallout = /glucose/i.test(r.product); // annotation: call out glucose syrup
      return (
        mark(tip, shape + hit(ctx.plotLeft, y, Math.max(x1 - ctx.plotLeft, 30), h)) +
        endLabel(x1, y + h / 2, `USD ${fmtStr(r.value_usd_m)} million`, W, {
          size: 13,
          weight: isCallout ? 600 : undefined,
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'product', label: 'Product' },
      { key: 'flow', label: 'Flow' },
      { key: 'year', label: 'Year' },
      { key: 'value_usd_m', label: 'Value (USD million)', num: true },
      { key: 'volume_kt', label: 'Volume (kt)', num: true },
      { key: 'hs_code', label: 'HS code' },
      { key: 'reporter', label: 'Reporter' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function vcAgritech(spec, D) {
  const rows = D.csv(spec.data.file);
  const series = [
    { key: 'venture_capital_usd_m', label: 'Venture capital, all sectors' },
    { key: 'agriculture_vc_usd_m', label: 'Agriculture' },
    { key: 'climate_tech_vc_usd_m', label: 'Climate tech' },
  ];
  const lg = legend(
    series.map((s, i) => ({ label: s.label, color: S(i + 1) })),
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 30;
  const base = top + 240;
  const left = 60;
  const right = W - 12;
  const y = linear(0, 600, base, top);
  parts.push(
    yAxis(y, [0, 100, 200, 300, 400, 500, 600], left, right, fmtNum, {
      title: 'USD million',
      titleX: left - 50,
    }),
  );
  const gw = (right - left) / rows.length;
  const bw = 30;
  rows.forEach((r, gi) => {
    const cx = left + gw * (gi + 0.5);
    const x0 = cx - (series.length * bw + (series.length - 1) * 2) / 2;
    series.forEach((s, si) => {
      const x = x0 + si * (bw + 2);
      const v = num(r[s.key]);
      const y1 = y(v);
      const tip = [
        `${r.year}, ${s.label}: USD ${fmtStr(r[s.key])} million`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      parts.push(
        mark(
          tip,
          vbar(x, bw, base, y1, S(si + 1)) +
            hit(x - 1, Math.min(y1, base - 14) - 16, bw + 2, base - Math.min(y1, base - 14) + 16),
        ),
      );
      parts.push(
        text(x + bw / 2, y1 - 10, fmtStr(r[s.key]), { size: 13, fill: INK, anchor: 'middle' }),
      );
    });
    parts.push(text(cx, base + 16, r.year, { size: 13, fill: INK, anchor: 'middle' }));
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  const tbl = table(
    spec.title,
    [
      { key: 'year', label: 'Year' },
      ...series.map((s) => ({ key: s.key, label: `${s.label} (USD million)`, num: true })),
      { key: 'note', label: 'Note' },
    ],
    rows,
  );
  return { body: parts.join(''), height: base + 30, table: tbl };
}

// ---------------------------------------------------------------------------
export function researchBenchmark(spec, D) {
  const rows = D.csv(spec.data.file);
  const topics = uniq(rows.map((r) => r.topic));
  const isVN = (r) => r.country === 'Vietnam'; // encoding.highlight: country == Vietnam
  const lrows = [];
  for (const t of topics) {
    lrows.push({ label: t, header: true, headerH: 30 });
    for (const r of rows.filter((x) => x.topic === t))
      lrows.push({ label: r.country, bold: isVN(r), data: r });
  }
  const L = hLayout({
    legend: [
      { label: 'Vietnam', color: HIGHLIGHT },
      { label: 'Neighbours', color: DIM },
    ],
    rows: lrows,
    labelW: 110,
    plotRight: W - 130,
    minRowH: 24,
    makeScale: (l, r) => linear(0, 6, l, r),
    ticks: [0, 1, 2, 3, 4, 5, 6],
    fmtTick: fmtNum,
    axisTitle: 'Publications per 10,000 national publications, 2015 to September 2026',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const by = y + (h - bh) / 2;
      const x1 = ctx.scale(num(r.per_10k_publications));
      const tip = [
        `${r.country}, ${r.topic}: ${fmtStr(r.per_10k_publications)} per 10,000 publications`,
        `Records 2015 to 2026: ${fmtStr(r.records_2015_2026)}`,
      ];
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, by, bh, isVN(r) ? HIGHLIGHT : DIM) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) +
        endLabel(
          x1,
          y + h / 2,
          `${fmtStr(r.per_10k_publications)} (${fmtStr(r.records_2015_2026)} records)`,
          W,
          { weight: isVN(r) ? 600 : undefined },
        )
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'topic', label: 'Topic' },
      { key: 'country', label: 'Country' },
      { key: 'per_10k_publications', label: 'Per 10,000 national publications', num: true },
      { key: 'records_2015_2026', label: 'Records, 2015 to 2026', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function globalInvestment(spec, D) {
  const rows = D.csv(spec.data.file);
  const periods = uniq(rows.map((r) => r.period));
  const cats = [
    'Plant-based',
    'Fermentation',
    'Cultivated',
    'Other categories',
    'Total (all categories)',
  ];
  const colorOf = (c) => (c === 'Total (all categories)' ? DIM : S(cats.indexOf(c) + 1));
  const present = cats.filter((c) => rows.some((r) => r.category === c));
  const sub = {
    2025: 'Full year',
    '2026 H1': 'Half year, not split by category',
    '2026 Q2': 'Quarter',
  };
  const L = hLayout({
    legend: present.map((c) => ({
      label: c === 'Total (all categories)' ? 'All categories (not split)' : c,
      color: colorOf(c),
    })),
    rows: periods.map((p) => ({ label: p, sub: sub[p] })),
    labelW: 130,
    plotRight: W - 140,
    minRowH: 52,
    makeScale: (l, r) => linear(0, 900, l, r),
    ticks: [0, 150, 300, 450, 600, 750, 900],
    fmtTick: fmtNum,
    axisTitle: 'USD million',
    drawRow: (row, i, ctx, y, h) => {
      const pr = rows.filter((r) => r.period === row.label);
      const segs = pr.map((r) => ({
        v: num(r.usd_m),
        fill: colorOf(r.category),
        label: colorOf(r.category) === S(4) || colorOf(r.category) === S(6) ? '' : fmtStr(r.usd_m), // no inside labels on light fills
        labelFill: r.category === 'Total (all categories)' ? INK : 'var(--chart-on-dark)',
        tip: [`${r.period}, ${r.category}: USD ${fmtStr(r.usd_m)} million`],
      }));
      const total = segs.reduce((a, s) => a + s.v, 0);
      const bh = 26;
      const by = y + (h - bh) / 2;
      return (
        stackH(ctx.scale, ctx.plotLeft, by, bh, segs) +
        endLabel(ctx.scale(total), y + h / 2, `USD ${fmtNum(total)} million`, W, { size: 13 })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'period', label: 'Period' },
      { key: 'category', label: 'Category' },
      { key: 'usd_m', label: 'USD million', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function costStackFungal(spec, D) {
  const rows = D.csv(spec.data.file);
  // Fold eleven lines into eight fixed-order groups (series 1 to 8); the table keeps all eleven.
  const groups = [
    { label: 'Capital charge', lines: ['Capital charge'] },
    { label: 'Maintenance and insurance', lines: ['Maintenance and insurance'] },
    { label: 'Carbon', lines: ['Carbon'] },
    { label: 'Steam', lines: ['Steam'] },
    { label: 'Land', lines: ['Land'] },
    { label: 'Labour', lines: ['Labour'] },
    { label: 'Electricity (excluding cooling)', lines: ['Electricity (excluding cooling)'] },
    {
      label: 'Other: nitrogen, minerals, cooling power, water',
      lines: [
        'Nitrogen',
        'Minerals, vitamins, antifoam, enzymes',
        'Cooling electricity',
        'Water and wastewater',
      ],
    },
  ];
  const byLine = Object.fromEntries(rows.map((r) => [r.line, r]));
  const cases = [
    { key: 'usd_per_t_product_low', label: 'Low case', total: '2,227', share: '54%' },
    { key: 'usd_per_t_product_high', label: 'High case', total: '6,612', share: '67%' },
  ]; // totals and shares as given in the spec label and annotation
  const L = hLayout({
    legend: groups.map((g, i) => ({ label: g.label, color: S(i + 1) })),
    rows: cases.map((c) => ({ label: c.label, labelDy: 12 })),
    labelW: 80,
    plotRight: W - 150,
    minRowH: 76,
    makeScale: (l, r) => linear(0, 7000, l, r),
    ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000],
    fmtTick: fmtNum,
    axisTitle: 'USD per tonne of product',
    drawRow: (row, i, ctx, y, h) => {
      const c = cases[i];
      const segs = groups.map((g, gi) => {
        const vals = g.lines.map((l) => num(byLine[l][c.key]));
        const v = vals.reduce((a, b) => a + b, 0);
        const detail =
          g.lines.length > 1
            ? g.lines.map((l) => `${l}: USD ${fmtStr(byLine[l][c.key])}`)
            : [`Basis: ${byLine[g.lines[0]].basis}`];
        return {
          v,
          fill: S(gi + 1),
          label: gi + 1 === 4 || gi + 1 === 6 ? '' : fmtNum(v), // no inside labels on the light yellow and pink fills
          tip: [`${c.label}, ${g.label}: USD ${fmtNum(v)} per t`, ...detail],
        };
      });
      const bh = 26;
      const by = y + h / 2 - bh / 2 + 12;
      const capEnd = ctx.scale(segs[0].v + segs[1].v);
      const bracketY = by - 10;
      const bracket =
        line(ctx.plotLeft, bracketY, capEnd - 2, bracketY, INK, 1) +
        line(ctx.plotLeft, bracketY, ctx.plotLeft, bracketY + 5, INK, 1) +
        line(capEnd - 2, bracketY, capEnd - 2, bracketY + 5, INK, 1) +
        text(ctx.plotLeft, bracketY - 10, `Capital charge plus maintenance: ${c.share}`, {
          size: 12,
          fill: INK,
        });
      const total = segs.reduce((a, s) => a + s.v, 0);
      return (
        stackH(ctx.scale, ctx.plotLeft, by, bh, segs) +
        bracket +
        endLabel(ctx.scale(total), by + bh / 2, `USD ${c.total} per t`, W, {
          size: 13,
          weight: 600,
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'line', label: 'Cost line' },
      { key: 'usd_per_t_product_low', label: 'Low case (USD per t)', num: true },
      { key: 'usd_per_t_product_high', label: 'High case (USD per t)', num: true },
      { key: 'basis', label: 'Basis' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function sourcesByType(spec, D) {
  const rows = D.csv(spec.data.file);
  const waves = uniq(rows.map((r) => r.wave)).sort();
  const types = {};
  for (const r of rows) {
    types[r.source_type] ??= Object.fromEntries(waves.map((w) => [w, 0]));
    types[r.source_type][r.wave]++;
  }
  const agg = Object.entries(types)
    .map(([t, c]) => ({ type: t, counts: c, total: Object.values(c).reduce((a, b) => a + b, 0) }))
    .sort((a, b) => b.total - a.total || a.type.localeCompare(b.type));
  const wl = (w) => `Wave ${w.replace(/\D/g, '')}`;
  const max = Math.max(...agg.map((a) => a.total));
  const L = hLayout({
    legend: waves.map((w, i) => ({ label: wl(w), color: S(i + 1) })),
    rows: agg.map((a) => ({ label: a.type })),
    labelW: 130,
    plotRight: W - 70,
    minRowH: 30,
    makeScale: (l, r) => linear(0, Math.ceil(max / 50) * 50, l, r),
    ticks: niceTicks(0, Math.ceil(max / 50) * 50, 6),
    fmtTick: fmtNum,
    axisTitle: `Number of sources (total ${fmtNum(rows.length)})`,
    drawRow: (row, i, ctx, y, h) => {
      const a = agg[i];
      const segs = waves.map((w, wi) => ({
        v: a.counts[w],
        fill: S(wi + 1),
        label: a.counts[w] >= 25 && wi + 1 !== 4 ? String(a.counts[w]) : '',
        tip: [`${a.type}, ${wl(w)}: ${a.counts[w]} sources`, `All waves: ${a.total} sources`],
      }));
      const bh = 20;
      return (
        stackH(ctx.scale, ctx.plotLeft, y + (h - bh) / 2, bh, segs) +
        endLabel(ctx.scale(a.total), y + h / 2, fmtNum(a.total), W, { size: 13 })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'type', label: 'Source type' },
      ...waves.map((w) => ({ key: w, label: wl(w), num: true, get: (r) => String(r.counts[w]) })),
      { key: 'total', label: 'Total', num: true, get: (r) => String(r.total) },
    ],
    agg,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
/** Weighted play scores for every preset; exported so the site and checks can reuse it. */
export function playScores(D) {
  const plays = D.csv('data/plays.csv').filter((r) => r.type === 'play');
  const presets = D.csv('data/play_weight_presets.csv');
  const crit = D.csv('data/play_criteria.csv').map((c) => c.field);
  const score = (p, w) => crit.reduce((a, f) => a + num(p[f]) * num(w[f]), 0) / 100;
  return { plays, presets, crit, score };
}
function topThree(plays, w, score) {
  const scored = plays.map((p) => ({ id: p.play_id, s: Math.round(score(p, w) * 100) / 100 }));
  const groups = [];
  for (const s of [...new Set(scored.map((x) => x.s))].sort((a, b) => b - a)) {
    groups.push({ s, ids: scored.filter((x) => x.s === s).map((x) => x.id) });
    if (groups.length === 3) break;
  }
  return groups.map((g) => `${g.ids.join(' and ')} (${g.s.toFixed(2)})`);
}
export function playsScoring(spec, D) {
  const { plays, presets, score } = playScores(D);
  const bal = presets.find((p) => p.preset_id === 'balanced');
  const idn = (id) => num(id.replace(/\D/g, ''));
  const ranked = plays
    .map((p) => ({ p, s: score(p, bal) }))
    .sort((a, b) => b.s - a.s || idn(a.p.play_id) - idn(b.p.play_id));
  const L = hLayout({
    rows: ranked.map(({ p }) => ({ label: `${p.play_id} ${p.name}` })),
    labelW: 290,
    plotRight: W - 60,
    minRowH: 30,
    makeScale: (l, r) => linear(0, 5, l, r),
    ticks: [0, 1, 2, 3, 4, 5],
    fmtTick: fmtNum,
    axisTitle: 'Weighted score, balanced weights (1 to 5)',
    drawRow: (row, i, ctx, y, h) => {
      const { p, s } = ranked[i];
      const bh = 18;
      const x1 = ctx.scale(s);
      const tip = [
        `${p.play_id} ${p.name}: ${s.toFixed(2)} (balanced weights, 1 to 5)`,
        ...tipFields(p, spec.encoding.tooltip),
      ];
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, y + (h - bh) / 2, bh, S(1)) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
          `data-play="${esc(p.play_id)}" data-score="${s.toFixed(2)}"`,
        ) + endLabel(x1, y + h / 2, s.toFixed(2), W, { size: 13 })
      );
    },
  });
  // Static fallback extra: top three per preset (spec notes).
  const parts = [L.body];
  let y = L.height + 8;
  parts.push(text(0, y, 'Top three under each preset', { size: 13, fill: INK, weight: 600 }));
  y += 22;
  const cols = [0, 200, 350, 500];
  ['Preset', 'First', 'Second', 'Third'].forEach((h, i) =>
    parts.push(text(cols[i], y, h, { size: 12 })),
  );
  y += 6;
  parts.push(line(0, y, W, y, GRID, 1));
  y += 13;
  const tops = [];
  for (const pr of presets) {
    const t3 = topThree(plays, pr, score);
    tops.push({ preset: pr.label, t3 });
    parts.push(text(cols[0], y, pr.label, { size: 12, fill: INK }));
    t3.forEach((t, i) => parts.push(text(cols[i + 1], y, t, { size: 12, fill: INK })));
    y += 20;
  }
  const tbl = table(
    spec.title,
    [
      { key: 'rank', label: 'Rank', get: (r) => String(r.rank) },
      { key: 'id', label: 'Play', get: (r) => `${r.p.play_id} ${r.p.name}` },
      { key: 's', label: 'Balanced score (1 to 5)', num: true, get: (r) => r.s.toFixed(2) },
      { key: 'horizon', label: 'Horizon', get: (r) => r.p.horizon },
    ],
    ranked.map((r, i) => ({ ...r, rank: i + 1 })),
  );
  const tbl2 = table(
    'Top three under each preset',
    [
      { key: 'preset', label: 'Preset' },
      { key: 'a', label: 'First', get: (r) => r.t3[0] || '' },
      { key: 'b', label: 'Second', get: (r) => r.t3[1] || '' },
      { key: 'c', label: 'Third', get: (r) => r.t3[2] || '' },
    ],
    tops,
  );
  return { body: parts.join(''), height: y + 4, table: tbl + tbl2, topThree: tops, ranked };
}

// ---------------------------------------------------------------------------
export function sbmTornado(spec, D) {
  const rows = D.csv(spec.data.file).sort((a, b) => num(b.swing_mt) - num(a.swing_mt));
  const central = num(rows[0].sbm_2050_central_mt);
  const L = hLayout({
    legend: [
      { label: 'Low case of the assumption', color: S(1) },
      { label: 'High case of the assumption', color: S(2) },
    ],
    head: 22,
    rows: rows.map((r, i) => ({ label: r.assumption_varied, bold: i < 2, data: r })),
    labelW: 250,
    plotLeft: 280,
    plotRight: W - 50,
    minRowH: 34,
    makeScale: (l, r) => linear(7.5, 12, l, r),
    ticks: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    fmtTick: (t) => fmtNum(t, 1),
    axisTitle: 'Soybean-meal need in 2050, million tonnes',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 20;
      const by = y + (h - bh) / 2;
      const xc = ctx.scale(central);
      const op = i < 2 ? '' : ';fill-opacity:0.45'; // annotation: highlight the top two bars
      const out = [];
      for (const [key, col, name] of [
        ['sbm_2050_low_case_mt', S(1), 'Low case'],
        ['sbm_2050_high_case_mt', S(2), 'High case'],
      ]) {
        const v = num(r[key]);
        const x = ctx.scale(v);
        const tip = [
          `${r.assumption_varied}, ${name.toLowerCase()}: ${fmtStr(r[key])} Mt in 2050`,
          `Trend: ${fmtStr(r.sbm_2050_central_mt)} Mt`,
          `Swing: ${fmtStr(r.swing_mt)} Mt`,
        ];
        out.push(
          mark(
            tip,
            hbar(xc, x, by, bh, col, op) + hit(Math.min(x, xc), y, Math.abs(x - xc) + 2, h),
          ),
        );
        const lx = v < central ? x - 5 : x + 5;
        out.push(
          text(lx, y + h / 2, fmtStr(r[key]), {
            size: 12,
            fill: INK,
            anchor: v < central ? 'end' : 'start',
            weight: i < 2 ? 600 : undefined,
            halo: true,
          }),
        );
      }
      return out.join('');
    },
    over: (ctx) => {
      const x = ctx.scale(central);
      return (
        line(x, ctx.top - 8, x, ctx.bottom, INK, 1.5) +
        text(x, ctx.top - 16, `Trend ${fmtNum(Math.round(central * 10) / 10)} Mt`, {
          size: 12,
          fill: INK,
          anchor: 'middle',
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'rank', label: 'Rank' },
      { key: 'assumption_varied', label: 'Assumption varied' },
      { key: 'sbm_2050_low_case_mt', label: 'Low case (Mt)', num: true },
      { key: 'sbm_2050_central_mt', label: 'Trend (Mt)', num: true },
      { key: 'sbm_2050_high_case_mt', label: 'High case (Mt)', num: true },
      { key: 'swing_mt', label: 'Swing (Mt)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function retailPricePerProtein(spec, D) {
  const rows = D.csv(spec.data.file).sort(
    (a, b) => num(a.med_price_100g_protein) - num(b.med_price_100g_protein),
  );
  // Reference bands as stated in spec.data.reference (COST-39 to COST-41).
  const bands = [
    { label: 'Eggs', lo: 34000, hi: 40000, row: 1, anchor: 'end' },
    { label: 'Chicken breast', lo: 39500, hi: 45500, row: 0, anchor: 'end' },
    { label: 'Lean pork', lo: 63000, hi: 69500, row: 0, anchor: 'start' },
  ];
  const L = hLayout({
    legend: [
      { label: 'Median price per 100 g of protein', color: S(1) },
      { label: 'Lowest to highest product', color: INK, shape: 'line' },
      { label: 'Meat and egg reference ranges', color: BAND, shape: 'band' },
    ],
    head: 40,
    rows: rows.map((r) => ({ label: r.product_type, data: r })),
    labelW: 200,
    plotRight: W - 64,
    minRowH: 30,
    makeScale: (l, r) => logScale(20000, 2000000, l, r),
    ticks: [20000, 50000, 100000, 200000, 500000, 1000000, 2000000],
    fmtTick: fmtNum,
    axisTitle: 'VND per 100 g of protein (log scale)',
    under: (ctx) =>
      bands
        .map((b) => {
          const x0 = ctx.scale(b.lo);
          const x1 = ctx.scale(b.hi);
          const tip = [`${b.label}: VND ${fmtNum(b.lo)} to ${fmtNum(b.hi)} per 100 g of protein`];
          const cx = (x0 + x1) / 2;
          const ly = ctx.top - 32 + b.row * 16;
          return (
            mark(
              tip,
              rect(x0, ctx.top, x1 - x0, ctx.bottom - ctx.top, BAND) +
                hit(x0, ctx.top, Math.max(x1 - x0, 8), ctx.bottom - ctx.top),
            ) +
            line(cx, ly + 7, cx, ctx.top, MUTED, 1) +
            text(b.anchor === 'end' ? cx - 4 : cx + 4, ly, b.label, {
              size: 12,
              fill: INK,
              anchor: b.anchor,
            })
          );
        })
        .join(''),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const by = y + (h - bh) / 2;
      const xm = ctx.scale(num(r.med_price_100g_protein));
      const xa = ctx.scale(num(r.min_pp));
      const xb = ctx.scale(num(r.max_pp));
      const cy = y + h / 2;
      const whisk =
        line(xa, cy, xb, cy, INK, 1.5) +
        line(xa, cy - 5, xa, cy + 5, INK, 1.5) +
        line(xb, cy - 5, xb, cy + 5, INK, 1.5);
      const tip = [
        `${r.product_type}: median VND ${fmtStr(r.med_price_100g_protein)} per 100 g of protein`,
        `Range: VND ${fmtStr(r.min_pp)} to ${fmtStr(r.max_pp)}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const lab = fmtStr(r.med_price_100g_protein);
      const lw = textWidth(lab, 12);
      const lxRight = xb + 6;
      const labelSvg =
        lxRight + lw <= W
          ? text(lxRight, cy, lab, { size: 12, fill: INK, halo: true })
          : text(xa - 6, cy, lab, { size: 12, fill: INK, anchor: 'end', halo: true });
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, xm, by, bh, S(1)) +
            whisk +
            hit(ctx.plotLeft, y, xb - ctx.plotLeft + 4, h),
        ) + labelSvg
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'product_type', label: 'Product type' },
      { key: 'n', label: 'Products', num: true },
      { key: 'med_price_100g_protein', label: 'Median VND per 100 g of protein', num: true },
      { key: 'min_pp', label: 'Lowest (VND)', num: true },
      { key: 'max_pp', label: 'Highest (VND)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}
