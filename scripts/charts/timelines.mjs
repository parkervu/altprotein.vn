// Timelines: swimlane dot timelines, approval dots and the vision milestone grid.
import {
  W,
  S,
  INK,
  MUTED,
  AXIS,
  SURFACE,
  BAND,
  GRID,
  esc,
  clean,
  fmtStr,
  num,
  linear,
  piecewise,
  text,
  textLines,
  line,
  rect,
  hit,
  hitCircle,
  mark,
  dot,
  legend,
  wrap,
  textWidth,
  table,
  breakMark,
  parseDate,
  tipFields,
  R,
} from './lib.mjs';

const uniq = (arr) => [...new Set(arr)];
const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);

/**
 * Swimlane chart.
 * lanes: [{label, items:[{x0, x1?, color, hollow?, tip}], notes?:[{text, tip}]}]
 */
function swimlanes(o) {
  const {
    lanes,
    scale,
    ticks,
    labelW,
    left,
    right,
    breaks = [],
    bands = [],
    legendItems,
    headH = 0,
  } = o;
  const parts = [];
  let y = 0;
  if (legendItems && legendItems.length) {
    const lg = legend(legendItems, 0, 0, W);
    parts.push(lg.svg);
    y += lg.height + 10;
  }
  y += headH;
  const top = y;
  const laneLayout = [];
  for (const ln of lanes) {
    const items = ln.items
      .map((it) => ({
        ...it,
        a: scale(it.x0),
        b: it.x1 !== undefined ? scale(it.x1) : scale(it.x0),
      }))
      .sort((p, q) => p.a - q.a);
    const ends = [];
    for (const it of items) {
      let s = 0;
      while (ends[s] !== undefined && it.a - 7 < ends[s]) s++;
      ends[s] = it.b + 7;
      it.slot = s;
    }
    const nSlots = Math.max(1, ends.length);
    const ll = wrap(ln.label, labelW, 12.5);
    const h = Math.max(30, 16 + (nSlots - 1) * 13 + 14, ll.length * 15 + 10);
    laneLayout.push({ ln, items, y, h, ll });
    y += h;
  }
  const bottom = y;
  // bands under everything
  for (const b of bands) {
    const x0 = scale(b.x0);
    const x1 = scale(b.x1);
    parts.push(
      rect(x0, top - (b.labelUp ? 24 : 0), x1 - x0, bottom - top + (b.labelUp ? 24 : 0), BAND),
    );
    if (b.label)
      parts.push(
        text(b.labelAnchor === 'end' ? x0 - 4 : x1 + 4, top - 12, b.label, {
          size: 12,
          fill: INK,
          anchor: b.labelAnchor || 'start',
        }),
      );
  }
  for (const t of ticks) {
    const x = scale(t.v);
    parts.push(line(x, top, x, bottom, GRID, 1));
    parts.push(text(x, bottom + 14, t.label, { size: 12, anchor: 'middle' }));
  }
  parts.push(line(left, bottom, right, bottom, AXIS, 1));
  for (const bx of breaks) parts.push(breakMark(bx, bottom, 10));
  for (const L of laneLayout) {
    parts.push(line(0, L.y + L.h, right, L.y + L.h, GRID, 1));
    parts.push(
      textLines(labelW, L.y + L.h / 2 - ((L.ll.length - 1) * 15) / 2, L.ll, {
        size: 12.5,
        fill: INK,
        anchor: 'end',
        lineH: 15,
      }),
    );
    let lastEnd = left;
    for (const it of L.items) {
      const cy = L.y + 15 + it.slot * 13;
      let shape;
      if (it.x1 !== undefined && it.b - it.a > 4) {
        shape = `<rect x="${R(it.a)}" y="${R(cy - 4)}" width="${R(it.b - it.a)}" height="8" rx="4" style="fill:${it.color}"/>`;
      } else if (it.hollow) {
        shape = `<circle cx="${R(it.a)}" cy="${R(cy)}" r="4.5" style="fill:${SURFACE};stroke:${it.color};stroke-width:2"/>`;
      } else shape = dot(it.a, cy, 5, it.color);
      parts.push(mark(it.tip, shape + hit(it.a - 7, cy - 7, Math.max(it.b - it.a, 0) + 14, 14)));
      lastEnd = Math.max(lastEnd, it.b);
    }
    if (L.ln.notes && L.ln.notes.length) {
      const total = L.ln.notes.reduce((a, n) => a + textWidth(n.text, 12) + 16, 0);
      const firstX = L.items.length ? Math.min(...L.items.map((it) => it.a)) : right;
      let nx = L.items.length ? lastEnd + 14 : left + 4;
      if (nx + total > right && left + 4 + total < firstX - 12) nx = left + 4;
      for (const n of L.ln.notes) {
        const w = textWidth(n.text, 12);
        const t = text(nx, L.y + L.h / 2, n.text, { size: 12, fill: MUTED, italic: true });
        parts.push(mark(n.tip, t + hit(nx, L.y + 4, w, L.h - 8)));
        nx += w + 16;
      }
    }
  }
  return { body: parts.join(''), height: bottom + 30, top, bottom };
}

