// Heatmaps and the province-by-stream matrix (non-geographic stand-in for the feedstock map).
import {
  W,
  S,
  SEQ,
  seqText,
  INK,
  MUTED,
  AXIS,
  SURFACE,
  BAND,
  GRID,
  DIM,
  esc,
  clean,
  fmtStr,
  num,
  text,
  textLines,
  line,
  rect,
  hit,
  mark,
  circle,
  legend,
  wrap,
  textWidth,
  table,
  R,
} from './lib.mjs';

const uniq = (arr) => [...new Set(arr)];

/**
 * Generic heatmap grid.
 * rows: [{label, header?, bold?, muted?, highlight?, cells:[{step|null, text, tip, fill?, textFill?}], extra?: string}]
 * cols: [{label}]; colGroups?: [{label, from, to}]
 */
function heatGrid(o) {
  const {
    rows,
    cols,
    labelW,
    cellW,
    cellH = 30,
    extraW = 0,
    extraTitle,
    legendItems,
    colGroups,
  } = o;
  const left = labelW + 12;
  const parts = [];
  let y = 0;
  if (legendItems) {
    const lg = legend(legendItems, 0, 0, W);
    parts.push(lg.svg);
    y += lg.height + 12;
  }
  if (colGroups) {
    for (const g of colGroups) {
      const x0 = left + g.from * cellW + 1;
      const x1 = left + (g.to + 1) * cellW - 1;
      parts.push(
        text((x0 + x1) / 2, y + 8, g.label, { size: 12, fill: INK, anchor: 'middle', weight: 600 }),
      );
      parts.push(line(x0, y + 20, x1, y + 20, AXIS, 1));
    }
    y += 26;
  }
  const headLines = cols.map((c) => wrap(c.label, cellW - 6, 12));
  const headH = Math.max(...headLines.map((l) => l.length)) * 14 + 6;
  headLines.forEach((l, j) => {
    const cx = left + j * cellW + cellW / 2;
    parts.push(
      textLines(cx, y + headH - 6 - (l.length - 1) * 14 - 4, l, {
        size: 12,
        fill: INK,
        anchor: 'middle',
        lineH: 14,
      }),
    );
  });
  if (extraTitle)
    parts.push(
      text(left + cols.length * cellW + 10, y + headH - 10, extraTitle, { size: 12, fill: INK }),
    );
  y += headH + 4;
  for (const r of rows) {
    if (r.header) {
      parts.push(text(0, y + 18, r.label, { size: 13, fill: INK, weight: 600 }));
      y += 28;
      continue;
    }
    const ll = wrap(r.label, labelW, 13, r.bold ? 600 : 400);
    const el = r.extra ? wrap(r.extra, extraW - 12, 12) : [];
    const h = Math.max(cellH, ll.length * 15.5 + 8, el.length * 14.5 + 8);
    parts.push(
      textLines(labelW, y + h / 2 - ((ll.length - 1) * 15.5) / 2, ll, {
        size: 13,
        fill: r.muted ? MUTED : INK,
        anchor: 'end',
        weight: r.bold ? 600 : undefined,
        lineH: 15.5,
      }),
    );
    r.cells.forEach((c, j) => {
      const x = left + j * cellW + 1;
      const fill = c.fill || (c.step ? SEQ(c.step) : SURFACE);
      const tf = c.textFill || (c.step ? seqText(c.step) : MUTED);
      const border = c.step || c.fill ? '' : `;stroke:${GRID};stroke-width:1`;
      const cellSvg = `<rect x="${R(x)}" y="${R(y + 1)}" width="${R(cellW - 2)}" height="${R(h - 2)}" rx="2" style="fill:${fill}${border}"/>`;
      const t =
        c.text !== undefined && c.text !== ''
          ? text(x + (cellW - 2) / 2, y + h / 2, c.text, {
              size: 12,
              fill: tf,
              anchor: 'middle',
              weight: c.weight,
            })
          : '';
      parts.push(c.tip ? mark(c.tip, cellSvg + t) : cellSvg + t);
    });
    if (r.highlight) {
      parts.push(
        `<rect x="${R(left - 1)}" y="${R(y - 0.5)}" width="${R(cols.length * cellW + 2)}" height="${R(h + 1)}" rx="3" style="fill:none;stroke:${INK};stroke-width:2"/>`,
      );
    }
    if (el.length) {
      const ex = left + cols.length * cellW + 10;
      if (r.extraChip) {
        const w = Math.min(extraW - 12, Math.max(...el.map((l) => textWidth(l, 12))) + 14);
        parts.push(
          `<rect x="${R(ex)}" y="${R(y + h / 2 - (el.length * 14.5 + 4) / 2)}" width="${R(w)}" height="${R(el.length * 14.5 + 4)}" rx="9" style="fill:none;stroke:${AXIS};stroke-width:1"/>`,
        );
        parts.push(
          textLines(ex + 7, y + h / 2 - ((el.length - 1) * 14.5) / 2, el, {
            size: 12,
            fill: INK,
            lineH: 14.5,
          }),
        );
      } else
        parts.push(
          textLines(ex, y + h / 2 - ((el.length - 1) * 14.5) / 2, el, {
            size: 12,
            fill: INK,
            lineH: 14.5,
          }),
        );
    }
    y += h;
  }
  return { body: parts.join(''), height: y + 6 };
}

