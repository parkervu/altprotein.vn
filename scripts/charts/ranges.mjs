// Range bars, dot-range, gantt and vertical range charts.
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
  rangeBar,
  vRangeBar,
  hit,
  hitCircle,
  mark,
  dot,
  tipFields,
  legend,
  wrap,
  textWidth,
  yAxis,
  table,
  breakMark,
  circle,
} from './lib.mjs';
import { hLayout, endLabel } from './layout.mjs';

const uniq = (arr) => [...new Set(arr)];
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);
const rangeTxt = (lo, hi) => (lo === hi ? fmtStr(lo) : `${fmtStr(lo)} to ${fmtStr(hi)}`);

/** Bar from baseline to lo (solid) then a lighter extension from lo to hi. */
function solidPlusRange(scale, x0, lo, hi, y, h, fill) {
  const xl = scale(lo);
  const xh = scale(hi);
  if (lo === hi) return hbar(x0, xl, y, h, fill);
  const solid = lo > 0 ? rect(x0, y, xl - x0, h, fill) : '';
  return solid + hbar(xl, xh, y, h, fill, ';fill-opacity:0.4');
}

// ---------------------------------------------------------------------------
export function feedstockVolumes(spec, D) {
  const rows = D.csv(spec.data.file);
  const isRef = (r) => /benchmark/i.test(r.stream); // annotation: soybean meal fed as a reference bar
  const notes = uniq(rows.filter((r) => !isRef(r)).map((r) => r.protein_note));
  const color = (r) => S(notes.indexOf(r.protein_note) + 1);
  const DMAX = 16;
  const refRow = rows.find(isRef);
  const refV = num(refRow.volume_mt_high);
  const L = hLayout({
    legend: [
      { label: 'Protein content:', shape: 'none' },
      ...notes.map((n) => ({ label: cap(n), color: S(notes.indexOf(n) + 1) })),
      { label: 'Soybean meal fed (reference)', color: INK, shape: 'outline' },
      { label: 'Lighter segment: range, low to high', shape: 'none' },
    ],
    head: 22,
    rows: rows.map((r) => ({ label: r.stream, bold: isRef(r), data: r })),
    labelW: 230,
    plotRight: W - 78,
    minRowH: 27,
    makeScale: (l, r) => linear(0, DMAX, l, r),
    ticks: [0, 2, 4, 6, 8, 10, 12, 14],
    fmtTick: fmtNum,
    axisTitle: 'Million tonnes a year (Mt)',
    drawRow: (r, i, ctx, y, h) => {
      const lo = num(r.volume_mt_low);
      const hi = num(r.volume_mt_high);
      const bh = 16;
      const by = y + (h - bh) / 2;
      const tip = [
        `${r.stream}: ${rangeTxt(r.volume_mt_low, r.volume_mt_high)} Mt`,
        `Protein: ${r.protein_note}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const lab = `${rangeTxt(r.volume_mt_low, r.volume_mt_high)} Mt`;
      if (isRef(r)) {
        const x1 = ctx.scale(hi);
        const shape = hbar(
          ctx.plotLeft + 0.75,
          x1,
          by + 0.75,
          bh - 1.5,
          'none',
          `;stroke:${INK};stroke-width:1.5`,
        );
        return (
          mark(tip, shape + hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h)) +
          endLabel(x1, y + h / 2, lab, W, { size: 12, weight: 600 })
        );
      }
      if (hi > DMAX) {
        // clipped bar with a break marker (annotation: clip paddy with a break marker)
        const xe = ctx.scale(DMAX) + 6;
        const shape =
          hbar(ctx.plotLeft, xe, by, bh, color(r)) +
          breakMark(ctx.scale(DMAX) - 12, y + h / 2, bh + 4);
        return (
          mark(tip, shape + hit(ctx.plotLeft, y, xe - ctx.plotLeft, h)) +
          text(xe + 6, y + h / 2, lab, { size: 12, fill: INK })
        );
      }
      const shape = solidPlusRange(ctx.scale, ctx.plotLeft, lo, hi, by, bh, color(r));
      const x1 = Math.max(ctx.scale(hi), ctx.plotLeft + 2);
      return (
        mark(tip, shape + hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h)) +
        endLabel(x1, y + h / 2, lab, W, { size: 12 })
      );
    },
    under: (ctx) => {
      const x = ctx.scale(refV);
      return (
        line(x, ctx.top - 8, x, ctx.bottom, INK, 1) +
        text(x, ctx.top - 16, `Soybean meal fed, ${fmtStr(refRow.volume_mt_high)} Mt`, {
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
      { key: 'stream', label: 'Stream' },
      { key: 'volume_mt_low', label: 'Low (Mt)', num: true },
      { key: 'volume_mt_high', label: 'High (Mt)', num: true },
      { key: 'basis', label: 'Basis' },
      { key: 'year', label: 'Year' },
      { key: 'protein_note', label: 'Protein' },
      { key: 'confidence', label: 'Confidence' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function priceToBeat(spec, D) {
  const rows = D.csv(spec.data.file);
  const kinds = uniq(rows.map((r) => r.kind));
  const color = (k) => S(kinds.indexOf(k) + 1);
  const L = hLayout({
    legend: kinds.map((k) => ({ label: cap(k), color: color(k) })),
    rows: rows.map((r) => ({ label: r.item, data: r })),
    labelW: 250,
    plotRight: W - 20,
    minRowH: 44,
    makeScale: (l, r) => linear(0, 15000, l, r),
    ticks: [0, 3000, 6000, 9000, 12000, 15000],
    fmtTick: fmtNum,
    axisTitle: 'USD per tonne of protein',
    drawRow: (r, i, ctx, y, h) => {
      const lo = num(r.usd_per_t_protein_low);
      const hi = num(r.usd_per_t_protein_high);
      const bh = 20;
      let x0 = ctx.scale(lo);
      let x1 = ctx.scale(hi);
      if (x1 - x0 < 6) {
        const c = (x0 + x1) / 2;
        x0 = c - 3;
        x1 = c + 3;
      }
      const tip = [
        `${r.item}: USD ${rangeTxt(r.usd_per_t_protein_low, r.usd_per_t_protein_high)} per t of protein`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const lab = `USD ${rangeTxt(r.usd_per_t_protein_low, r.usd_per_t_protein_high)}`;
      const lw = textWidth(lab, 12);
      const labSvg =
        x1 + 6 + lw <= W
          ? text(x1 + 6, y + h / 2, lab, { size: 12, fill: INK })
          : text(x0 - 6, y + h / 2, lab, { size: 12, fill: INK, anchor: 'end' });
      return (
        mark(
          tip,
          rangeBar(x0, x1, y + (h - bh) / 2, bh, color(r.kind)) + hit(x0 - 4, y, x1 - x0 + 8, h),
        ) + labSvg
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'item', label: 'Item' },
      { key: 'kind', label: 'Kind' },
      { key: 'usd_per_t_protein_low', label: 'Low (USD per t of protein)', num: true },
      { key: 'usd_per_t_protein_high', label: 'High (USD per t of protein)', num: true },
      { key: 'note', label: 'Note' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function capexPerTonne(spec, D) {
  const rows = D.csv(spec.data.file);
  const L = hLayout({
    legend: [
      { label: 'Capex per annual tonne', color: S(1) },
      { label: 'Lighter segment: range, low to high', shape: 'none' },
    ],
    rows: rows.map((r) => ({ label: r.case, data: r })),
    labelW: 250,
    plotRight: W - 130,
    minRowH: 40,
    makeScale: (l, r) => logScale(2000, 200000, l, r),
    ticks: [2000, 5000, 10000, 20000, 50000, 100000],
    fmtTick: fmtNum,
    axisTitle: 'USD per tonne of annual capacity (log scale)',
    drawRow: (r, i, ctx, y, h) => {
      const lo = num(r.usd_per_annual_t_low);
      const hi = num(r.usd_per_annual_t_high);
      const bh = 20;
      const tip = [
        `${r.case}: USD ${rangeTxt(r.usd_per_annual_t_low, r.usd_per_annual_t_high)} per annual t`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const x1 = ctx.scale(hi);
      return (
        mark(
          tip,
          solidPlusRange(ctx.scale, ctx.plotLeft, lo, hi, y + (h - bh) / 2, bh, S(1)) +
            hit(ctx.plotLeft, y, x1 - ctx.plotLeft + 4, h),
        ) +
        endLabel(
          x1,
          y + h / 2,
          `USD ${rangeTxt(r.usd_per_annual_t_low, r.usd_per_annual_t_high)}`,
          W,
          { size: 12 },
        )
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'case', label: 'Case' },
      { key: 'usd_per_annual_t_low', label: 'Low (USD per annual t)', num: true },
      { key: 'usd_per_annual_t_high', label: 'High (USD per annual t)', num: true },
      { key: 'basis', label: 'Basis' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function costPaths2050(spec, D) {
  const rows = D.csv(spec.data.file);
  const refs = rows.filter((r) => /^Reference:/.test(r.series));
  const data = rows.filter((r) => !/^Reference:/.test(r.series));
  const series = uniq(data.map((r) => r.series));
  const fishmeal = refs.find((r) => /fishmeal/i.test(r.series));
  const sbm = refs.find((r) => /soybean/i.test(r.series));
  const floor = refs.find((r) => /floor/i.test(r.series));
  const lg = legend(
    [
      ...series.map((s, i) => ({ label: s, color: S(i + 1) })),
      { label: cap(fishmeal.series.replace(/^Reference: /, '')), color: BAND, shape: 'band' },
      { label: cap(sbm.series.replace(/^Reference: /, '')), color: INK, shape: 'line' },
      { label: cap(floor.series.replace(/^Reference: /, '')), color: INK, shape: 'dotted' },
    ],
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const top = lg.height + 46;
  const base = top + 320;
  const left = 50;
  const right = W - 150;
  const y = linear(0, 13, base, top);
  const x = linear(2027, 2052.5, left, right);
  parts.push(
    yAxis(y, [0, 2, 4, 6, 8, 10, 12], left, right, fmtNum, {
      title: 'USD per kg of protein',
      titleX: left - 42,
      titleY: top - 26,
    }),
  );
  // reference band and lines (annotations)
  const fy0 = y(num(fishmeal.usd_per_kg_protein_low));
  const fy1 = y(num(fishmeal.usd_per_kg_protein_high));
  parts.push(
    mark(
      [
        `${fishmeal.series.replace(/^Reference: /, '')}: USD ${rangeTxt(fishmeal.usd_per_kg_protein_low, fishmeal.usd_per_kg_protein_high)} per kg`,
        ...tipFields(fishmeal, spec.encoding.tooltip),
      ],
      rect(left, fy1, right - left, fy0 - fy1, BAND),
    ),
  );
  parts.push(
    text(
      right + 8,
      (fy0 + fy1) / 2,
      `Fishmeal ${rangeTxt(fishmeal.usd_per_kg_protein_low, fishmeal.usd_per_kg_protein_high)}`,
      { size: 12, fill: INK },
    ),
  );
  const sy = y(num(sbm.usd_per_kg_protein_low));
  parts.push(
    mark(
      [
        `${sbm.series.replace(/^Reference: /, '')}: USD ${fmtStr(sbm.usd_per_kg_protein_low)} per kg`,
        ...tipFields(sbm, spec.encoding.tooltip),
      ],
      line(left, sy, right, sy, INK, 1.5) + hit(left, sy - 5, right - left, 10),
    ),
  );
  parts.push(
    text(right + 8, sy, `Soybean meal ${fmtStr(sbm.usd_per_kg_protein_low)}`, {
      size: 12,
      fill: INK,
    }),
  );
  const ly = y(num(floor.usd_per_kg_protein_low));
  parts.push(
    mark(
      [
        `${floor.series.replace(/^Reference: /, '')}: USD ${fmtStr(floor.usd_per_kg_protein_low)} per kg`,
        ...tipFields(floor, spec.encoding.tooltip),
      ],
      line(left, ly, right, ly, INK, 1.5, ';stroke-dasharray:2 3;stroke-linecap:round') +
        hit(left, ly - 5, right - left, 10),
    ),
  );
  parts.push(
    text(right + 8, ly, `Fungal floor ${fmtStr(floor.usd_per_kg_protein_low)}`, {
      size: 12,
      fill: INK,
    }),
  );
  // bars
  const bw = 26;
  const years = uniq(data.map((r) => num(r.year))).sort((a, b) => a - b);
  for (const r of data) {
    const si = series.indexOf(r.series);
    const cx = x(num(r.year)) + (si - 1) * (bw + 2);
    const lo = num(r.usd_per_kg_protein_low);
    const hi = num(r.usd_per_kg_protein_high);
    const tip = [
      `${r.series}, ${r.year}: USD ${rangeTxt(r.usd_per_kg_protein_low, r.usd_per_kg_protein_high)} per kg of protein`,
      ...tipFields(r, spec.encoding.tooltip),
    ];
    parts.push(
      mark(
        tip,
        vRangeBar(cx - bw / 2, bw, y(lo), y(hi), S(si + 1)) +
          hit(cx - bw / 2 - 1, y(hi) - 16, bw + 2, y(lo) - y(hi) + 32),
      ),
    );
    parts.push(
      text(cx, y(hi) - 9, fmtStr(r.usd_per_kg_protein_high), {
        size: 12,
        fill: INK,
        anchor: 'middle',
        halo: true,
      }),
    );
    parts.push(
      text(cx, y(lo) + 10, fmtStr(r.usd_per_kg_protein_low), {
        size: 12,
        fill: INK,
        anchor: 'middle',
        halo: true,
      }),
    );
  }
  parts.push(line(left, base, right, base, AXIS, 1));
  for (const yr of years)
    parts.push(text(x(yr), base + 16, String(yr), { size: 13, fill: INK, anchor: 'middle' }));
  // annotation label
  const ann = (spec.annotations || []).find((a) => /^Label:/.test(a));
  let yy = base + 42;
  if (ann) {
    const t = ann.replace(/^Label:\s*"?/, '').replace(/"\.?$/, '');
    const txt = t.charAt(0).toUpperCase() + t.slice(1) + '.';
    const lines = wrap(txt, W - 8, 13);
    parts.push(textLines(0, yy, lines, { size: 13, fill: INK, lineH: 17 }));
    yy += lines.length * 17;
  }
  const tbl = table(
    spec.title,
    [
      { key: 'series', label: 'Series' },
      { key: 'year', label: 'Year' },
      { key: 'usd_per_kg_protein_low', label: 'Low (USD per kg of protein)', num: true },
      { key: 'usd_per_kg_protein_high', label: 'High (USD per kg of protein)', num: true },
      { key: 'type', label: 'Type' },
      { key: 'note', label: 'Note' },
    ],
    rows,
  );
  return { body: parts.join(''), height: yy + 4, table: tbl };
}

// ---------------------------------------------------------------------------
export function retailArchetypes(spec, D) {
  const rows = D.csv(spec.data.file)
    .filter((r) => r.count !== '') // spec filter: count is not empty
    .sort((a, b) => num(b.median) - num(a.median));
  const label = (s) => s.replace(/(\d)-(\d)/g, '$1 to $2');
  const rOf = (c) => 4 + 1.6 * Math.sqrt(num(c));
  const L = hLayout({
    legend: [
      { label: 'Median', color: S(1), shape: 'dot' },
      { label: 'Lowest to highest', color: MUTED, shape: 'line' },
      { label: 'Dot size: products with a protein value (1 to 14)', shape: 'none' },
    ],
    head: 24,
    rows: rows.map((r) => ({ label: label(r.archetype), data: r })),
    labelW: 280,
    labelSize: 12.5,
    plotRight: W - 60,
    minRowH: 32,
    makeScale: (l, r) => linear(0, 70, l, r),
    ticks: [0, 10, 20, 30, 40, 50, 60, 70],
    fmtTick: fmtNum,
    axisTitle: 'Label protein, g per 100 g',
    under: (ctx) => {
      const x10 = ctx.scale(10);
      const xm = ctx.scale(4.7);
      return (
        line(x10, ctx.top - 8, x10, ctx.bottom, INK, 1) +
        text(x10 + 4, ctx.top - 16, '10 g per 100 g', { size: 12, fill: INK }) +
        line(xm, ctx.top - 8, xm, ctx.bottom, INK, 1, ';stroke-dasharray:2 3') +
        text(xm - 4, ctx.top - 16, 'Overall median 4.7 g', { size: 12, fill: INK, anchor: 'end' })
      );
    },
    drawRow: (r, i, ctx, y, h) => {
      const cy = y + h / 2;
      const xa = ctx.scale(num(r.min));
      const xb = ctx.scale(num(r.max));
      const xm = ctx.scale(num(r.median));
      const rad = rOf(r.count);
      const tip = [
        `${label(r.archetype)}: median ${fmtStr(r.median)} g protein per 100 g`,
        `Range: ${rangeTxt(r.min, r.max)} g`,
        `Products with a protein value: ${r.count}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const whisk = xb - xa > 1 ? line(xa, cy, xb, cy, MUTED, 2, ';stroke-linecap:round') : '';
      return (
        mark(
          tip,
          whisk +
            dot(xm, cy, rad, S(1)) +
            hit(Math.min(xa, xm - 12), y, Math.max(xb - xa, 24) + 12, h),
        ) +
        text(Math.max(xb, xm + rad) + 8, cy, `${fmtStr(r.median)} g`, {
          size: 12,
          fill: INK,
          halo: true,
        })
      );
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'archetype', label: 'Archetype', fmt: (v) => label(v) },
      { key: 'count', label: 'Products with a protein value', num: true },
      { key: 'median', label: 'Median (g per 100 g)', num: true },
      { key: 'min', label: 'Lowest (g)', num: true },
      { key: 'max', label: 'Highest (g)', num: true },
      { key: 'n_sku', label: 'SKUs', num: true },
      { key: 'median_ppp', label: 'Median VND per 100 g of protein', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function playsHorizon(spec, D) {
  const idn = (id) => num(id.replace(/\D/g, ''));
  const rows = D.csv(spec.data.file)
    .filter((r) => r.type === 'play')
    .sort(
      (a, b) =>
        num(a.horizon_start_years) - num(b.horizon_start_years) ||
        num(a.horizon_end_years) - num(b.horizon_end_years) ||
        idn(a.play_id) - idn(b.play_id),
    );
  const segs = uniq(
    D.csv(spec.data.file)
      .filter((r) => r.type === 'play')
      .map((r) => r.segment),
  );
  const color = (s) => S(segs.indexOf(s) + 1);
  const L = hLayout({
    legend: segs.map((s) => ({ label: cap(s), color: color(s) })),
    rows: rows.map((r) => ({ label: `${r.play_id} ${r.name}`, data: r })),
    labelW: 270,
    plotRight: W - 16,
    minRowH: 30,
    makeScale: (l, r) => linear(0, 11, l, r),
    ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fmtTick: fmtNum,
    axisTitle: 'Years from now to first commercial result',
    drawRow: (r, i, ctx, y, h) => {
      const a = num(r.horizon_start_years);
      const b = num(r.horizon_end_years);
      const more = /or more/.test(r.horizon);
      const bh = 18;
      const by = y + (h - bh) / 2;
      const x0 = ctx.scale(a);
      const x1 = ctx.scale(b);
      let shape = rangeBar(x0, x1, by, bh, color(r.segment));
      if (more)
        shape += hbar(x1 - 4, ctx.scale(11), by, bh, color(r.segment), ';fill-opacity:0.35');
      const tip = [
        `${r.play_id} ${r.name}: ${r.horizon}`,
        `Segment: ${r.segment}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      const lab = r.horizon;
      const lw = textWidth(lab, 12);
      const xe = more ? ctx.scale(11) : x1;
      const labSvg =
        xe + 6 + lw <= W
          ? text(xe + 6, y + h / 2, lab, { size: 12, fill: INK })
          : text(x0 - 6, y + h / 2, lab, { size: 12, fill: INK, anchor: 'end' });
      return mark(tip, shape + hit(x0 - 2, y, xe - x0 + 4, h)) + labSvg;
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'play_id', label: 'Play' },
      { key: 'name', label: 'Name' },
      { key: 'segment', label: 'Segment' },
      { key: 'horizon', label: 'Horizon' },
      { key: 'horizon_start_years', label: 'Start (years)', num: true },
      { key: 'horizon_end_years', label: 'End (years)', num: true },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function frontierWindows(spec, D) {
  const rows = D.csv(spec.data.file);
  const fams = uniq(rows.map((r) => r.family));
  // Eight fixed slots: the first seven families in data order, the rest folded into "Other".
  const main = fams.slice(0, 7);
  const other = fams.slice(7);
  const color = (f) => (main.includes(f) ? S(main.indexOf(f) + 1) : S(8));
  const L = hLayout({
    legend: [
      ...main.map((f) => ({ label: f, color: color(f) })),
      ...(other.length
        ? [{ label: `Other (${other.join(', ').toLowerCase()})`, color: S(8) }]
        : []),
    ],
    rows: rows.map((r) => ({
      data: r,
      label: r.route,
      sub: `${r.family}; ${r.window_start === r.window_end ? `not before ${r.window_end}` : `${r.window_start} to ${r.window_end}`}`,
    })),
    labelW: 270,
    plotRight: W - 16,
    minRowH: 34,
    makeScale: (l, r) => linear(2026, 2050, l, r),
    ticks: [2026, 2030, 2035, 2040, 2045, 2050],
    fmtTick: (t) => String(t),
    axisTitle: 'Earliest plausible window (our estimate)',
    drawRow: (r, i, ctx, y, h) => {
      const a = num(r.window_start);
      const b = num(r.window_end);
      const bh = 16;
      const by = y + (h - bh) / 2;
      const tip = [
        `${r.route}: ${a === b ? `not before ${b}` : `${a} to ${b}`}`,
        `Family: ${r.family}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      if (a === b) {
        // annotation: draw the cell-free row as a single dot at 2050 with the label "not before 2050"
        const cx = ctx.scale(b) - 7;
        return (
          mark(tip, dot(cx, y + h / 2, 6, color(r.family)) + hitCircle(cx, y + h / 2, 12)) +
          text(cx - 14, y + h / 2, 'not before 2050', { size: 12, fill: INK, anchor: 'end' })
        );
      }
      const x0 = ctx.scale(a);
      const x1 = ctx.scale(b);
      return mark(tip, rangeBar(x0, x1, by, bh, color(r.family)) + hit(x0, y, x1 - x0, h));
    },
  });
  const tbl = table(
    spec.title,
    [
      { key: 'route', label: 'Route' },
      { key: 'family', label: 'Family' },
      { key: 'window_start', label: 'Window start' },
      { key: 'window_end', label: 'Window end' },
      { key: 'status_2026', label: 'Status in 2026' },
      { key: 'condition_to_open', label: 'Condition to open' },
      { key: 'related_plays', label: 'Related plays' },
    ],
    rows,
  );
  return { body: L.body, height: L.height, table: tbl };
}
