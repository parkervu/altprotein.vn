// Shared primitives for the build-time SVG chart renderer.
// Colours are CSS custom properties only; the site stylesheet defines them.

export const W = 720;

// ---------- colour tokens ----------
export const S = (i) => `var(--series-${i})`;
export const SEQ = (i) => `var(--seq-${i})`;
export const INK = 'var(--chart-ink)';
export const MUTED = 'var(--chart-muted)';
export const GRID = 'var(--chart-grid)';
export const AXIS = 'var(--chart-axis)';
export const SURFACE = 'var(--chart-surface)';
export const HIGHLIGHT = 'var(--chart-highlight)';
export const DIM = 'var(--chart-dim)';
export const BAND = 'var(--chart-band)';
export const ON_DARK = 'var(--chart-on-dark)';
/** Text colour for a label sitting on sequential step i (1..7). */
export const seqText = (i) => (i >= 5 ? ON_DARK : INK);

// ---------- escaping ----------
export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Guard for generated text: no em or en dashes anywhere. */
export function clean(s) {
  return String(s ?? '')
    .replace(/\s*[—]\s*/g, ', ')
    .replace(/(\d)\s*[–]\s*(\d)/g, '$1 to $2')
    .replace(/\s*[–]\s*/g, ', ');
}

// ---------- numbers ----------
/** Add thousands separators to a numeric string, keeping its decimals as given. */
export function fmtStr(v) {
  const s = String(v ?? '').trim();
  if (!/^-?\d+(\.\d+)?$/.test(s)) return s;
  const neg = s.startsWith('-');
  const [i, d] = s.replace('-', '').split('.');
  const ii = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '-' : '') + ii + (d !== undefined ? '.' + d : '');
}
/** Format a computed number with commas and a fixed number of decimals (default: trim). */
export function fmtNum(n, dp) {
  if (n === null || n === undefined || Number.isNaN(n)) return '';
  let s;
  if (dp === undefined) {
    s = String(Math.round(n * 1e6) / 1e6);
  } else s = n.toFixed(dp);
  return fmtStr(s);
}
export const num = (v) => (v === '' || v === null || v === undefined ? NaN : Number(String(v).replace(/,/g, '')));

// ---------- scales ----------
export function linear(d0, d1, r0, r1) {
  const f = (v) => r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);
  f.domain = [d0, d1];
  f.range = [r0, r1];
  return f;
}
export function logScale(d0, d1, r0, r1) {
  const l0 = Math.log10(d0);
  const l1 = Math.log10(d1);
  const f = (v) => r0 + ((Math.log10(Math.max(v, d0 / 10)) - l0) / (l1 - l0)) * (r1 - r0);
  f.domain = [d0, d1];
  f.range = [r0, r1];
  return f;
}
/** Piecewise-linear scale: segments [{d0,d1,r0,r1}] in order. */
export function piecewise(segs) {
  const f = (v) => {
    for (const s of [...segs].reverse()) if (v >= s.d0 && v <= s.d1) return s.r0 + ((v - s.d0) / (s.d1 - s.d0)) * (s.r1 - s.r0);
    if (v < segs[0].d0) return segs[0].r0;
    return segs[segs.length - 1].r1;
  };
  f.segs = segs;
  return f;
}
export function niceTicks(min, max, count = 5) {
  const span = max - min;
  const raw = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
  const out = [];
  for (let v = Math.ceil(min / step) * step; v <= max + step * 1e-9; v += step) out.push(Math.round(v * 1e9) / 1e9);
  return out;
}