// ---------------------------------------------------------------------------
export function hawkwoodScores(spec, D) {
  const rows = D.csv(spec.data.file);
  const countries = uniq(rows.map((r) => r.country));
  const drivers = uniq(rows.map((r) => r.driver));
  const groupOf = Object.fromEntries(rows.map((r) => [r.driver, r.driver_group]));
  const groups = uniq(rows.map((r) => r.driver_group)).sort(); // cost, enabling
  const orderedDrivers = groups.flatMap((g) => drivers.filter((d) => groupOf[d] === g));
  const val = (c, d) => rows.find((r) => r.country === c && r.driver === d);
  const step = (v) => 1 + Math.min(6, Math.floor(v / (100 / 7)));
  let colGroups = [];
  let k = 0;
  for (const g of groups) {
    const n = orderedDrivers.filter((d) => groupOf[d] === g).length;
    colGroups.push({
      label: g === 'cost' ? 'Cost drivers' : g === 'enabling' ? 'Enabling drivers' : g,
      from: k,
      to: k + n - 1,
    });
    k += n;
  }
  const hl = spec.encoding.row_highlight;
  const G = heatGrid({
    legendItems: [
      { label: 'Score:', shape: 'none' },
      { label: '0 to 14', color: SEQ(1) },
      { label: '15 to 28', color: SEQ(2) },
      { label: '29 to 42', color: SEQ(3) },
      { label: '43 to 57', color: SEQ(4) },
      { label: '58 to 71', color: SEQ(5) },
      { label: '72 to 85', color: SEQ(6) },
      { label: '86 to 100', color: SEQ(7) },
    ],
    colGroups,
    cols: orderedDrivers.map((d) => ({ label: d })),
    labelW: 100,
    cellW: 84,
    cellH: 32,
    rows: countries.map((c) => ({
      label: c,
      bold: c === hl,
      highlight: c === hl,
      cells: orderedDrivers.map((d) => {
        const r = val(c, d);
        const v = num(r.score_0_100);
        return {
          step: step(v),
          text: fmtStr(r.score_0_100),
          tip: [`${c}, ${d}: ${fmtStr(r.score_0_100)} out of 100`, `Group: ${r.driver_group}`],
          weight: c === hl ? 600 : undefined,
        };
      }),
    })),
  });
  const tbl = table(
    spec.title,
    [
      { key: 'country', label: 'Country' },
      { key: 'driver', label: 'Driver' },
      { key: 'driver_group', label: 'Driver group' },
      { key: 'score_0_100', label: 'Score (0 to 100)', num: true },
    ],
    rows,
  );
  return { body: G.body, height: G.height, table: tbl };
}

