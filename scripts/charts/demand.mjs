// Charts added with report v0.6: protein diet, consumers, channels, buyers, export demand,
// demand sizing, the actor check and the prologue. Same primitives and conventions as bars.mjs.
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
  fmtStr,
  fmtNum,
  num,
  linear,
  logScale,
  text,
  textLines,
  line,
  rect,
  hbar,
  vbar,
  rangeBar,
  hit,
  hitCircle,
  hatchRect,
  mark,
  dot,
  tipFields,
  legend,
  wrap,
  textWidth,
  yAxis,
  table,
  breakMark,
  R,
} from './lib.mjs';
import { hLayout, endLabel } from './layout.mjs';
import { stackH } from './bars.mjs';

const uniq = (arr) => [...new Set(arr)];
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
const pct = (v) => `${fmtStr(v)}%`;
const rangeTxt = (lo, hi) => (lo === hi ? fmtStr(lo) : `${fmtStr(lo)} to ${fmtStr(hi)}`);
const pathD = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${R(p[0])},${R(p[1])}`).join('');
const strokePath = (d, col, extra = '') =>
  `<path d="${d}" style="fill:none;stroke:${col};stroke-width:2;stroke-linejoin:round;stroke-linecap:round${extra}"/>`;
/** Transparent wide stroke along a path, so a whole line can carry one tooltip. */
const hitPath = (d) =>
  `<path d="${d}" style="fill:none;stroke:transparent;stroke-width:12;stroke-linejoin:round"/>`;
/** Hollow marker with a 2px ring (for reference points such as S-ALT). */
const ring = (cx, cy, r, col) =>
  `<circle cx="${R(cx)}" cy="${R(cy)}" r="${R(r)}" style="fill:${SURFACE};stroke:${col};stroke-width:2"/>`;
/** Annotation text from the spec (instruction prefix removed), or a fallback. */
function annText(spec, re, fallback) {
  const a = (spec.annotations || []).find((x) => re.test(x));
  if (!a) return fallback;
  return a.replace(/^(Add a note|Mark|Add a marker far off the axis):\s*/i, '').trim();
}
/** Muted wrapped note lines from y; returns {svg, h}. */
function noteBlock(str, x, y, maxW, o = {}) {
  const lines = wrap(str, maxW, 12);
  return {
    svg: textLines(x, y, lines, { size: 12, fill: o.fill || MUTED, lineH: 15, anchor: o.anchor }),
    h: lines.length * 15,
  };
}
/** Spread label centres (y, top to bottom) so they are at least gap apart, within [lo, hi]. */
function dodge(ys, gap, lo = -Infinity, hi = Infinity) {
  const idx = ys.map((_, i) => i).sort((a, b) => ys[a] - ys[b] || a - b);
  const out = ys.slice();
  idx.forEach((i, k) => {
    out[i] = Math.max(out[i], lo);
    if (k) out[i] = Math.max(out[i], out[idx[k - 1]] + gap);
  });
  for (let k = idx.length - 1; k >= 0; k--) {
    const i = idx[k];
    out[i] = k === idx.length - 1 ? Math.min(out[i], hi) : Math.min(out[i], out[idx[k + 1]] - gap);
  }
  return out;
}
/** Vertical stacked column: 2px surface gaps between segments, rounded top on the last one. */
function stackV(y, x, w, segs) {
  let cum = 0;
  const vis = segs.filter((s) => s.v > 0);
  return vis
    .map((s, i) => {
      const a = y(cum);
      cum += s.v;
      const b = y(cum);
      const last = i === vis.length - 1;
      const len = a - b;
      const top = !last && len > 4 ? b + 2 : b;
      const shape = last ? vbar(x, w, a, b, s.fill) : rect(x, top, w, Math.max(a - top, 0), s.fill);
      return mark(s.tip, shape + hit(x - 1, b - 1, w + 2, Math.max(len, 4) + 2));
    })
    .join('');
}
/** Legend plus a y axis; returns the frame for a vertical chart. */
function vFrame(o) {
  const parts = [];
  let top = 0;
  if (o.items && o.items.length) {
    const lg = legend(o.items, 0, 0, W);
    parts.push(lg.svg);
    top = lg.height;
  }
  top += 34 + (o.head ?? 0);
  const base = top + (o.plotH ?? 250);
  const left = o.left ?? 60;
  const right = o.right ?? W - 12;
  const y = (o.log ? logScale : linear)(o.d0, o.d1, base, top);
  parts.push(yAxis(y, o.ticks, left, right, o.fmt ?? fmtNum, { title: o.title, titleX: 0 }));
  return { parts, y, top, base, left, right };
}

// ---------------------------------------------------------------------------
// Log-scale price ladders with reference bands (protein price ladder, cost per serving).
function bandsUnder(bands, rowGap = 16) {
  return (ctx) =>
    bands
      .map((b, bi) => {
        const x0 = ctx.scale(b.lo);
        const x1 = ctx.scale(b.hi);
        const cx = (x0 + x1) / 2;
        const ly = ctx.top - 14 - (bands.length - 1 - (b.row ?? bi)) * rowGap;
        return (
          mark(
            b.tip,
            rect(x0, ctx.top, x1 - x0, ctx.bottom - ctx.top, BAND) +
              hit(x0, ctx.top, Math.max(x1 - x0, 8), ctx.bottom - ctx.top),
          ) +
          line(cx, ly + 7, cx, ctx.top, MUTED, 1) +
          text(b.anchor === 'end' ? cx - 4 : cx + 4, ly, b.label, {
            size: 12,
            fill: INK,
            anchor: b.anchor || 'start',
          })
        );
      })
      .join('');
}

export function proteinPriceLadder(spec, D) {
  const rows = D.csv(spec.data.file);
  const groups = uniq(rows.map((r) => r.group));
  const color = (g) => S(groups.indexOf(g) + 1);
  // Ranges behind the midpoints, as stated in spec.notes ("Ranges: beef 130,000 to 143,000; ...").
  const ranges = {};
  const m = String(spec.notes || '').match(/Ranges:\s*([^.]+)/);
  if (m)
    for (const part of m[1].split(/;\s*/)) {
      const mm = part.match(/^(\w+)\s+([\d,]+)\s+to\s+([\d,]+)/);
      if (mm) ranges[mm[1].toLowerCase()] = [mm[2], mm[3]];
    }
  const rangeOf = (food) => {
    const k = Object.keys(ranges).find((key) => food.toLowerCase().includes(key));
    return k ? ranges[k] : null;
  };
  const isPork = (r) => /^Lean pork/.test(r.food); // annotation: mainstream meat reference
  const band = { lo: 34000, hi: 45000 }; // annotation: band from 34,000 to 45,000
  const bandLabel = 'Eggs and chicken: the mass price to beat';
  const L = hLayout({
    legend: [
      ...groups.map((g) => ({ label: cap(g), color: color(g) })),
      { label: bandLabel, color: BAND, shape: 'band' },
    ],
    head: 20,
    rows: rows.map((r) => ({ label: r.food, bold: isPork(r), data: r })),
    labelW: 220,
    plotRight: W - 70,
    minRowH: 26,
    makeScale: (l, r) => logScale(10000, 1000000, l, r),
    ticks: [10000, 20000, 50000, 100000, 200000, 500000, 1000000],
    fmtTick: fmtNum,
    axisTitle: 'VND per 100 g of protein (log scale)',
    under: bandsUnder([
      {
        ...band,
        label: bandLabel,
        anchor: 'end',
        row: 0,
        tip: [`${bandLabel}: VND 34,000 to 45,000 per 100 g of protein`],
      },
    ]),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const x1 = ctx.scale(num(r.vnd_per_100g_protein));
      const rg = rangeOf(r.food);
      const tip = [
        `${r.food}: VND ${fmtStr(r.vnd_per_100g_protein)} per 100 g of protein` +
          (rg ? ' (range midpoint)' : ''),
        rg ? `Range: VND ${rg[0]} to ${rg[1]}` : '',
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const lab = fmtStr(r.vnd_per_100g_protein) + (isPork(r) ? ', mainstream meat reference' : '');
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, y + (h - bh) / 2, bh, color(r.group)) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) + endLabel(x1, y + h / 2, lab, W, { size: 12, weight: isPork(r) ? 600 : undefined })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'food', label: 'Food' },
      { key: 'group', label: 'Group' },
      { key: 'vnd_per_100g_protein', label: 'VND per 100 g of protein', num: true },
      {
        key: 'range',
        label: 'Range (VND)',
        get: (r) => {
          const rg = rangeOf(r.food);
          return rg ? `${rg[0]} to ${rg[1]}` : '';
        },
      },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

export function proteinCostServing(spec, D) {
  const rows = D.csv(spec.data.file);
  const bases = uniq(rows.map((r) => r.basis));
  const color = (b) => S(bases.indexOf(b) + 1);
  const baseLabel = (b) =>
    b === 'benchmark'
      ? 'Benchmark (chapter 11)'
      : b === 'audit'
        ? 'Retail audit median, label protein'
        : cap(b);
  // Bands from spec.data.reference: "Bands: canteen ... VND 7,500 to 14,000; street ... VND 29,000 to 35,000"
  const bands = String(spec.data.reference || '')
    .replace(/^Bands:\s*/, '')
    .split(/;\s*/)
    .map((p) => p.match(/^(.*?)\s+VND\s+([\d,]+)\s+to\s+([\d,]+)/))
    .filter(Boolean)
    .map((mm, i) => ({
      name: cap(mm[1]),
      label: `${cap(mm[1])}, ${mm[2]} to ${mm[3]}`,
      lo: num(mm[2]),
      hi: num(mm[3]),
      row: i,
      anchor: 'start',
      tip: [`${cap(mm[1])}: VND ${mm[2]} to ${mm[3]}`],
    }));
  const L = hLayout({
    legend: [
      ...bases.map((b) => ({ label: baseLabel(b), color: color(b) })),
      { label: 'Retail benchmarks (shaded)', color: BAND, shape: 'band' },
    ],
    head: 20 + bands.length * 16,
    rows: rows.map((r) => ({ label: r.product, data: r })),
    labelW: 170,
    plotRight: W - 64,
    minRowH: 26,
    makeScale: (l, r) => logScale(5000, 200000, l, r),
    ticks: [5000, 10000, 20000, 50000, 100000, 200000],
    fmtTick: fmtNum,
    axisTitle: 'VND for 20 g of protein (log scale)',
    under: bandsUnder(bands, 18),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const x1 = ctx.scale(num(r.vnd_per_20g_protein));
      const tip = [
        `${r.product}: VND ${fmtStr(r.vnd_per_20g_protein)} for 20 g of protein`,
        `Basis: ${baseLabel(r.basis)}`,
      ];
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, y + (h - bh) / 2, bh, color(r.basis)) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) + endLabel(x1, y + h / 2, fmtStr(r.vnd_per_20g_protein), W, { size: 12 })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'product', label: 'Product' },
      { key: 'basis', label: 'Basis' },
      { key: 'vnd_per_20g_protein', label: 'VND for 20 g of protein', num: true },
    ],
    [
      ...rows,
      ...bands.map((b) => ({
        product: `${b.name} (band)`,
        basis: 'benchmark',
        vnd_per_20g_protein: `${fmtNum(b.lo)} to ${fmtNum(b.hi)}`,
      })),
    ],
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function animalProteinLadder(spec, D) {
  const rows = D.csv(spec.data.file);
  const countries = uniq(rows.map((r) => r.country));
  const focus = 'Vietnam'; // annotation: highlight the Vietnam line; grey the others
  const [d0, d1] = spec.encoding.y_domain || [0, 70];
  const bandLabel = 'Where Japan, Korea, Taiwan and Malaysia level off';
  const lg = legend(
    [
      { label: 'Vietnam', color: HIGHLIGHT, shape: 'line' },
      { label: 'Neighbours', color: DIM, shape: 'line' },
      { label: '55 to 60% band', color: BAND, shape: 'band' },
    ],
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 34;
  const base = top + 300;
  const left = 50;
  const right = W - 110;
  const years = uniq(rows.map((r) => num(r.year))).sort((a, b) => a - b);
  const x = linear(years[0], years[years.length - 1], left, right);
  const y = linear(d0, d1, base, top);
  parts.push(
    yAxis(y, [0, 10, 20, 30, 40, 50, 60, 70], left, right, (t) => `${t}%`, {
      title: 'Share of protein supply from animal foods (%)',
      titleX: 0,
    }),
  );
  parts.push(line(left, base, right, base, AXIS, 1));
  for (const t of [1961, 1970, 1980, 1990, 2000, 2010, 2023])
    parts.push(text(x(t), base + 16, String(t), { size: 12, fill: INK, anchor: 'middle' }));
  // band 55 to 60% (annotation)
  parts.push(
    mark(
      [`${bandLabel}: 55 to 60% of protein from animal foods`],
      rect(left, y(60), right - left, y(55) - y(60), BAND),
    ),
  );
  parts.push(text(left + 8, y(60) - 10, `${bandLabel} (55 to 60%)`, { size: 12, fill: INK }));
  const series = countries.map((c) =>
    rows.filter((r) => r.country === c).sort((a, b) => num(a.year) - num(b.year)),
  );
  // grey lines first, one mark per line; then the focus line with per-point marks
  series.forEach((sr, i) => {
    if (countries[i] === focus) return;
    const d = pathD(sr.map((r) => [x(num(r.year)), y(num(r.animal_share_pct))]));
    const tip = [
      `${countries[i]}: ${pct(sr[0].animal_share_pct)} (${sr[0].year}) to ${pct(sr[sr.length - 1].animal_share_pct)} (${sr[sr.length - 1].year})`,
      sr.map((r) => `${r.year} ${pct(r.animal_share_pct)}`).join(', '),
    ];
    parts.push(mark(tip, strokePath(d, DIM) + hitPath(d)));
  });
  const fi = countries.indexOf(focus);
  if (fi >= 0) {
    const sr = series[fi];
    const pts = sr.map((r) => [x(num(r.year)), y(num(r.animal_share_pct))]);
    parts.push(strokePath(pathD(pts), HIGHLIGHT));
    sr.forEach((r, k) => {
      parts.push(
        mark(
          [`Vietnam, ${r.year}: ${pct(r.animal_share_pct)} of protein from animal foods`],
          dot(pts[k][0], pts[k][1], 4, HIGHLIGHT) + hitCircle(pts[k][0], pts[k][1], 9),
        ),
      );
    });
    parts.push(
      text(pts[0][0] + 8, pts[0][1] + 16, `${pct(sr[0].animal_share_pct)} in ${sr[0].year}`, {
        size: 12,
        fill: INK,
        halo: true,
      }),
    );
  }
  // direct labels at line ends (dodged); Japan's series ends in 2013, so its label sits on its line
  const ends = series.map((sr, i) => {
    const r = sr[sr.length - 1];
    return { c: countries[i], yr: num(r.year), v: num(r.animal_share_pct) };
  });
  const atEnd = ends.filter((e) => e.yr === years[years.length - 1]);
  const ly = dodge(
    atEnd.map((e) => y(e.v)),
    14,
    top,
    base,
  );
  atEnd.forEach((e, k) => {
    const isF = e.c === focus;
    const px = x(e.yr);
    if (Math.abs(ly[k] - y(e.v)) > 3) parts.push(line(px + 3, y(e.v), px + 10, ly[k], MUTED, 1));
    parts.push(
      text(px + 12, ly[k], isF ? `Vietnam ${pct(e.v)}` : e.c, {
        size: 12,
        fill: isF ? INK : MUTED,
        weight: isF ? 600 : undefined,
      }),
    );
  });
  for (const e of ends.filter((q) => q.yr !== years[years.length - 1])) {
    const sr = series[countries.indexOf(e.c)];
    // label above and left of its 1980 point, where no other line runs
    const r = sr.find((q) => q.year === '1980') || sr[sr.length - 1];
    parts.push(
      text(x(num(r.year)) - 6, y(num(r.animal_share_pct)) - 10, e.c, {
        size: 12,
        fill: MUTED,
        anchor: 'end',
        halo: true,
      }),
    );
  }
  const tbl = table(
    spec.title,
    [
      { key: 'year', label: 'Year' },
      ...countries.map((c) => ({
        key: c,
        label: `${c} (%)`,
        num: true,
        get: (yr) => (rows.find((r) => r.country === c && r.year === yr) || {}).animal_share_pct,
      })),
    ],
    years.map(String),
  );
  return { body: parts.join(''), height: base + 30, table: tbl };
}

// ---------------------------------------------------------------------------
/** Vertical grouped bars with category labels under each group. */
function vGrouped(o) {
  const { parts, y, base, left, right } = o.frame;
  const n = o.cats.length;
  const gw = (right - left) / n;
  const k = o.series.length;
  const bw = o.bw;
  let labelBottom = base;
  o.cats.forEach((c, gi) => {
    const cx = left + gw * (gi + 0.5);
    const x0 = cx - (k * bw + (k - 1) * 2) / 2;
    o.series.forEach((s, si) => {
      const bx = x0 + si * (bw + 2);
      const v = num(c.row[s.key]);
      const y1 = y(v);
      const shape = v > 0 ? vbar(bx, bw, base, y1, s.color) : rect(bx, base - 2, bw, 2, s.color);
      parts.push(
        mark(
          o.tip(c.row, s),
          shape +
            hit(bx - 1, Math.min(y1, base - 14) - 16, bw + 2, base - Math.min(y1, base - 14) + 16),
        ),
      );
      if (s.label)
        parts.push(
          text(bx + bw / 2, Math.min(y1, base - 2) - 10, s.label(c.row), {
            size: 12,
            fill: INK,
            anchor: 'middle',
            weight: s.bold ? 600 : undefined,
            halo: true,
          }),
        );
    });
    const nl = wrap(c.label, gw - 8, 12);
    parts.push(textLines(cx, base + 14, nl, { size: 12, fill: INK, anchor: 'middle', lineH: 15 }));
    labelBottom = Math.max(labelBottom, base + 14 + (nl.length - 1) * 15 + 8);
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  return labelBottom;
}

export function tofuByRegion(spec, D) {
  const rows = D.csv(spec.data.file);
  const series = [
    { key: 'tofu_kg', name: 'Tofu', color: S(1), bold: true, label: (r) => fmtStr(r.tofu_kg) },
    { key: 'meat_kg', name: 'Meat', color: S(2) },
    { key: 'fish_kg', name: 'Fish', color: S(3) },
  ].filter((s) => spec.encoding.y.includes(s.key));
  const frame = vFrame({
    items: series.map((s) => ({ label: s.name, color: s.color })),
    plotH: 260,
    left: 50,
    d0: 0,
    d1: 3.5,
    ticks: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    title: 'kg per person per month',
  });
  const bottom = vGrouped({
    frame,
    cats: rows.map((r) => ({ label: r.region, row: r })),
    series,
    bw: 22,
    tip: (r, s) => [
      `${r.region}, ${s.name.toLowerCase()}: ${fmtStr(r[s.key])} kg per person a month`,
    ],
  });
  // annotation callout in the empty upper right
  const ann = annText(
    spec,
    /3\.6 times/,
    'Red River Delta 0.69 kg is 3.6 times the Mekong Delta 0.19 kg.',
  ).replace(/^Label the tofu bars;\s*/, '');
  const nb = noteBlock(cap(ann), frame.right, frame.y(3.35), 250, { fill: INK, anchor: 'end' });
  frame.parts.push(nb.svg);
  const tbl = table(
    spec.title,
    [
      { key: 'region', label: 'Region (pre-2025)' },
      ...series.map((s) => ({ key: s.key, label: `${s.name} (kg per person a month)`, num: true })),
    ],
    rows,
  );
  return { body: frame.parts.join(''), height: bottom + 12, table: tbl };
}

export function pbmFunnel(spec, D) {
  const rows = D.csv(spec.data.file);
  const series = [
    { key: 'vietnam_pct', name: 'Vietnam (n = 1,049)', short: 'Vietnam', color: S(1) },
    {
      key: 'six_country_average_pct',
      name: 'Six-country average',
      short: 'Six-country average',
      color: S(2),
    },
  ].map((s) => ({ ...s, label: (r) => pct(r[s.key]) }));
  const [d0, d1] = spec.encoding.y_domain || [0, 100];
  const frame = vFrame({
    items: series.map((s) => ({ label: s.name, color: s.color })),
    plotH: 240,
    left: 50,
    d0,
    d1,
    ticks: [0, 20, 40, 60, 80, 100],
    fmt: (t) => `${t}%`,
    title: 'Share of online respondents (%)',
  });
  let bottom = vGrouped({
    frame,
    cats: rows.map((r) => ({ label: r.stage, row: r })),
    series,
    bw: 34,
    tip: (r, s) => [`${r.stage}, ${s.short}: ${pct(r[s.key])}`],
  });
  const nb = noteBlock(
    annText(spec, /mock meat/, 'Note: "plant-based meat" probably includes traditional mock meat.'),
    0,
    bottom + 24,
    W - 8,
  );
  frame.parts.push(nb.svg);
  bottom += 24 + nb.h;
  const tbl = table(
    spec.title,
    [
      { key: 'stage', label: 'Stage' },
      { key: 'vietnam_pct', label: 'Vietnam (%)', num: true },
      { key: 'six_country_average_pct', label: 'Six-country average (%)', num: true },
    ],
    rows,
  );
  return { body: frame.parts.join(''), height: bottom + 4, table: tbl };
}

// ---------------------------------------------------------------------------
export function priceParityChoice(spec, D) {
  const rows = D.csv(spec.data.file).sort(
    (a, b) => num(a.price_vs_meat_pct) - num(b.price_vs_meat_pct),
  );
  const series = [
    { key: 'vietnam_pct', name: 'Vietnam', color: S(1), above: true },
    { key: 'six_country_average_pct', name: 'Six-country average', color: S(2), above: false },
  ];
  const [d0, d1] = spec.encoding.y_domain || [0, 100];
  const frame = vFrame({
    items: series.map((s) => ({ label: s.name, color: s.color, shape: 'line' })),
    plotH: 260,
    left: 50,
    right: W - 190,
    d0,
    d1,
    ticks: [0, 20, 40, 60, 80, 100],
    fmt: (t) => `${t}%`,
    title: 'Would choose plant-based meat over meat (%)',
  });
  const { parts, y, base, left } = frame;
  const plotEnd = W - 210; // the off-scale marker sits to the right of a break (frame.right = plotEnd + 20)
  const x = linear(-28, 108, left, plotEnd);
  const tickLab = (v) => (v < 0 ? `${-v}% cheaper` : v === 0 ? 'Parity' : `+${v}%`);
  for (const r of rows)
    parts.push(
      text(x(num(r.price_vs_meat_pct)), base + 16, tickLab(num(r.price_vs_meat_pct)), {
        size: 12,
        fill: INK,
        anchor: 'middle',
      }),
    );
  parts.push(
    text(plotEnd, base + 36, 'Price of plant-based meat relative to meat', {
      size: 12,
      anchor: 'end',
    }),
  );
  // break, then the far-off marker (annotation)
  parts.push(line(left, base, plotEnd + 20, base, AXIS, 1));
  parts.push(breakMark(plotEnd + 26, base, 12));
  const mx = W - 100;
  parts.push(line(plotEnd + 32, base, W - 12, base, AXIS, 1, ';stroke-dasharray:2 3'));
  const offTxt = annText(
    spec,
    /12 to 18 times/,
    'imported analogues on Vietnamese shelves cost 12 to 18 times eggs and chicken per gram of protein.',
  ).replace(/\.$/, '');
  parts.push(
    mark([cap(offTxt), 'Far off this axis'], ring(mx, base, 6, INK) + hitCircle(mx, base, 12)),
  );
  parts.push(text(mx, base + 16, 'Off the scale', { size: 12, fill: INK, anchor: 'middle' }));
  const nb = noteBlock(cap(offTxt), mx - 92, y(62), 190, { fill: INK });
  parts.push(nb.svg);
  parts.push(line(mx, y(62) + nb.h - 4, mx, base - 10, MUTED, 1));
  for (const s of series) {
    const pts = rows.map((r) => [x(num(r.price_vs_meat_pct)), y(num(r[s.key]))]);
    parts.push(strokePath(pathD(pts), s.color));
    rows.forEach((r, k) => {
      parts.push(
        mark(
          [
            `${s.name}, ${tickLab(num(r.price_vs_meat_pct)).toLowerCase()}: ${pct(r[s.key])} would choose plant-based meat`,
          ],
          dot(pts[k][0], pts[k][1], 4.5, s.color) + hitCircle(pts[k][0], pts[k][1], 11),
        ),
      );
      parts.push(
        text(pts[k][0], pts[k][1] + (s.above ? -15 : 16), pct(r[s.key]), {
          size: 12,
          fill: INK,
          anchor: 'middle',
          weight: s.above ? 600 : undefined,
          halo: true,
        }),
      );
    });
  }
  const tbl = table(
    spec.title,
    [
      {
        key: 'price_vs_meat_pct',
        label: 'Price relative to meat',
        get: (r) => tickLab(num(r.price_vs_meat_pct)),
      },
      { key: 'vietnam_pct', label: 'Vietnam (%)', num: true },
      { key: 'six_country_average_pct', label: 'Six-country average (%)', num: true },
    ],
    rows,
  );
  return { body: parts.join(''), height: base + 48, table: tbl };
}

// ---------------------------------------------------------------------------
export function searchInterest(spec, D) {
  const rows = D.csv(spec.data.file).sort((a, b) => num(a.year) - num(b.year));
  // annotation: label series in Vietnamese with English glosses
  const NAMES = {
    sua_hat_nut_milk: ['sữa hạt', 'nut milk'],
    thit_thuc_vat_plant_meat: ['thịt thực vật', 'plant meat'],
    sua_yen_mach_oat_milk: ['sữa yến mạch', 'oat milk'],
    do_chay_vegetarian_food: ['đồ chay', 'vegetarian food'],
    thuan_chay_vegan: ['thuần chay', 'vegan'],
  };
  const keys = spec.encoding.y.slice(0, 8);
  const nm = (k) => (NAMES[k] ? `${NAMES[k][0]} (${NAMES[k][1]})` : k);
  const withDots = new Set(['sua_hat_nut_milk', 'thit_thuc_vat_plant_meat']); // the two the title contrasts
  const frame = vFrame({
    items: keys.map((k, i) => ({ label: nm(k), color: S(i + 1), shape: 'line' })),
    plotH: 280,
    left: 44,
    right: W - 172,
    d0: 0,
    d1: 100,
    ticks: [0, 20, 40, 60, 80, 100],
    title: 'Google Trends index (relative within the set)',
  });
  const { parts, y, base, left, right, top } = frame;
  const years = rows.map((r) => num(r.year));
  const x = linear(years[0] - 0.3, years[years.length - 1] + 0.3, left, right);
  parts.push(line(left, base, right, base, AXIS, 1));
  const lastYear = years[years.length - 1];
  rows.forEach((r) => {
    const partial = num(r.year) === lastYear && /to September/i.test(spec.subtitle || '');
    parts.push(
      textLines(x(num(r.year)), base + 16, partial ? [r.year, 'to Sep'] : [r.year], {
        size: 12,
        fill: INK,
        anchor: 'middle',
        lineH: 14,
      }),
    );
  });
  keys.forEach((k, i) => {
    const pts = rows.map((r) => [x(num(r.year)), y(num(r[k]))]);
    parts.push(strokePath(pathD(pts), S(i + 1)));
    rows.forEach((r, j) => {
      const tip = [`${nm(k)}, ${r.year}: index ${fmtStr(r[k])}`];
      const shape = withDots.has(k) ? dot(pts[j][0], pts[j][1], 4, S(i + 1)) : '';
      parts.push(mark(tip, shape + hitCircle(pts[j][0], pts[j][1], 7)));
    });
  });
  // dodged end labels
  const last = rows[rows.length - 1];
  const ly = dodge(
    keys.map((k) => y(num(last[k]))),
    15,
    top,
    base - 4,
  );
  keys.forEach((k, i) => {
    const px = x(lastYear);
    const py = y(num(last[k]));
    if (Math.abs(ly[i] - py) > 3) parts.push(line(px + 5, py, px + 12, ly[i], MUTED, 1));
    parts.push(
      text(px + 14, ly[i], `${nm(k)} ${fmtStr(last[k])}`, {
        size: 12,
        fill: INK,
        weight: i === 0 ? 600 : undefined,
      }),
    );
  });
  // first value of the leading series (alt text: rises from about 20)
  const k0 = keys[0];
  parts.push(
    text(x(years[0]), y(num(rows[0][k0])) - 14, fmtStr(rows[0][k0]), {
      size: 12,
      fill: INK,
      anchor: 'middle',
      halo: true,
    }),
  );
  const tbl = table(
    spec.title,
    [{ key: 'year', label: 'Year' }, ...keys.map((k) => ({ key: k, label: nm(k), num: true }))],
    rows,
  );
  return { body: parts.join(''), height: base + 40, table: tbl };
}

// ---------------------------------------------------------------------------
export function usPbmTrend(spec, D) {
  const rows = D.csv(spec.data.file).sort((a, b) => num(a.year) - num(b.year));
  const frame = vFrame({
    plotH: 220,
    left: 50,
    right: W - 20,
    d0: 0,
    d1: 1.6,
    ticks: [0, 0.4, 0.8, 1.2, 1.6],
    fmt: (t) => fmtNum(t, 1),
    title: 'Retail sales, USD billion',
  });
  const { parts, y, base, left, right } = frame;
  const y0 = num(rows[0].year);
  const y1 = num(rows[rows.length - 1].year);
  const x = linear(y0 - 0.4, y1 + 0.4, left + 20, right - 40);
  parts.push(line(left, base, right, base, AXIS, 1));
  const pts = rows.map((r) => [x(num(r.year)), y(num(r.sales_usd_bn))]);
  // solid between consecutive years; dotted across a missing year
  for (let i = 1; i < rows.length; i++) {
    const gap = num(rows[i].year) - num(rows[i - 1].year) > 1;
    parts.push(strokePath(pathD([pts[i - 1], pts[i]]), S(1), gap ? ';stroke-dasharray:2 4' : ''));
  }
  for (let yr = y0; yr <= y1; yr++) {
    const has = rows.some((r) => num(r.year) === yr);
    parts.push(
      text(x(yr), base + 16, String(yr), { size: 12, fill: has ? INK : MUTED, anchor: 'middle' }),
    );
  }
  rows.forEach((r, i) => {
    const tip = [
      `US plant-based meat and seafood, ${r.year}: USD ${fmtStr(r.sales_usd_bn)} billion`,
      r.share_of_total_meat_sales_pct
        ? `Share of total meat sales: ${pct(r.share_of_total_meat_sales_pct)}`
        : 'Share of total meat sales: not reported',
      r.units_million ? `Units: ${fmtStr(r.units_million)} million` : '',
    ];
    parts.push(mark(tip, dot(pts[i][0], pts[i][1], 5, S(1)) + hitCircle(pts[i][0], pts[i][1], 12)));
    parts.push(
      text(pts[i][0], pts[i][1] - 16, `USD ${fmtStr(r.sales_usd_bn)} bn`, {
        size: 12,
        fill: INK,
        anchor: 'middle',
        weight: 600,
        halo: true,
      }),
    );
  });
  // share of meat sales as a labelled row, not a second axis
  const ry = base + 50;
  parts.push(text(0, ry, 'Share of total meat sales', { size: 12, fill: INK, weight: 600 }));
  rows.forEach((r) => {
    parts.push(
      text(
        x(num(r.year)),
        ry + 20,
        r.share_of_total_meat_sales_pct ? pct(r.share_of_total_meat_sales_pct) : 'not reported',
        {
          size: r.share_of_total_meat_sales_pct ? 13 : 12,
          fill: r.share_of_total_meat_sales_pct ? INK : MUTED,
          anchor: 'middle',
        },
      ),
    );
  });
  parts.push(line(0, ry + 34, W, ry + 34, 'var(--chart-grid)', 1));
  const nb = noteBlock(
    annText(spec, /penetration/, 'Note: household penetration fell while repeat held.'),
    0,
    ry + 52,
    W - 8,
  );
  parts.push(nb.svg);
  const tbl = table(
    spec.title,
    [
      { key: 'year', label: 'Year' },
      { key: 'sales_usd_bn', label: 'Sales (USD billion)', num: true },
      {
        key: 'share_of_total_meat_sales_pct',
        label: 'Share of total meat sales (%)',
        num: true,
        fmt: (v) => (v ? fmtStr(v) : 'not reported'),
      },
      { key: 'units_million', label: 'Units (million)', num: true },
    ],
    rows,
  );
  return { body: parts.join(''), height: ry + 52 + nb.h, table: tbl };
}

// ---------------------------------------------------------------------------
export function institutionalMeals(spec, D) {
  const rows = D.csv(spec.data.file);
  const L = hLayout({
    legend: [
      { label: 'Range, low to high', color: S(1) },
      { label: 'Central value', color: INK, shape: 'dot' },
    ],
    rows: rows.map((r) => ({ label: r.channel, data: r })),
    labelW: 230,
    plotRight: W - 20,
    minRowH: 58,
    makeScale: (l, r) => logScale(0.5, 3000, l, r),
    ticks: [1, 10, 100, 1000],
    fmtTick: fmtNum,
    axisTitle: 'Meals a year, million (log scale)',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const cy = y + h / 2;
      const xl = ctx.scale(num(r.meals_million_low));
      const xh = ctx.scale(num(r.meals_million_high));
      const xm = ctx.scale(num(r.meals_million_mid));
      const lab = `${rangeTxt(r.meals_million_low, r.meals_million_high)} million`;
      const tip = [
        `${r.channel}: ${lab} meals a year`,
        `Central value: ${fmtStr(r.meals_million_mid)} million`,
      ];
      const lw = textWidth(lab, 13, 600);
      const right = xh + 8 + lw <= W;
      return (
        mark(
          tip,
          rangeBar(xl, xh, cy - bh / 2, bh, S(1)) +
            `<circle cx="${R(xm)}" cy="${R(cy)}" r="4.5" style="fill:${INK};stroke:${SURFACE};stroke-width:2"/>` +
            hit(xl - 6, y + 4, xh - xl + 12, h - 8),
        ) +
        text(right ? xh + 8 : xl - 8, cy, lab, {
          size: 13,
          fill: INK,
          weight: 600,
          anchor: right ? 'start' : 'end',
          halo: true,
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'channel', label: 'Channel' },
      { key: 'meals_million_low', label: 'Low (million meals)', num: true },
      { key: 'meals_million_mid', label: 'Central (million meals)', num: true },
      { key: 'meals_million_high', label: 'High (million meals)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function plantProteinImports(spec, D) {
  const rows = D.csv(spec.data.file).sort((a, b) => num(a.year) - num(b.year));
  const NAMES = {
    hs3504_protein_substances_t: 'Protein substances (HS 3504)',
    hs210610_textured_and_concentrates_t: 'Textured protein and concentrates (HS 2106 10)',
    hs1109_wheat_gluten_t: 'Wheat gluten (HS 1109)',
  };
  const keys = spec.encoding.y;
  const frame = vFrame({
    items: keys.map((k, i) => ({ label: NAMES[k] || k, color: S(i + 1) })),
    plotH: 260,
    left: 60,
    d0: 0,
    d1: 60000,
    ticks: [0, 10000, 20000, 30000, 40000, 50000, 60000],
    title: 'Tonnes',
  });
  const { parts, y, base, left, right } = frame;
  const gw = (right - left) / rows.length;
  const bw = 44;
  // annotation: label totals for 2019 and 2025 (bold); other totals shown lighter
  const boldYears = new Set(['2019', '2025']);
  rows.forEach((r, i) => {
    const cx = left + gw * (i + 0.5);
    const total = keys.reduce((a, k) => a + num(r[k]), 0);
    const segs = keys.map((k, ki) => ({
      v: num(r[k]),
      fill: S(ki + 1),
      tip: [`${r.year}, ${NAMES[k] || k}: ${fmtStr(r[k])} t`, `Total: ${fmtNum(total)} t`],
    }));
    parts.push(stackV(y, cx - bw / 2, bw, segs));
    const b = boldYears.has(r.year);
    parts.push(
      text(cx, y(total) - 11, b ? `${fmtNum(total)} t` : fmtNum(total), {
        size: b ? 13 : 12,
        fill: b ? INK : MUTED,
        anchor: 'middle',
        weight: b ? 600 : undefined,
      }),
    );
    parts.push(text(cx, base + 16, r.year, { size: 12, fill: INK, anchor: 'middle' }));
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  // note on the 2024 jump (annotation), anchored to the 2024 column
  const i24 = rows.findIndex((r) => r.year === '2024');
  let h = base + 30;
  const note = annText(
    spec,
    /2024 jump/,
    'The 2024 jump in HS 3504 is probably partly feed-grade.',
  );
  if (i24 >= 0) {
    const cx = left + gw * (i24 + 0.5);
    const segTop = y(num(rows[i24][keys[0]]));
    const ny = y(56000);
    const nb = noteBlock(cap(note), cx - bw / 2 - 16, ny, 250, { fill: INK, anchor: 'end' });
    parts.push(nb.svg);
    parts.push(
      line(cx - bw / 2 - 12, ny + nb.h - 8, cx - bw / 2 - 12, segTop, MUTED, 1) +
        line(cx - bw / 2 - 12, segTop, cx - bw / 2 - 3, segTop, MUTED, 1),
    );
  } else {
    const nb = noteBlock(note, 0, h, W - 8);
    parts.push(nb.svg);
    h += nb.h;
  }
  const tbl = table(
    spec.title,
    [
      { key: 'year', label: 'Year' },
      ...keys.map((k) => ({ key: k, label: `${NAMES[k] || k} (t)`, num: true })),
      {
        key: 'total',
        label: 'Total (t)',
        num: true,
        get: (r) => String(keys.reduce((a, k) => a + num(r[k]), 0)),
      },
    ],
    rows,
  );
  return { body: parts.join(''), height: h, table: tbl };
}

// ---------------------------------------------------------------------------
export function ingredientPriceLadder(spec, D) {
  const rows = D.csv(spec.data.file);
  const gapLo = 2.4; // annotation: the gap between about USD 2.4 and USD 7
  const gapHi = 7;
  const gapLabel = 'The choice a new ingredient must make';
  const L = hLayout({
    legend: [
      { label: 'Price range', color: S(1) },
      { label: 'Single price', color: S(1), shape: 'dot' },
      { label: 'Gap between the rungs, about USD 2.4 to 7', color: BAND, shape: 'band' },
    ],
    head: 22,
    rows: rows.map((r) => ({ label: r.ingredient, data: r })),
    labelW: 270,
    plotRight: W - 100,
    minRowH: 28,
    makeScale: (l, r) => linear(0, 18, l, r),
    ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
    fmtTick: fmtNum,
    axisTitle: 'USD per kg of protein',
    under: (ctx) => {
      const x0 = ctx.scale(gapLo);
      const x1 = ctx.scale(gapHi);
      return (
        mark(
          [`${gapLabel}: the gap between about USD 2.4 and USD 7 per kg of protein`],
          rect(x0, ctx.top, x1 - x0, ctx.bottom - ctx.top, BAND),
        ) +
        text((x0 + x1) / 2, ctx.top - 14, gapLabel, {
          size: 12,
          fill: INK,
          anchor: 'middle',
          weight: 600,
        })
      );
    },
    drawRow: (r, i, ctx, y, h) => {
      const lo = num(r.usd_per_kg_protein_low);
      const hi = num(r.usd_per_kg_protein_high);
      const cy = y + h / 2;
      const xl = ctx.scale(lo);
      const xh = ctx.scale(hi);
      const lab = `USD ${rangeTxt(r.usd_per_kg_protein_low, r.usd_per_kg_protein_high)}`;
      const tip = [`${r.ingredient}: ${lab} per kg of protein`];
      const shape = lo === hi ? dot(xl, cy, 5.5, S(1)) : rangeBar(xl - 4, xh + 4, cy - 6, 12, S(1));
      return (
        mark(tip, shape + hit(xl - 10, y + 2, xh - xl + 20, h - 4)) +
        text(xh + 12, cy, lab, { size: 12, fill: INK, halo: true })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'ingredient', label: 'Ingredient and origin' },
      { key: 'usd_per_kg_protein_low', label: 'Low (USD per kg of protein)', num: true },
      { key: 'usd_per_kg_protein_high', label: 'High (USD per kg of protein)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
/** Horizontal grouped bars: one row per category, one thin bar per series. */
function hGroupedRow(ctx, y, h, bars, labelFn) {
  const bh = bars.bh;
  const n = bars.items.length;
  const block = n * bh + (n - 1) * 3;
  let by = y + (h - block) / 2;
  const out = [];
  for (const b of bars.items) {
    const x1 = b.x1;
    const shape = b.hatch
      ? hatchRect(ctx.plotLeft, by, Math.max(x1 - ctx.plotLeft, 2), bh, b.color, 4)
      : x1 - ctx.plotLeft < 2
        ? rect(ctx.plotLeft, by, 2, bh, b.color)
        : hbar(ctx.plotLeft, x1, by, bh, b.color);
    out.push(
      mark(b.tip, shape + hit(ctx.plotLeft, by - 1, Math.max(x1 - ctx.plotLeft, 24), bh + 2)) +
        endLabel(Math.max(x1, ctx.plotLeft + 2), by + bh / 2, b.label, W, {
          size: 12,
          weight: b.bold ? 600 : undefined,
        }),
    );
    by += bh + 3;
  }
  return out.join('');
}

export function tariffEdge(spec, D) {
  const rows = D.csv(spec.data.file);
  const series = [
    { key: 'vietnam_pct', name: 'Vietnamese goods', color: S(1), bold: true },
    {
      key: 'competitor_pct',
      name: 'Thai and Chinese goods (MFN, or RCEP for China into Japan)',
      color: S(2),
    },
  ];
  const L = hLayout({
    legend: series.map((s) => ({ label: s.name, color: s.color })),
    rows: rows.map((r) => ({ label: r.market_and_line, data: r })),
    labelW: 250,
    plotRight: W - 60,
    minRowH: 42,
    makeScale: (l, r) => linear(0, 14, l, r),
    ticks: [0, 2, 4, 6, 8, 10, 12, 14],
    fmtTick: (t) => `${t}%`,
    axisTitle: 'Import duty (%)',
    foot: [annText(spec, /agricultural component/, '')].filter(Boolean),
    drawRow: (r, i, ctx, y, h) =>
      hGroupedRow(ctx, y, h, {
        bh: 13,
        items: series.map((s) => ({
          x1: ctx.scale(num(r[s.key])),
          color: s.color,
          bold: s.bold,
          label: pct(r[s.key]),
          tip: [`${r.market_and_line}, ${s.name}: ${pct(r[s.key])} import duty`],
        })),
      }),
  });
  const tbl = table(
    spec.title,
    [
      { key: 'market_and_line', label: 'Market and tariff line' },
      { key: 'vietnam_pct', label: 'Vietnamese goods (%)', num: true },
      { key: 'competitor_pct', label: 'Thai and Chinese goods (%)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

export function forecastVsActual(spec, D) {
  const rows = D.csv(spec.data.file);
  const series = [
    { key: 'forecast_usd_bn', name: 'Forecast', color: S(1), bold: true },
    { key: 'latest_actual_usd_bn', name: 'Latest comparable actual (2025)', color: S(2) },
  ];
  const split = (f) => {
    const i = f.indexOf(': ');
    return i > 0 ? [f.slice(0, i), cap(f.slice(i + 2))] : [f, ''];
  };
  const L = hLayout({
    legend: series.map((s) => ({ label: s.name, color: s.color })),
    rows: rows.map((r) => ({ label: split(r.forecast)[0], sub: split(r.forecast)[1], data: r })),
    labelW: 210,
    plotRight: W - 110,
    minRowH: 50,
    makeScale: (l, r) => logScale(1, 200, l, r),
    ticks: [1, 2, 5, 10, 20, 50, 100, 200],
    fmtTick: fmtNum,
    axisTitle: 'USD billion (log scale)',
    foot: [annText(spec, /have not arrived/, '')].filter(Boolean),
    drawRow: (r, i, ctx, y, h) =>
      hGroupedRow(ctx, y, h, {
        bh: 14,
        items: series.map((s) => ({
          x1: ctx.scale(num(r[s.key])),
          color: s.color,
          bold: s.bold,
          label: `USD ${fmtStr(r[s.key])} billion`,
          tip: [
            `${r.forecast}, ${s.name.toLowerCase()}: USD ${fmtStr(r[s.key])} billion`,
            ...tipFields(r, spec.encoding.tooltip),
          ],
        })),
      }),
  });
  const tbl = table(
    spec.title,
    [
      { key: 'forecast', label: 'Forecast' },
      { key: 'forecast_usd_bn', label: 'Forecast (USD billion)', num: true },
      { key: 'latest_actual_usd_bn', label: 'Latest actual, 2025 (USD billion)', num: true },
      { key: 'basis', label: 'Basis' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
const SCEN = {
  'D-DRIFT': 'D-DRIFT (incumbent drift)',
  'D-BENCH': 'D-BENCH (benchmark path)',
  'D-STRETCH': 'D-STRETCH (stretch path)',
};

export function demandRoutes(spec, D) {
  const rows = D.csv(spec.data.file);
  const NAMES = {
    r1_import_substitution: 'R1 Import substitution',
    r2_chay_occasions: 'R2 Chay occasions',
    r3_hybrids: 'R3 Hybrids',
    r4_institutions: 'R4 Institutions',
    r5_household_analogues: 'R5 Household analogues',
    r6_plant_milks: 'R6 Plant milks',
    r7_exports: 'R7 Exports',
  };
  const keys = spec.encoding.y.slice(0, 8);
  const saltLabel = 'S-ALT (meat replaced)'; // annotation
  const frame = vFrame({
    items: [
      ...keys.map((k, i) => ({ label: NAMES[k] || k, color: S(i + 1) })),
      { label: saltLabel, color: INK, shape: 'hollow' },
    ],
    plotH: 280,
    left: 56,
    d0: 0,
    d1: 180,
    ticks: [0, 30, 60, 90, 120, 150, 180],
    title: 'Protein delivered, kt a year',
  });
  const { parts, y, base, left, right } = frame;
  const scens = uniq(rows.map((r) => r.scenario));
  const years = uniq(rows.map((r) => r.year));
  const gapSlots = 0.7;
  const nSlots = rows.length + gapSlots * (scens.length - 1);
  const slotW = (right - left) / nSlots;
  const bw = 34;
  let labelledSalt = false;
  rows.forEach((r, i) => {
    const si = scens.indexOf(r.scenario);
    const cx = left + slotW * (i + si * gapSlots + 0.5);
    const total = keys.reduce((a, k) => a + num(r[k]), 0);
    const segs = keys.map((k, ki) => ({
      v: num(r[k]),
      fill: S(ki + 1),
      tip: [
        `${r.scenario} ${r.year}, ${NAMES[k] || k}: ${fmtStr(r[k])} kt of protein`,
        `All routes: ${fmtNum(total, 2)} kt`,
      ],
    }));
    parts.push(stackV(y, cx - bw / 2, bw, segs));
    const sy = y(num(r.salt_food_kt));
    const ty = y(total) - 11;
    const clash = Math.abs(ty - sy) < 14;
    parts.push(
      text(cx, clash ? Math.min(ty, sy - 12) - 4 : ty, fmtNum(total, 1), {
        size: 12,
        fill: INK,
        anchor: 'middle',
        weight: 600,
        halo: true,
      }),
    );
    parts.push(
      mark(
        [
          `${saltLabel}, ${r.year}: ${fmtStr(r.salt_food_kt)} kt`,
          `${r.scenario} delivers ${fmtNum(total, 1)} kt`,
        ],
        ring(cx, sy, 5, INK) + hitCircle(cx, sy, 10),
      ),
    );
    if (!labelledSalt && r.year === years[years.length - 1]) {
      labelledSalt = true;
      parts.push(text(cx + 10, sy, saltLabel, { size: 12, fill: INK, halo: true }));
    }
    parts.push(text(cx, base + 16, r.year, { size: 12, fill: INK, anchor: 'middle' }));
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  scens.forEach((s, si) => {
    const idx = rows.map((r, i) => (r.scenario === s ? i : -1)).filter((i) => i >= 0);
    const x0 = left + slotW * (idx[0] + si * gapSlots) + 4;
    const x1 = left + slotW * (idx[idx.length - 1] + si * gapSlots + 1) - 4;
    const by = base + 32;
    parts.push(
      line(x0, by, x1, by, MUTED, 1) +
        line(x0, by - 4, x0, by, MUTED, 1) +
        line(x1, by - 4, x1, by, MUTED, 1),
    );
    parts.push(
      text((x0 + x1) / 2, by + 13, SCEN[s] || s, { size: 12, fill: INK, anchor: 'middle' }),
    );
  });
  const nb = noteBlock(
    annText(spec, /not displaced meat/, 'Note: delivered protein is not displaced meat.'),
    0,
    base + 70,
    W - 8,
  );
  parts.push(nb.svg);
  const tbl = table(
    spec.title,
    [
      { key: 'scenario_year', label: 'Scenario and year' },
      ...keys.map((k) => ({ key: k, label: `${NAMES[k] || k} (kt)`, num: true })),
      {
        key: 'total',
        label: 'All routes (kt)',
        num: true,
        get: (r) =>
          fmtNum(
            keys.reduce((a, k) => a + num(r[k]), 0),
            2,
          ),
      },
      { key: 'salt_food_kt', label: 'S-ALT food assumption (kt)', num: true },
    ],
    rows,
  );
  return { body: parts.join(''), height: base + 70 + nb.h + 4, table: tbl };
}

export function displacementVsSalt(spec, D) {
  const rows = D.csv(spec.data.file);
  const SER = {
    d_drift_displaced_kt: SCEN['D-DRIFT'],
    d_bench_displaced_kt: SCEN['D-BENCH'],
    d_stretch_displaced_kt: SCEN['D-STRETCH'],
    salt_assumption_kt: 'S-ALT assumption (Part IV)',
    existing_chay_days_kt: 'Existing chay days, already in the baseline',
  };
  const keys = spec.encoding.y.slice(0, 8);
  const isChay = (k) => k === 'existing_chay_days_kt'; // annotation: hatched, "already in the baseline"
  const L = hLayout({
    legend: keys.map((k, i) => ({
      label: SER[k] || k,
      color: S(i + 1),
      shape: isChay(k) ? 'hatch' : undefined,
    })),
    rows: rows.map((r) => ({ label: r.year, bold: true, data: r })),
    labelW: 40,
    plotRight: W - 150,
    minRowH: keys.length * 15 + 16,
    makeScale: (l, r) => linear(0, 150, l, r),
    ticks: [0, 25, 50, 75, 100, 125, 150],
    fmtTick: fmtNum,
    axisTitle: 'Meat protein displaced, kt a year',
    drawRow: (r, i, ctx, y, h) =>
      hGroupedRow(ctx, y, h, {
        bh: 12,
        items: keys.map((k, ki) => ({
          x1: ctx.scale(num(r[k])),
          color: S(ki + 1),
          hatch: isChay(k),
          bold: /bench|stretch|salt/.test(k),
          label: isChay(k) ? `${fmtStr(r[k])} kt, already in the baseline` : `${fmtStr(r[k])} kt`,
          tip: [`${r.year}, ${SER[k] || k}: ${fmtStr(r[k])} kt of meat protein`],
        })),
      }),
  });
  const tbl = table(
    spec.title,
    [
      { key: 'year', label: 'Year' },
      ...keys.map((k) => ({ key: k, label: `${SER[k] || k} (kt)`, num: true })),
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function demandSensitivity(spec, D) {
  // Assumption codes decoded from app-d8-demand-model (D8.5) and data/demand_assumptions.csv.
  const NAMES = {
    r2_keeper_share: 'Share of people who keep lunar chay days',
    r3_processed_share: 'Share of meat eaten as processed meat products',
    r2_compensation: 'Compensation: meat not eaten on added chay days eaten on other days',
    r4_net_displacement: 'Institutions: meat removed per unit of protein supplied',
    r4_canteen_meals_bn: 'Factory shift meals a year (billion)',
    r3_net_displacement: 'Hybrids: meat removed per unit of protein replaced',
    r4_protein_per_meal_g: 'Protein in the protein dish of a meal (g)',
    r5_net_displacement: 'Household analogues: meat removed per unit of analogue protein',
    r5_kg_product_per_buyer: 'Product a year per regular buyer (kg)',
    r4_school_meals_bn: 'School lunches a year (billion)',
  };
  const swing = (r) =>
    Math.max(
      Math.abs(num(r.displaced_at_low_kt) - num(r.central_kt)),
      Math.abs(num(r.displaced_at_high_kt) - num(r.central_kt)),
    );
  const rows = D.csv(spec.data.file).sort((a, b) => swing(b) - swing(a));
  const central = num(rows[0].central_kt);
  const saltNote = annText(
    spec,
    /off the scale/,
    'S-ALT assumes 39.3 kt in 2035, off the scale.',
  ).replace(/\.$/, '');
  const L = hLayout({
    legend: [
      { label: 'Assumption at its low value', color: S(1) },
      { label: 'Assumption at its high value', color: S(2) },
    ],
    head: 42,
    rows: rows.map((r, i) => ({
      label: NAMES[r.assumption] || r.assumption,
      bold: i < 3,
      data: r,
    })),
    labelW: 270,
    plotLeft: 290,
    plotRight: W - 44,
    minRowH: 34,
    makeScale: (l, r) => linear(1.8, 3.1, l, r),
    ticks: [1.8, 2, 2.2, 2.4, 2.6, 2.8, 3],
    fmtTick: (t) => fmtNum(t, 1),
    axisTitle: 'Meat protein displaced in D-BENCH 2035, kt',
    drawRow: (r, i, ctx, y, h) => {
      const bh = 18;
      const by = y + (h - bh) / 2;
      const xc = ctx.scale(central);
      const out = [];
      for (const [key, vkey, col, name] of [
        ['displaced_at_low_kt', 'low_value', S(1), 'Low value'],
        ['displaced_at_high_kt', 'high_value', S(2), 'High value'],
      ]) {
        const v = num(r[key]);
        const x = ctx.scale(v);
        const tip = [
          `${NAMES[r.assumption] || r.assumption}, ${name.toLowerCase()} (${fmtStr(r[vkey])}): ${fmtStr(r[key])} kt`,
          `Central: ${fmtStr(r.central_kt)} kt`,
          `Model parameter: ${r.assumption}`,
          `Low value: ${fmtStr(r.low_value)}; high value: ${fmtStr(r.high_value)}`,
        ];
        out.push(
          mark(tip, hbar(xc, x, by, bh, col) + hit(Math.min(x, xc), y, Math.abs(x - xc) + 2, h)),
        );
        const left = v < central;
        out.push(
          text(left ? x - 5 : x + 5, y + h / 2, fmtStr(r[key]), {
            size: 12,
            fill: INK,
            anchor: left ? 'end' : 'start',
            weight: i < 3 ? 600 : undefined,
            halo: true,
          }),
        );
      }
      return out.join('');
    },
    over: (ctx) => {
      const x = ctx.scale(central);
      const ay = ctx.top - 36;
      const ax = ctx.plotRight + 30;
      return (
        line(x, ctx.top - 8, x, ctx.bottom, INK, 1.5) +
        text(x, ctx.top - 16, `D-BENCH 2035: ${fmtNum(central)} kt`, {
          size: 12,
          fill: INK,
          anchor: 'middle',
        }) +
        // off-scale note with an arrow pointing right (annotation)
        text(ax - 14, ay, saltNote, {
          size: 12,
          fill: INK,
          anchor: 'end',
          weight: 600,
          halo: true,
        }) +
        line(ax - 12, ay, ax, ay, INK, 1.5) +
        `<path d="M${R(ax)},${R(ay - 4)}L${R(ax + 6)},${R(ay)}L${R(ax)},${R(ay + 4)}Z" style="fill:${INK}"/>`
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      {
        key: 'assumption',
        label: 'Assumption',
        get: (r) => `${NAMES[r.assumption] || r.assumption} (${r.assumption})`,
      },
      { key: 'low_value', label: 'Low value', num: true },
      { key: 'high_value', label: 'High value', num: true },
      { key: 'displaced_at_low_kt', label: 'Displaced at low (kt)', num: true },
      { key: 'displaced_at_high_kt', label: 'Displaced at high (kt)', num: true },
      { key: 'central_kt', label: 'Central (kt)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function actorCoverage(spec, D) {
  const rows = D.csv(spec.data.file);
  const ST = {
    answered: 'Answered',
    partly: 'Partly answered',
    not_answered: 'Not answered',
    out_of_scope: 'Out of scope',
  };
  const keys = spec.encoding.x.slice(0, 8);
  const totals = rows.map((r) => keys.reduce((a, k) => a + num(r[k]), 0));
  const max = Math.max(...totals);
  const dmax = Math.ceil(max / 5) * 5;
  const L = hLayout({
    legend: keys.map((k, i) => ({ label: ST[k] || cap(k), color: S(i + 1) })),
    rows: rows.map((r) => ({ label: r.group, data: r })),
    labelW: 190,
    plotRight: W - 110,
    minRowH: 44,
    makeScale: (l, r) => linear(0, dmax, l, r),
    ticks: Array.from({ length: dmax / 5 + 1 }, (_, i) => i * 5),
    fmtTick: fmtNum,
    axisTitle: 'Number of actor questions',
    foot: [annText(spec, /answered in full/, '')].filter(Boolean),
    drawRow: (r, i, ctx, y, h) => {
      const segs = keys.map((k, ki) => ({
        v: num(r[k]),
        fill: S(ki + 1),
        label: ki + 1 === 4 || ki + 1 === 6 ? '' : String(r[k]), // no inside labels on light fills
        tip: [
          `${r.group}, ${(ST[k] || k).toLowerCase()}: ${r[k]} questions`,
          `All questions: ${totals[i]}`,
        ],
      }));
      const bh = 24;
      return (
        stackH(ctx.scale, ctx.plotLeft, y + (h - bh) / 2, bh, segs) +
        endLabel(ctx.scale(totals[i]), y + h / 2, `${totals[i]} questions`, W, { size: 13 })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'group', label: 'Actor group' },
      ...keys.map((k) => ({ key: k, label: ST[k] || cap(k), num: true })),
      {
        key: 'total',
        label: 'Total',
        num: true,
        get: (r) => String(keys.reduce((a, k) => a + num(r[k]), 0)),
      },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function canteenDishMix(spec, D) {
  const rows = D.csv(spec.data.file);
  const isHL = (r) => /^Tofu/i.test(r.lead_protein); // annotation: tofu leads 8.7% of dishes
  const L = hLayout({
    rows: rows.map((r) => ({ label: r.lead_protein, bold: isHL(r), data: r })),
    labelW: 110,
    plotRight: W - 70,
    minRowH: 28,
    makeScale: (l, r) => linear(0, 35, l, r),
    ticks: [0, 5, 10, 15, 20, 25, 30, 35],
    fmtTick: (t) => `${t}%`,
    axisTitle: 'Share of protein dishes (%)',
    foot: [annText(spec, /Tofu leads/, '')].filter(Boolean),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 18;
      const x1 = ctx.scale(num(r.share_pct));
      return (
        mark(
          [`${r.lead_protein}: ${pct(r.share_pct)} of protein dishes`],
          hbar(ctx.plotLeft, x1, y + (h - bh) / 2, bh, isHL(r) ? HIGHLIGHT : DIM) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) +
        endLabel(x1, y + h / 2, pct(r.share_pct), W, {
          size: 13,
          weight: isHL(r) ? 600 : undefined,
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'lead_protein', label: 'Lead protein' },
      { key: 'share_pct', label: 'Share of protein dishes (%)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function funderUnits(spec, D) {
  const rows = D.csv(spec.data.file);
  const SP = {
    poultry_spared: 'Poultry',
    pigs_spared: 'Pigs',
    cattle_and_buffalo_spared: 'Cattle and buffalo',
  };
  const keys = spec.encoding.y.slice(0, 8);
  const sec = spec.encoding.secondary; // CO2e avoided: a labelled column, not a second axis
  const totals = rows.map((r) => keys.reduce((a, k) => a + num(r[k]), 0));
  const colX = W; // right-aligned CO2e column
  const L = hLayout({
    legend: keys.map((k, i) => ({ label: SP[k] || cap(k), color: S(i + 1) })),
    head: 18,
    rows: rows.map((r) => ({ label: r.route, data: r })),
    labelW: 150,
    plotRight: W - 200,
    minRowH: 40,
    makeScale: (l, r) => linear(0, 1400000, l, r),
    ticks: [0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000],
    fmtTick: (t) => fmtNum(t / 1e6, 1),
    axisTitle: 'Animals spared a year, million',
    under: (ctx) =>
      text(colX, ctx.top - 12, 'CO2e avoided', { size: 12, fill: INK, anchor: 'end', weight: 600 }),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 22;
      const segs = keys.map((k, ki) => ({
        v: num(r[k]),
        fill: S(ki + 1),
        label: '',
        tip: [
          `${r.route}, ${(SP[k] || k).toLowerCase()}: ${fmtStr(r[k])} spared a year`,
          `All animals: ${fmtNum(totals[i])}`,
        ],
      }));
      const t = totals[i];
      const co2 = sec && r[sec] !== undefined ? `${fmtStr(r[sec])} t` : '';
      const co2Svg = co2
        ? mark(
            [`${r.route}: ${fmtStr(r[sec])} t CO2e avoided a year`],
            text(colX, y + h / 2, co2, { size: 13, fill: INK, anchor: 'end' }) +
              hit(colX - 80, y + 4, 80, h - 8),
          )
        : '';
      if (t === 0) {
        // annotation: import substitution delivers the most protein but spares no animals
        const ann = annText(spec, /spares no animals/, 'Spares no animals.');
        return (
          mark(
            [`${r.route}: no animals spared`],
            rect(ctx.plotLeft, y + (h - bh) / 2, 2, bh, MUTED),
          ) +
          text(
            ctx.plotLeft + 8,
            y + h / 2,
            /^Import substitution/.test(ann)
              ? 'None: delivers the most protein but spares no animals'
              : ann,
            {
              size: 12,
              fill: INK,
              weight: 600,
            },
          ) +
          co2Svg
        );
      }
      return (
        stackH(ctx.scale, ctx.plotLeft, y + (h - bh) / 2, bh, segs) +
        endLabel(ctx.scale(t), y + h / 2, `${fmtNum(t / 1e6, 2)} million`, ctx.plotRight + 110, {
          size: 13,
        }) +
        co2Svg
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'route', label: 'Route' },
      ...keys.map((k) => ({ key: k, label: `${SP[k] || k} spared`, num: true })),
      {
        key: 'total',
        label: 'All animals spared',
        num: true,
        get: (r) => String(keys.reduce((a, k) => a + num(r[k]), 0)),
      },
      ...(sec ? [{ key: sec, label: 'CO2e avoided (t)', num: true }] : []),
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function proteinFootprints(spec, D) {
  const rows = D.csv(spec.data.file);
  const groups = uniq(rows.map((r) => r.group));
  const color = (g) => S(groups.indexOf(g) + 1);
  const L = hLayout({
    legend: groups.map((g) => ({ label: `${cap(g)} foods`, color: color(g) })),
    rows: rows.map((r) => ({ label: r.food, data: r })),
    labelW: 150,
    plotRight: W - 60,
    minRowH: 26,
    makeScale: (l, r) => linear(0, 50, l, r),
    ticks: [0, 10, 20, 30, 40, 50],
    fmtTick: fmtNum,
    axisTitle: 'kg CO2e per 100 g of protein (global means)',
    foot: [annText(spec, /Global means/, '')].filter(Boolean),
    drawRow: (r, i, ctx, y, h) => {
      const bh = 16;
      const x1 = ctx.scale(num(r.ghg_kg_co2e_per_100g_protein));
      const tip = [
        `${r.food}: ${fmtStr(r.ghg_kg_co2e_per_100g_protein)} kg CO2e per 100 g of protein`,
        `Land use: ${fmtStr(r.land_m2_per_100g_protein)} m2 per 100 g of protein`,
      ];
      return (
        mark(
          tip,
          hbar(ctx.plotLeft, x1, y + (h - bh) / 2, bh, color(r.group)) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) + endLabel(x1, y + h / 2, fmtStr(r.ghg_kg_co2e_per_100g_protein), W, { size: 12 })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'food', label: 'Food' },
      { key: 'group', label: 'Group' },
      { key: 'ghg_kg_co2e_per_100g_protein', label: 'kg CO2e per 100 g of protein', num: true },
      { key: 'land_m2_per_100g_protein', label: 'Land, m2 per 100 g of protein', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function altproteinInvestmentByYear(spec, D) {
  const rows = D.csv(spec.data.file);
  const NAMES = {
    plant_based_usd_m: 'Plant-based',
    fermentation_usd_m: 'Fermentation',
    cultivated_usd_m: 'Cultivated',
  };
  const keys = spec.encoding.y.slice(0, 8);
  const frame = vFrame({
    items: keys.map((k, i) => ({ label: NAMES[k] || k, color: S(i + 1) })),
    plotH: 260,
    left: 56,
    d0: 0,
    d1: 8000,
    ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
    title: 'USD million',
  });
  const { parts, y, base, left, right } = frame;
  const gw = (right - left) / rows.length;
  const bw = 40;
  const isHalf = (p) => /H1/.test(p);
  let peak = null;
  rows.forEach((r, i) => {
    const cx = left + gw * (i + 0.5);
    const total =
      r.total_usd_m !== undefined && r.total_usd_m !== ''
        ? num(r.total_usd_m)
        : keys.reduce((a, k) => a + num(r[k]), 0);
    const segs = keys.map((k, ki) => ({
      v: num(r[k]),
      fill: S(ki + 1),
      tip: [
        `${r.period}, ${NAMES[k] || k}: USD ${fmtStr(r[k])} million`,
        `Total: USD ${fmtNum(total)} million`,
      ],
    }));
    parts.push(stackV(y, cx - bw / 2, bw, segs));
    parts.push(
      text(cx, y(total) - 11, fmtNum(total), {
        size: 12,
        fill: INK,
        anchor: 'middle',
        weight: 600,
      }),
    );
    const lab = isHalf(r.period) ? [r.period.replace(/\s*H1/, ''), 'first half'] : [r.period];
    parts.push(textLines(cx, base + 16, lab, { size: 12, fill: INK, anchor: 'middle', lineH: 14 }));
    if (!peak || total > peak.total) peak = { cx, total, period: r.period };
  });
  parts.push(line(left, base, right, base, AXIS, 1));
  // annotation: 2021 peak
  const peakAnn = annText(spec, /peak/, '');
  if (peak && peakAnn) {
    const nb = noteBlock(peakAnn, peak.cx + bw / 2 + 14, y(7000), 300, { fill: INK });
    parts.push(nb.svg);
    parts.push(line(peak.cx + bw / 2 + 4, y(peak.total), peak.cx + bw / 2 + 10, y(7000), MUTED, 1));
  }
  // annotation: first half of 2026 is half a year
  const half = annText(spec, /half a year/, '');
  let h = base + 42;
  if (half) {
    const nb = noteBlock(`Note: ${half.charAt(0).toLowerCase()}${half.slice(1)}`, 0, h + 4, W - 8);
    parts.push(nb.svg);
    h += nb.h + 8;
  }
  const tbl = table(
    spec.title,
    [
      { key: 'period', label: 'Period' },
      ...keys.map((k) => ({ key: k, label: `${NAMES[k] || k} (USD million)`, num: true })),
      { key: 'total_usd_m', label: 'Total (USD million)', num: true },
    ],
    rows,
  );
  return { body: parts.join(''), height: h, table: tbl };
}