// ---------- text measurement (approximate, for a humanist sans such as Work Sans) ----------
const NARROW = new Set("iljtf.,:;'!|()[] rI".split(''));
const WIDE = new Set('mwMW@%'.split(''));
export function textWidth(str, size = 12, weight = 400) {
  let w = 0;
  for (const ch of String(str)) {
    if (NARROW.has(ch)) w += ch === ' ' ? 0.28 : ch === 'r' || ch === 'f' || ch === 't' ? 0.38 : 0.3;
    else if (WIDE.has(ch)) w += 0.88;
    else if (/[A-Z]/.test(ch)) w += 0.68;
    else if (/[0-9]/.test(ch)) w += 0.6;
    else w += 0.57;
  }
  return w * size * (weight >= 600 ? 1.02 : 1) * 1.03;
}
export function wrap(str, maxW, size = 12, weight = 400) {
  const words = String(str).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (textWidth(t, size, weight) <= maxW * 0.97 || !cur) cur = t;
    else {
      lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// ---------- SVG primitives ----------
const r2 = (n) => Math.round(n * 100) / 100;
export const R = r2;

export function text(x, y, str, o = {}) {
  const { size = 12, fill = MUTED, anchor = 'start', weight, dy = '0.35em', italic, halo } = o;
  const a = [`x="${r2(x)}"`, `y="${r2(y)}"`, `font-size="${size}"`];
  if (anchor !== 'start') a.push(`text-anchor="${anchor}"`);
  if (dy) a.push(`dy="${dy}"`);
  if (weight) a.push(`font-weight="${weight}"`);
  if (italic) a.push('font-style="italic"');
  const h = halo ? `;stroke:${SURFACE};stroke-width:3px;stroke-linejoin:round;paint-order:stroke` : '';
  return `<text ${a.join(' ')} style="fill:${fill}${h}">${esc(clean(str))}</text>`;
}
/** Multi-line text; lines drawn from y (first baseline centre) with lineH spacing. */
export function textLines(x, y, lines, o = {}) {
  const { size = 12, fill = MUTED, anchor = 'start', weight, lineH = size * 1.25 } = o;
  const a = [`x="${r2(x)}"`, `y="${r2(y)}"`, `font-size="${size}"`];
  if (anchor !== 'start') a.push(`text-anchor="${anchor}"`);
  if (weight) a.push(`font-weight="${weight}"`);
  const spans = lines
    .map((l, i) => `<tspan x="${r2(x)}" dy="${i === 0 ? '0.35em' : r2(lineH)}">${esc(clean(l))}</tspan>`)
    .join('');
  return `<text ${a.join(' ')} style="fill:${fill}">${spans}</text>`;
}
export function line(x1, y1, x2, y2, stroke = GRID, w = 1, extra = '') {
  return `<line x1="${r2(x1)}" y1="${r2(y1)}" x2="${r2(x2)}" y2="${r2(y2)}" style="stroke:${stroke};stroke-width:${w}${extra}"/>`;
}
export function rect(x, y, w, h, fill, extra = '') {
  return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(Math.max(0, w))}" height="${r2(Math.max(0, h))}" style="fill:${fill}${extra}"/>`;
}
export function circle(cx, cy, r, fill, extra = '') {
  return `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(r)}" style="fill:${fill}${extra}"/>`;
}
/** Dot with a 2px surface ring. */
export function dot(cx, cy, r, fill) {
  return `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(r)}" style="fill:${fill};stroke:${SURFACE};stroke-width:2"/>`;
}
/** Transparent hit target. */
export function hit(x, y, w, h) {
  return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" style="fill:transparent"/>`;
}
export function hitCircle(cx, cy, r = 12) {
  return `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r}" style="fill:transparent"/>`;
}

/** Horizontal bar from x0 (baseline, square) to x1 (data end, 4px rounded). */
export function hbar(x0, x1, y, h, fill, extra = '') {
  const dir = x1 >= x0 ? 1 : -1;
  const len = Math.abs(x1 - x0);
  const r = Math.min(4, len, h / 2);
  if (len < 0.5) return '';
  const xe = x1;
  const xs = x0;
  const d =
    dir > 0
      ? `M${r2(xs)},${r2(y)}H${r2(xe - r)}Q${r2(xe)},${r2(y)} ${r2(xe)},${r2(y + r)}V${r2(y + h - r)}Q${r2(xe)},${r2(y + h)} ${r2(xe - r)},${r2(y + h)}H${r2(xs)}Z`
      : `M${r2(xs)},${r2(y)}H${r2(xe + r)}Q${r2(xe)},${r2(y)} ${r2(xe)},${r2(y + r)}V${r2(y + h - r)}Q${r2(xe)},${r2(y + h)} ${r2(xe + r)},${r2(y + h)}H${r2(xs)}Z`;
  return `<path d="${d}" style="fill:${fill}${extra}"/>`;
}
/** Vertical column from baseline y0 (square) up to y1 (data end, rounded). */
export function vbar(x, w, y0, y1, fill, extra = '') {
  const len = Math.abs(y0 - y1);
  if (len < 0.5) return '';
  const r = Math.min(4, len, w / 2);
  const top = Math.min(y0, y1);
  if (y1 <= y0) {
    const d = `M${r2(x)},${r2(y0)}V${r2(top + r)}Q${r2(x)},${r2(top)} ${r2(x + r)},${r2(top)}H${r2(x + w - r)}Q${r2(x + w)},${r2(top)} ${r2(x + w)},${r2(top + r)}V${r2(y0)}Z`;
    return `<path d="${d}" style="fill:${fill}${extra}"/>`;
  }
  return rect(x, y0, w, len, fill, extra);
}
/** Floating range (both ends are data): rounded both ends. */
export function rangeBar(x0, x1, y, h, fill, extra = '') {
  const w = Math.max(x1 - x0, 0);
  const r = Math.min(4, h / 2, w / 2);
  return `<rect x="${r2(x0)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" rx="${r2(r)}" style="fill:${fill}${extra}"/>`;
}
export function vRangeBar(x, w, y0, y1, fill, extra = '') {
  const top = Math.min(y0, y1);
  const h = Math.abs(y1 - y0);
  const r = Math.min(4, w / 2, h / 2);
  return `<rect x="${r2(x)}" y="${r2(top)}" width="${r2(w)}" height="${r2(h)}" rx="${r2(r)}" style="fill:${fill}${extra}"/>`;
}

/** Wrap a data mark for hover and focus. lines: first "Label: value unit", then extras. */
export function mark(lines, inner, attrs = '') {
  const arr = (Array.isArray(lines) ? lines : [lines]).filter((l) => l !== null && l !== undefined && l !== '').map(clean);
  const tip = arr.join('\n');
  const tipAttr = esc(tip).replace(/\n/g, '&#10;');
  return `<g class="mark" tabindex="0" data-tip="${tipAttr}"${attrs ? ' ' + attrs : ''}><title>${esc(tip)}</title>${inner}</g>`;
}
/** Tooltip extra lines from encoding.tooltip field list. */
export function tipFields(row, fields, labels = {}) {
  return (fields || [])
    .filter((f) => row[f] !== undefined && String(row[f]).trim() !== '')
    .map((f) => `${labels[f] || humanise(f)}: ${fmtStr(row[f])}`);
}
const HUMAN = {
  share_note: 'Note',
  main_origins: 'Main origins',
  period_type: 'Period type',
  fishmeal_usd_per_t_protein: 'Fishmeal, USD per t of protein',
  soybean_meal_usd_per_t_protein: 'Soybean meal, USD per t of protein',
  basis: 'Basis',
  year: 'Year',
  confidence: 'Confidence',
  n_sku: 'SKUs',
  median_ppp: 'Median VND per 100 g of protein',
  n: 'Products',
  actors: 'Actors',
  significance: 'Significance',
  company: 'Company',
  product: 'Product',
  regulator: 'Regulator',
  volume_kt: 'Volume, kt',
  hs_code: 'HS code',
  reporter: 'Reporter',
  note: 'Note',
  must_be_true: 'Must be true',
  kill_tests: 'Kill tests',
  horizon: 'Horizon',
  capital_note: 'Capital',
  first_customers: 'First customers',
  option: 'Option',
  owner_agency: 'Owner',
  timeline: 'Timeline',
  instrument: 'Instrument',
  relevance: 'Relevance',
  channel: 'Channel',
  source_ids: 'Sources',
  condition_to_open: 'Condition to open',
  status_2026: 'Status in 2026',
  related_plays: 'Related plays',
  type: 'Type',
  scenario: 'Scenario',
  why: 'Why',
  pays_off_in: 'Pays off in',
  indicator: 'Indicator',
  trend_comparison: 'Trend comparison',
  benchmark: 'Benchmark',
  stream: 'Stream',
  annual_volume: 'Annual volume',
  unit: 'Unit',
  main_regions_former: 'Former units',
};
export function humanise(f) {
  if (HUMAN[f]) return HUMAN[f];
  const s = f.replace(/_/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------- legend ----------
/**
 * items: [{label, color, shape: 'rect'|'line'|'dot'|'band'|'outline'|'dotted'|'hollow'}]
 * Returns { svg, height } laid out in flowing rows from (x, y) within maxW.
 */
export function legend(items, x = 0, y = 0, maxW = W) {
  const size = 12;
  const rowH = 20;
  let cx = x;
  let cy = y + 10;
  const parts = [];
  for (const it of items) {
    const sw = it.shape === 'line' || it.shape === 'dotted' ? 18 : it.shape === 'none' ? -6 : 12;
    const w = sw + 6 + textWidth(it.label, size) + 18;
    if (cx + w > x + maxW && cx > x) {
      cx = x;
      cy += rowH;
    }
    const c = it.color;
    let sym;
    switch (it.shape) {
      case 'line':
        sym = line(cx, cy, cx + 18, cy, c, 2, ';stroke-linecap:round');
        break;
      case 'dotted':
        sym = line(cx, cy, cx + 18, cy, c, 1.5, ';stroke-dasharray:2 3;stroke-linecap:round');
        break;
      case 'dot':
        sym = circle(cx + 6, cy, 5, c);
        break;
      case 'hollow':
        sym = `<circle cx="${cx + 6}" cy="${cy}" r="4.5" style="fill:${SURFACE};stroke:${c};stroke-width:2"/>`;
        break;
      case 'none':
        sym = '';
        break;
      case 'band':
        sym = rect(cx, cy - 6, 12, 12, BAND);
        break;
      case 'outline':
        sym = `<rect x="${cx + 1}" y="${cy - 5}" width="10" height="10" rx="2" style="fill:none;stroke:${c};stroke-width:1.5"/>`;
        break;
      default:
        sym = `<rect x="${cx}" y="${cy - 6}" width="12" height="12" rx="2" style="fill:${c}"/>`;
    }
    parts.push(sym + text(cx + sw + 6, cy, it.label, { size, fill: it.shape === 'none' ? MUTED : INK }));
    cx += w;
  }
  return { svg: `<g class="legend">${parts.join('')}</g>`, height: cy - y + 12 };
}

/** Sequential scale legend (ramp swatches with end labels). */
export function seqLegend(x, y, steps, lowLabel, highLabel, title) {
  const parts = [];
  let cx = x;
  if (title) {
    parts.push(text(cx, y + 8, title, { size: 12, fill: INK }));
    cx += textWidth(title, 12) + 10;
  }
  parts.push(text(cx, y + 8, lowLabel, { size: 12 }));
  cx += textWidth(lowLabel, 12) + 6;
  for (const s of steps) {
    parts.push(rect(cx, y + 1, 22, 14, SEQ(s)));
    cx += 24;
  }
  parts.push(text(cx + 4, y + 8, highLabel, { size: 12 }));
  return { svg: `<g class="legend">${parts.join('')}</g>`, height: 20 };
}

// ---------- document wrapper ----------
export function svgDoc(id, height, body, title, desc) {
  const h = Math.ceil(height);
  return (
    `<svg class="chart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${h}" width="100%" role="img" aria-labelledby="${id}-t ${id}-d" style="font-variant-numeric:tabular-nums;overflow:visible">` +
    `<title id="${id}-t">${esc(clean(title))}</title><desc id="${id}-d">${esc(clean(desc))}</desc>` +
    body +
    `</svg>`
  );
}

// ---------- data table ----------
/** columns: [{key, label, fmt?: (v,row)=>string, num?: bool}] */
export function table(caption, columns, rows) {
  const th = columns.map((c) => `<th scope="col">${esc(clean(c.label))}</th>`).join('');
  const body = rows
    .map((r) => {
      const cells = columns
        .map((c, i) => {
          const raw = typeof c.get === 'function' ? c.get(r) : r[c.key];
          const v = c.fmt ? c.fmt(raw, r) : c.num ? fmtStr(raw) : raw;
          const cls = c.num ? ' class="num"' : '';
          return i === 0 ? `<th scope="row">${esc(clean(v))}</th>` : `<td${cls}>${esc(clean(v))}</td>`;
        })
        .join('');
      return `<tr>${cells}</tr>`;
    })
    .join('');
  return `<table class="chart-data"><caption>${esc(clean(caption))}</caption><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table>`;
}

// ---------- axes ----------
/** Vertical gridlines + bottom tick labels for a horizontal-value scale. */
export function xAxis(scale, ticks, top, bottom, fmt = fmtNum, o = {}) {
  const { title, baseline = true, labelY = bottom + 14 } = o;
  const parts = [];
  for (const t of ticks) {
    const x = scale(t);
    parts.push(line(x, top, x, bottom, GRID, 1));
    parts.push(text(x, labelY, fmt(t), { size: 12, anchor: 'middle' }));
  }
  if (baseline && o.baseX !== undefined) parts.push(line(o.baseX, top, o.baseX, bottom, AXIS, 1));
  if (title) parts.push(text(o.titleX ?? scale.range?.[1] ?? W, labelY + 18, title, { size: 12, anchor: o.titleAnchor || 'end' }));
  return parts.join('');
}
/** Horizontal gridlines + left tick labels for a vertical-value scale. */
export function yAxis(scale, ticks, left, right, fmt = fmtNum, o = {}) {
  const parts = [];
  for (const t of ticks) {
    const y = scale(t);
    parts.push(line(left, y, right, y, GRID, 1));
    parts.push(text(left - 8, y, fmt(t), { size: 12, anchor: 'end' }));
  }
  if (o.title) parts.push(text(o.titleX ?? left - 8, o.titleY ?? scale(ticks[ticks.length - 1]) - 18, o.title, { size: 12, anchor: o.titleAnchor || 'start' }));
  return parts.join('');
}

/** Break marker (two short slanted strokes) centred at (x, y). */
export function breakMark(x, y, h = 10) {
  return (
    `<g>${rect(x - 5, y - h / 2 - 1, 10, h + 2, SURFACE)}` +
    line(x - 5, y + h / 2, x - 1, y - h / 2, MUTED, 1.5) +
    line(x + 1, y + h / 2, x + 5, y - h / 2, MUTED, 1.5) +
    `</g>`
  );
}

/** Parse loose dates such as 2019, 2019-06, 2019-08-17, c.2016, "2023 (summer)", "2026 (Q1)". Returns decimal year or null. */
export function parseDate(s) {
  const str = String(s || '').trim();
  let m = str.match(/^c?\.?\s*(\d{4})-(\d{2})-(\d{2})/);
  if (m) return +m[1] + (+m[2] - 1) / 12 + (+m[3] - 1) / 365;
  m = str.match(/^c?\.?\s*(\d{4})-(\d{2})/);
  if (m) return +m[1] + (+m[2] - 1) / 12 + 0.5 / 12;
  m = str.match(/^c?\.?\s*(\d{4})\s*\((?:Q)(\d)\)/i);
  if (m) return +m[1] + (+m[2] - 1) / 4 + 0.125;
  m = str.match(/^c?\.?\s*(\d{4})\s*\(summer\)/i);
  if (m) return +m[1] + 0.54;
  m = str.match(/^c?\.?\s*(\d{4})/);
  if (m) return +m[1] + 0.5;
  return null;
}

/** Greedy stacking: place items (sorted by x) into the lowest slot where they do not collide within minGap px. */
export function stackSlots(xs, minGap) {
  const slotsLast = [];
  return xs.map((x) => {
    for (let s = 0; ; s++) {
      if (slotsLast[s] === undefined || x - slotsLast[s] >= minGap) {
        slotsLast[s] = x;
        return s;
      }
    }
  });
}