// ---------------------------------------------------------------------------
export function technologyFit(spec, D) {
  const rows = D.csv(spec.data.file);
  const cols = spec.encoding.columns;
  const stepOf = { strong: 6, moderate: 4, weak: 2 };
  const foot = [];
  const isBench = (r) => /benchmark/i.test(r.family);
  const G = heatGrid({
    legendItems: [
      { label: 'Strong', color: SEQ(6) },
      { label: 'Moderate', color: SEQ(4) },
      { label: 'Weak', color: SEQ(2) },
      { label: 'Benchmark (greyed)', color: DIM },
    ],
    cols: cols.map((c) => ({ label: c })),
    labelW: 140,
    cellW: 62,
    cellH: 34,
    extraW: 720 - 152 - 7 * 62,
    extraTitle: 'Verdict',
    rows: rows.map((r) => ({
      label: r.family,
      muted: isBench(r),
      extra: r.verdict,
      cells: cols.map((c) => {
        const raw = r[c];
        const first = (raw.match(/^[A-Za-z]+/) || [''])[0].toLowerCase();
        const tip = [`${r.family}, ${c}: ${raw}`];
        if (raw === 'n/a' || !stepOf[first]) return { step: null, text: 'n/a', tip };
        const mixed = raw.trim().toLowerCase() !== first;
        if (mixed) foot.push(`* ${r.family}, ${c}: ${raw}.`);
        const label = first.charAt(0).toUpperCase() + first.slice(1) + (mixed ? '*' : '');
        if (isBench(r)) return { fill: DIM, textFill: INK, text: label, tip };
        return { step: stepOf[first], text: label, tip };
      }),
    })),
  });
  let body = G.body;
  let h = G.height;
  for (const f of foot) {
    body += text(0, h + 8, f, { size: 12 });
    h += 18;
  }
  const tbl = table(
    spec.title,
    [
      { key: 'family', label: 'Family' },
      ...cols.map((c) => ({ key: c, label: c })),
      { key: 'verdict', label: 'Verdict' },
    ],
    rows,
  );
  return { body, height: h + 4, table: tbl };
}

// ---------------------------------------------------------------------------
function worldNames(D) {
  const m = D.csv('charts/data/scenarios_2050_matrix.csv');
  return Object.fromEntries(m.map((r) => [r.scenario_id.replace(/^SC-/, ''), r.name]));
}
const STEP3 = [2, 4, 6];

export function playRobustness(spec, D) {
  const rows = D.csv(spec.data.file);
  const cols = spec.encoding.columns;
  // annotation: "Column labels: A Regional workshop; B ...; ..."
  const ann = (spec.annotations || []).find((a) => /^Column labels:/.test(a));
  const colLabels = ann
    ? ann
        .replace(/^Column labels:\s*/, '')
        .replace(/\.$/, '')
        .split(/;\s*/)
    : cols;
  const groups = [
    { label: 'Plays T1 to T10', test: (r) => /^T/.test(r.play_id) },
    { label: 'Policy plays P1 to P6', test: (r) => /^P/.test(r.play_id) },
  ];
  const meaning = ['struggles', 'holds with conditions', 'thrives'];
  const grid = [];
  for (const g of groups) {
    grid.push({ header: true, label: g.label });
    for (const r of rows.filter(g.test))
      grid.push({
        label: `${r.play_id} ${r.play_name}`,
        extra: r.robustness_class,
        extraChip: true,
        cells: cols.map((c, j) => {
          const v = num(r[c]);
          return {
            step: STEP3[v],
            text: String(v),
            tip: [
              `${r.play_id} ${r.play_name}, ${colLabels[j]}: ${v} (${meaning[v]})`,
              `Robustness: ${r.robustness_class}`,
              ...(r.why ? [`Why: ${r.why}`] : []),
            ],
            weight: 600,
          };
        }),
      });
  }
  const G = heatGrid({
    legendItems: [0, 1, 2].map((v) => ({ label: `${v} ${meaning[v]}`, color: SEQ(STEP3[v]) })),
    cols: colLabels.map((l) => ({ label: l })),
    labelW: 236,
    cellW: 78,
    cellH: 30,
    extraW: 720 - 248 - 4 * 78,
    extraTitle: 'Robustness',
    rows: grid,
  });
  const tbl = table(
    spec.title,
    [
      { key: 'play_id', label: 'Play' },
      { key: 'play_name', label: 'Name' },
      ...cols.map((c, j) => ({ key: c, label: colLabels[j] })),
      { key: 'robustness_class', label: 'Robustness' },
      { key: 'why', label: 'Why' },
    ],
    rows,
  );
  return { body: G.body, height: G.height, table: tbl };
}