// ---------------------------------------------------------------------------
export function chartTimeline(spec, D) {
  const tl = D.csv(spec.data.file);
  const ms = D.csv('data/milestones.csv');
  const NOW = 2026.75;
  const tlDates = new Set(tl.map((r) => r.date));
  // spec notes: also plot milestones rows with jurisdiction Vietnam and status in force, de-duplicated by event
  const extra = ms.filter(
    (r) =>
      r.jurisdiction === 'Vietnam' &&
      r.status === 'in force' &&
      !tlDates.has(r.date) &&
      (parseDate(r.date) ?? 9999) <= NOW,
  );
  const RULES = 'Rules in force (Vietnam)';
  const pref = [
    'plant-based meat',
    'plant-based dairy',
    'traditional chay industrial',
    'mushroom/mycelium',
    'microalgae',
    'feed SCP/yeast',
    'insect (benchmark)',
    'cultivated',
    'ingredient supplier',
    'other',
  ];
  const cats = uniq([
    ...pref.filter((c) => tl.some((r) => r.category === c)),
    ...tl.map((r) => r.category),
  ]);
  const left = 176;
  const right = W - 14;
  const scale = piecewise([
    { d0: 1976, d1: 2019, r0: left + 6, r1: left + 70 },
    { d0: 2019, d1: 2027, r0: left + 92, r1: right },
  ]);
  const lanes = cats.map((c) => ({
    label: cap(c),
    items: tl
      .filter((r) => r.category === c)
      .map((r) => ({
        x0: parseDate(r.date),
        color: S(1),
        tip: [`${r.date}: ${r.event}`, ...tipFields(r, spec.encoding.tooltip)],
      })),
  }));
  lanes.push({
    label: RULES,
    items: extra.map((r) => ({
      x0: parseDate(r.date),
      color: S(3),
      tip: [`${r.date}: ${r.event}`, `Instrument: ${r.instrument}`, `Relevance: ${r.relevance}`],
    })),
  });
  const ticks = [
    { v: 1976, label: '1976' },
    { v: 2000, label: '2000' },
    ...[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((v) => ({ v, label: String(v) })),
  ];
  const G = swimlanes({
    legendItems: [
      { label: 'Company, capital and market events', color: S(1), shape: 'dot' },
      { label: 'Vietnamese rules in force (milestones)', color: S(3), shape: 'dot' },
    ],
    lanes,
    scale,
    ticks,
    labelW: 164,
    left,
    right,
    breaks: [left + 81],
  });
  const note = text(
    0,
    G.height,
    'Before 2019 the axis is compressed. Each dot is one event; hover or open the data table for details.',
    { size: 12 },
  );
  const tRows = [
    ...tl.map((r) => ({
      date: r.date,
      lane: cap(r.category),
      event: r.event,
      actors: r.actors,
      significance: r.significance,
      x: parseDate(r.date),
    })),
    ...extra.map((r) => ({
      date: r.date,
      lane: RULES,
      event: r.event,
      actors: r.instrument,
      significance: r.relevance,
      x: parseDate(r.date),
    })),
  ].sort((a, b) => a.x - b.x);
  const tbl = table(
    spec.title,
    [
      { key: 'date', label: 'Date' },
      { key: 'lane', label: 'Category' },
      { key: 'event', label: 'Event' },
      { key: 'actors', label: 'Actors or instrument' },
      { key: 'significance', label: 'Significance or relevance' },
    ],
    tRows,
  );
  return {
    body: G.body + note,
    height: G.height + 14,
    table: tbl,
    excluded: ms
      .filter(
        (r) =>
          r.jurisdiction === 'Vietnam' && r.status === 'in force' && (parseDate(r.date) ?? 0) > NOW,
      )
      .map((r) => `${r.record_id} (${r.date})`),
  };
}

// ---------------------------------------------------------------------------
function parseSpan(s) {
  let m = String(s).match(/^(\d{4})-(\d{4})$/);
  if (m) return [+m[1], +m[2] + 1];
  if (/ to /.test(s)) {
    const [a, b] = s.split(' to ');
    return [parseDate(a), parseDate(b)];
  }
  return [parseDate(s)];
}
export function milestonesTimeline(spec, D) {
  const rows = D.csv(spec.data.file);
  const jur = uniq(rows.map((r) => r.jurisdiction));
  const norm = (s) => s.replace(/\s*\(.*\)$/, '');
  const statusOrder = [
    'in force',
    'adopted',
    'planned',
    'target',
    'projected',
    'observed',
    'published',
  ];
  const stOf = (r) => (statusOrder.includes(norm(r.status)) ? norm(r.status) : 'other');
  const present = [
    ...statusOrder.filter((s) => rows.some((r) => stOf(r) === s)),
    ...(rows.some((r) => stOf(r) === 'other') ? ['other'] : []),
  ];
  const color = (s) => S(present.indexOf(s) + 1);
  const otherVals = uniq(rows.filter((r) => stOf(r) === 'other').map((r) => r.status));
  const labelW = 90;
  const left = labelW + 16;
  const right = W - 14;
  const scale = piecewise([
    { d0: 2025, d1: 2028, r0: left + 4, r1: left + 350 },
    { d0: 2028, d1: 2036.2, r0: left + 350, r1: right - 64 },
    { d0: 2049, d1: 2050, r0: right - 40, r1: right },
  ]);
  const lanes = jur.map((j) => ({
    label: j,
    items: rows
      .filter((r) => r.jurisdiction === j)
      .map((r) => {
        const [a, b] = parseSpan(r.date);
        return {
          x0: a,
          x1: b,
          color: color(stOf(r)),
          tip: [
            `${r.date}: ${r.event}`,
            `Status: ${r.status}`,
            ...tipFields(r, spec.encoding.tooltip),
          ],
        };
      }),
  }));
  const ticks = [2025, 2026, 2027, 2028, 2030, 2032, 2034]
    .map((v) => ({ v, label: String(v) }))
    .concat([{ v: 2049, label: '2049' }]);
  // annotation: shade October to November 2026 (Food Safety Law session)
  const G = swimlanes({
    legendItems: present.map((s) => ({
      label: s === 'other' ? `Other (${otherVals.join(', ')})` : cap(s),
      color: color(s),
      shape: 'dot',
    })),
    headH: 26,
    lanes,
    scale,
    ticks,
    labelW,
    left,
    right,
    breaks: [right - 52],
    bands: [
      {
        x0: 2026.75,
        x1: 2026 + 11 / 12,
        label: 'Food Safety Law session, October to November 2026',
        labelAnchor: 'start',
        labelUp: true,
      },
    ],
  });
  const tbl = table(
    spec.title,
    [
      { key: 'date', label: 'Date' },
      { key: 'jurisdiction', label: 'Jurisdiction' },
      { key: 'event', label: 'Event' },
      { key: 'status', label: 'Status' },
      { key: 'instrument', label: 'Instrument' },
      { key: 'relevance', label: 'Relevance' },
    ],
    rows,
  );
  const note = text(
    0,
    G.height,
    'The axis is compressed after 2028 and broken between 2036 and 2049. Ranges are drawn as bars.',
    { size: 12 },
  );
  return { body: G.body + note, height: G.height + 14, table: tbl };
}

// ---------------------------------------------------------------------------
export function regionalApprovals(spec, D) {
  const rows = D.csv(spec.data.file);
  const countries = uniq(rows.map((r) => r.country));
  const catOf = (c) =>
    c === 'cultivated'
      ? 'Cultivated'
      : c === 'biomass'
        ? 'Biomass'
        : c === 'PF'
          ? 'Precision fermentation (PF)'
          : 'Other';
  const cats = ['Cultivated', 'Biomass', 'Precision fermentation (PF)', 'Other'];
  const color = (c) => S(cats.indexOf(catOf(c)) + 1);
  const otherVals = uniq(
    rows
      .filter((r) => catOf(r.category) === 'Other' && r.category !== 'n/a')
      .map((r) => r.category.replace(/^other \((.*)\)$/, '$1')),
  );
  const notApproval = (r) =>
    /application only|not a food|no approval|no novel food/i.test(r.form_of_approval);
  const labelW = 150;
  const left = labelW + 16;
  const right = W - 14;
  const scale = linear(2019, 2027, left + 6, right);
  const lanes = countries.map((c) => {
    const rs = rows.filter((r) => r.country === c);
    const items = [];
    const notes = [];
    for (const r of rs) {
      const d = parseDate(r.date);
      const tip = [
        `${r.country}, ${r.date}: ${r.product}`,
        `Category: ${r.category}`,
        `Form: ${r.form_of_approval}`,
        ...tipFields(r, spec.encoding.tooltip),
      ];
      if (d !== null) items.push({ x0: d, color: color(r.category), hollow: notApproval(r), tip });
      else if (notApproval(r)) notes.push({ text: r.form_of_approval, tip });
      else notes.push({ text: `${r.company}: date not verified`, tip });
    }
    return { label: c, items, notes };
  });
  const G = swimlanes({
    legendItems: [
      ...cats.map((c) => ({
        label: c === 'Other' ? `Other (${otherVals.join(', ')})` : c,
        color: S(cats.indexOf(c) + 1),
        shape: 'dot',
      })),
      { label: 'Application or ruling, not an approval', color: MUTED, shape: 'hollow' },
    ],
    lanes,
    scale,
    ticks: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((v) => ({
      v,
      label: String(v),
    })),
    labelW,
    left,
    right,
  });
  const tbl = table(
    spec.title,
    [
      { key: 'date', label: 'Date' },
      { key: 'country', label: 'Country' },
      { key: 'company', label: 'Company' },
      { key: 'product', label: 'Product' },
      { key: 'category', label: 'Category' },
      { key: 'regulator', label: 'Regulator' },
      { key: 'form_of_approval', label: 'Form of approval' },
    ],
    rows,
  );
  return { body: G.body, height: G.height, table: tbl };
}

// ---------------------------------------------------------------------------
function clamp(lines, n, maxW, size, weight) {
  if (lines.length <= n) return lines;
  const out = lines.slice(0, n);
  let last = out[n - 1];
  while (last.includes(' ') && textWidth(last + '…', size, weight) > maxW * 0.97)
    last = last.replace(/\s+\S+$/, '');
  out[n - 1] = last.replace(/[\s,;(]*$/, '') + '…';
  return out;
}
export function visionBackcast(spec, D) {
  const rows = D.csv(spec.data.file);
  const periods = uniq(rows.map((r) => r.period));
  const ann = (spec.annotations || []).find((a) => /^Lanes in this order:/.test(a));
  const pillars = ann
    ? ann
        .replace(/^Lanes in this order:\s*/, '')
        .replace(/\.$/, '')
        .split(/,\s*/)
    : uniq(rows.map((r) => r.pillar));
  const labelW = 84;
  const left = labelW + 10;
  const cw = (W - left) / periods.length;
  const parts = [];
  // badge (annotation: badge the whole chart "Vision, not forecast")
  const badge = 'Vision, not forecast';
  const bw = textWidth(badge, 12, 600) + 22;
  parts.push(
    `<rect x="1" y="1" width="${R(bw)}" height="22" rx="11" style="fill:none;stroke:${S(5)};stroke-width:1.5"/>`,
  );
  parts.push(text(11, 12, badge, { size: 12, fill: INK, weight: 600 }));
  let y = 36;
  periods.forEach((p, j) =>
    parts.push(text(left + j * cw + 6, y + 8, p, { size: 12.5, fill: INK, weight: 600 })),
  );
  y += 20;
  parts.push(line(0, y, W, y, AXIS, 1));
  const colTop = y;
  for (const pl of pillars) {
    const cells = periods.map((p) =>
      rows
        .filter((r) => r.pillar === pl && r.period === p)
        .map((r) => {
          const v = clamp(wrap(r.value_or_range, cw - 22, 12, 600), 4, cw - 22, 12, 600);
          const ind = clamp(wrap(r.indicator, cw - 22, 12), 3, cw - 22, 12);
          return { r, v, ind, h: v.length * 14.5 + ind.length * 14 + 8 };
        }),
    );
    const h = Math.max(34, ...cells.map((c) => c.reduce((a, it) => a + it.h, 0) + 8));
    parts.push(text(labelW, y + 16, pl, { size: 12.5, fill: INK, anchor: 'end', weight: 600 }));
    cells.forEach((c, j) => {
      let cy = y + 10;
      const x = left + j * cw + 6;
      for (const it of c) {
        const tip = [
          `${it.r.period}, ${it.r.pillar}: ${it.r.milestone}`,
          `${it.r.indicator}: ${it.r.value_or_range}`,
          ...tipFields(it.r, spec.encoding.tooltip),
        ];
        const inner =
          dot(x + 4, cy + 1, 4, S(5)) +
          textLines(x + 14, cy + 1, it.v, { size: 12, fill: INK, weight: 600, lineH: 14.5 }) +
          textLines(x + 14, cy + 1 + it.v.length * 14.5, it.ind, {
            size: 12,
            fill: MUTED,
            lineH: 14,
          }) +
          hit(x - 2, cy - 7, cw - 8, it.h);
        parts.push(mark(tip, inner));
        cy += it.h;
      }
    });
    y += h;
    parts.push(line(0, y, W, y, GRID, 1));
  }
  for (let j = 1; j < periods.length; j++)
    parts.push(line(left + j * cw, colTop, left + j * cw, y, GRID, 1));
  const tbl = table(
    spec.title,
    [
      { key: 'period', label: 'Period' },
      { key: 'pillar', label: 'Pillar' },
      { key: 'milestone', label: 'Milestone' },
      { key: 'indicator', label: 'Indicator' },
      { key: 'value_or_range', label: 'Value or range' },
      { key: 'trend_comparison', label: 'Trend comparison' },
      { key: 'benchmark', label: 'Benchmark' },
    ],
    rows,
  );
  return { body: parts.join(''), height: y + 6, table: tbl };
}