export function robustMoves(spec, D) {
  const rows = D.csv(spec.data.file);
  const cols = spec.encoding.columns;
  const wn = worldNames(D);
  const colLabels = cols.map((c) => (wn[c] ? `${c} ${wn[c]}` : c));
  const order = ['no-regret', 'option', 'bet', 'hedge']; // annotation order
  const plural = {
    'no-regret': 'No-regret moves',
    option: 'Options',
    bet: 'Bets',
    hedge: 'Hedges',
  };
  const meaning = ['little', 'partly', 'pays off strongly'];
  const grid = [];
  for (const cl of order) {
    const rs = rows.filter((r) => r.class === cl);
    if (!rs.length) continue;
    grid.push({ header: true, label: `${plural[cl]} (${rs.length})` });
    for (const r of rs)
      grid.push({
        label: r.move,
        cells: cols.map((c, j) => {
          const v = num(r[c]);
          return {
            step: STEP3[v],
            text: String(v),
            tip: [
              `${r.move_id} ${r.move}, ${colLabels[j]}: ${v} (${meaning[v]})`,
              `Class: ${r.class}`,
              ...tipFieldsLocal(r, spec.encoding.tooltip),
            ],
            weight: 600,
          };
        }),
      });
  }
  const G = heatGrid({
    legendItems: [0, 1, 2].map((v) => ({ label: `${v} ${meaning[v]}`, color: SEQ(STEP3[v]) })),
    cols: colLabels.map((l) => ({ label: l })),
    labelW: 360,
    cellW: 84,
    cellH: 26,
    rows: grid,
  });
  const tbl = table(
    spec.title,
    [
      { key: 'move_id', label: 'Move' },
      { key: 'move', label: 'Description' },
      { key: 'class', label: 'Class' },
      ...cols.map((c, j) => ({ key: c, label: colLabels[j] })),
      { key: 'pays_off_in', label: 'Pays off in' },
    ],
    rows,
  );
  return { body: G.body, height: G.height, table: tbl };
}
function tipFieldsLocal(r, fields) {
  return (fields || [])
    .filter((f) => r[f])
    .map((f) => `${f === 'pays_off_in' ? 'Pays off in' : f}: ${r[f]}`);
}

// ---------------------------------------------------------------------------
// Feedstock "map": the package has no boundary data, so this renders the fallback named in the
// spec notes: a province-by-stream matrix, provinces ordered roughly north to south.
const NORTH_TO_SOUTH = [
  'Lai Chau',
  'Dien Bien',
  'Lao Cai',
  'Tuyen Quang',
  'Cao Bang',
  'Lang Son',
  'Thai Nguyen',
  'Son La',
  'Phu Tho',
  'Quang Ninh',
  'Bac Ninh',
  'Ha Noi',
  'Hai Phong',
  'Hung Yen',
  'Ninh Binh',
  'Thanh Hoa',
  'Nghe An',
  'Ha Tinh',
  'Quang Tri',
  'Hue',
  'Da Nang',
  'Quang Ngai',
  'Gia Lai',
  'Dak Lak',
  'Khanh Hoa',
  'Lam Dong',
  'Dong Nai',
  'Ho Chi Minh City',
  'Tay Ninh',
  'Dong Thap',
  'Vinh Long',
  'An Giang',
  'Can Tho',
  'Ca Mau',
];
const ALIASES = { 'Ho Chi Minh City': ['HCMC', 'Ho Chi Minh City'], 'Ha Noi': ['Hanoi', 'Ha Noi'] };
const REGIONS = ['Northern uplands', 'Red River Delta', 'Central Highlands', 'Mekong Delta'];
const MEKONG = ['Dong Thap', 'Vinh Long', 'An Giang', 'Can Tho', 'Ca Mau'];
const FAMILIES = [
  { label: 'Cassava', test: (s) => /cassava|ethanol/i.test(s) },
  { label: 'Rice', test: (s) => /rice/i.test(s) },
  { label: 'Sugarcane', test: (s) => /sugarcane/i.test(s) },
  { label: 'Soy and brewing', test: (s) => /soy|okara|brewer/i.test(s) },
  { label: 'Nuts, oilseeds and coffee', test: (s) => /peanut|coconut|coffee|cashew/i.test(s) },
  { label: 'Aquatic', test: (s) => /seafood|seaweed|spirulina|duckweed/i.test(s) },
  { label: 'Other crops and residues', test: () => true },
];

export function feedstockMap(spec, D) {
  const streams = D.csv(spec.data.file);
  const provs = D.csv(spec.data.join).map((p) => p.new_unit);
  const order = [
    ...NORTH_TO_SOUTH.filter((p) => provs.includes(p)),
    ...provs.filter((p) => !NORTH_TO_SOUTH.includes(p)),
  ];
  const famOf = (s) => FAMILIES.findIndex((f) => f.test(s.stream));
  const marks = []; // {row, stream, hollow}
  for (const s of streams) {
    const field = s.main_regions_current || '';
    const hollow = /not sourced|not verified/i.test(field);
    for (const part of field.split(';')) {
      const found = order.filter((p) =>
        (ALIASES[p] || [p]).some((a) => new RegExp(`\\b${a}\\b`).test(part)),
      );
      if (found.length) found.forEach((p) => marks.push({ row: p, s, hollow }));
      else
        REGIONS.filter((rg) => part.toLowerCase().includes(rg.toLowerCase())).forEach((rg) =>
          marks.push({ row: rg, s, hollow, region: true }),
        );
    }
  }
  const uniqMarks = [];
  const seen = new Set();
  for (const m of marks) {
    const k = m.row + '|' + m.s.record_id;
    if (!seen.has(k)) {
      seen.add(k);
      uniqMarks.push(m);
    }
  }
  const colStreams = streams.filter((s) => uniqMarks.some((m) => m.s === s));
  const unplaced = streams.filter((s) => !colStreams.includes(s));
  const provRows = order.filter((p) => uniqMarks.some((m) => m.row === p));
  const regionRows = REGIONS.filter((r) => uniqMarks.some((m) => m.row === r));
  const famUsed = uniq(colStreams.map(famOf)).sort((a, b) => a - b);
  const lg = legend(
    [
      ...famUsed.map((f) => ({ label: FAMILIES[f].label, color: S(f + 1), shape: 'dot' })),
      { label: 'Location not sourced or not verified', color: MUTED, shape: 'hollow' },
    ],
    0,
    0,
    W,
  );
  const parts = [lg.svg];
  const labelW = 150;
  const left = labelW + 12;
  const rightCol = 104;
  const cw = Math.min(26, (W - left - rightCol) / colStreams.length);
  const headH = Math.max(...colStreams.map((s) => textWidth(s.stream, 12))) + 14;
  let y = lg.height + 12;
  // rotated column headers
  colStreams.forEach((s, j) => {
    const cx = left + j * cw + cw / 2 + 4;
    parts.push(
      `<text transform="translate(${R(cx)},${R(y + headH - 6)}) rotate(-90)" font-size="12" style="fill:${INK}">${esc(clean(s.stream))}</text>`,
    );
  });
  y += headH + 4;
  const rowH = 21;
  const rowY = {};
  const drawRows = [...provRows, null, ...regionRows];
  const hlRow = (p) => p === 'Tay Ninh' || MEKONG.includes(p) || p === 'Mekong Delta';
  for (const p of drawRows) {
    if (p === null) {
      parts.push(
        text(0, y + 16, 'Region named, no province given', { size: 12, fill: INK, weight: 600 }),
      );
      y += 26;
      continue;
    }
    rowY[p] = y;
    if (hlRow(p)) parts.push(rect(0, y, left + colStreams.length * cw + 2, rowH, BAND));
    parts.push(
      text(labelW, y + rowH / 2, p, {
        size: 12.5,
        fill: INK,
        anchor: 'end',
        weight: hlRow(p) ? 600 : undefined,
      }),
    );
    parts.push(line(left, y + rowH, left + colStreams.length * cw, y + rowH, GRID, 1));
    y += rowH;
  }
  // column guides
  colStreams.forEach((s, j) => {
    const x = left + j * cw;
    parts.push(line(x, rowY[provRows[0]], x, y, GRID, 1));
  });
  parts.push(
    line(
      left + colStreams.length * cw,
      rowY[provRows[0]],
      left + colStreams.length * cw,
      y,
      GRID,
      1,
    ),
  );
  for (const m of uniqMarks) {
    const j = colStreams.indexOf(m.s);
    const cx = left + j * cw + cw / 2;
    const cy = rowY[m.row] + rowH / 2;
    const col = S(famOf(m.s) + 1);
    const shape = m.hollow
      ? `<circle cx="${R(cx)}" cy="${R(cy)}" r="4.5" style="fill:${SURFACE};stroke:${col};stroke-width:2"/>`
      : circle(cx, cy, 5.5, col);
    const tip = [
      `${m.row}: ${m.s.stream}`,
      `Annual volume: ${m.s.annual_volume} ${m.s.unit}`.trim(),
      ...(m.s.main_regions_former ? [`Former units: ${m.s.main_regions_former}`] : []),
      `Locations listed: ${m.s.main_regions_current}`,
    ];
    parts.push(mark(tip, shape + hit(cx - cw / 2, cy - rowH / 2, cw, rowH)));
  }
  // highlight annotations on the right (spec notes: Tay Ninh cassava starch, Mekong Delta aquaculture by-products)
  const rx = left + colStreams.length * cw + 12;
  if (rowY['Tay Ninh'] !== undefined)
    parts.push(
      textLines(rx, rowY['Tay Ninh'] + rowH / 2 - 7, ['Tay Ninh:', 'cassava starch'], {
        size: 12,
        fill: INK,
        lineH: 14,
      }),
    );
  const mk = MEKONG.filter((p) => rowY[p] !== undefined);
  if (mk.length) {
    const y0 = Math.min(...mk.map((p) => rowY[p])) + 3;
    const y1 = Math.max(...mk.map((p) => rowY[p])) + rowH - 3;
    parts.push(
      line(rx, y0, rx, y1, INK, 1) +
        line(rx, y0, rx - 5, y0, INK, 1) +
        line(rx, y1, rx - 5, y1, INK, 1),
    );
    parts.push(
      textLines(rx + 8, (y0 + y1) / 2 - 14, ['Mekong Delta:', 'aquaculture', 'by-products'], {
        size: 12,
        fill: INK,
        lineH: 14,
      }),
    );
  }
  y += 12;
  const foot = [
    `Provinces with no listed stream are not shown (${provRows.length} of ${provs.length} units have one).`,
    `No location given: ${unplaced.map((s) => s.stream).join('; ')}.`,
  ];
  for (const f of foot) {
    const ls = wrap(f, W - 8, 12);
    parts.push(textLines(0, y + 6, ls, { size: 12, fill: MUTED, lineH: 15 }));
    y += ls.length * 15 + 4;
  }
  const tRows = [...provRows, ...regionRows].flatMap((p) =>
    uniqMarks
      .filter((m) => m.row === p)
      .map((m) => ({
        place: p,
        stream: m.s.stream,
        vol: m.s.annual_volume,
        unit: m.s.unit,
        former: m.s.main_regions_former,
        note: m.hollow ? 'not sourced or not verified' : '',
      })),
  );
  const tbl = table(
    spec.title,
    [
      { key: 'place', label: 'Province or region' },
      { key: 'stream', label: 'Stream' },
      { key: 'vol', label: 'Annual volume' },
      { key: 'unit', label: 'Unit' },
      { key: 'former', label: 'Former units' },
      { key: 'note', label: 'Location note' },
    ],
    tRows,
  );
  return {
    body: parts.join(''),
    height: y + 4,
    table: tbl,
    mapNote: {
      provinces: provRows.length,
      streams: colStreams.length,
      unplaced: unplaced.map((s) => s.stream),
    },
  };
}
