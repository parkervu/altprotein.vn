// Row-based horizontal layout used by bar, range, gantt and dot-range charts.
import { W, INK, MUTED, legend as mkLegend, textLines, wrap, text, xAxis, textWidth } from './lib.mjs';

/**
 * o = {
 *   legend: [items] | null, legendSvg?: {svg,height}
 *   head: number (extra space above plot for reference labels)
 *   rows: [{label, sub?, bold?, muted?}]
 *   labelW, labelSize=13, minRowH=30,
 *   plotLeft (default labelW + 16), plotRight (default W - 16),
 *   makeScale: (left, right) => scale,
 *   ticks, fmtTick, axisTitle,
 *   drawRow: (row, i, ctx, yTop, h) => svg,
 *   under: ctx => svg (drawn after grid, before rows),
 *   over: ctx => svg (drawn after rows),
 *   foot: [lines] (muted text under axis)
 * }
 */
export function hLayout(o) {
  const labelW = o.labelW ?? 170;
  const labelSize = o.labelSize ?? 13;
  const plotLeft = o.plotLeft ?? labelW + 16;
  const plotRight = o.plotRight ?? W - 16;
  const scale = o.makeScale(plotLeft, plotRight);
  let y = 0;
  const parts = [];
  if (o.legend && o.legend.length) {
    const lg = mkLegend(o.legend, 0, 0, W);
    parts.push(lg.svg);
    y += lg.height + 10;
  }
  if (o.legendSvg) {
    parts.push(`<g transform="translate(0,${y})">${o.legendSvg.svg}</g>`);
    y += o.legendSvg.height + 10;
  }
  y += o.head ?? 0;
  const top = y;
  const rowsY = [];
  for (const r of o.rows) {
    const lines = r.lines || wrap(r.label, r.header ? W : labelW, labelSize, r.bold || r.header ? 600 : 400);
    const subLines = r.sub ? wrap(r.sub, labelW, 12) : [];
    const textH = lines.length * labelSize * 1.2 + subLines.length * 14.5;
    const h = r.header ? (r.headerH ?? textH + 14) : Math.max(o.minRowH ?? 30, textH + 10);
    rowsY.push({ y, h, lines, subLines });
    y += h;
  }
  const bottom = y;
  const ctx = { scale, top, bottom, plotLeft, plotRight, rowsY, labelW };
  // grid + axis
  if (o.ticks) parts.push(xAxis(scale, o.ticks, top, bottom, o.fmtTick, { title: o.axisTitle, titleX: plotRight }));
  if (o.under) parts.push(o.under(ctx));
  o.rows.forEach((r, i) => {
    const ry = rowsY[i];
    const lh = labelSize * 1.2;
    const blockH = ry.lines.length * lh + ry.subLines.length * 14.5;
    let ly = ry.y + ry.h / 2 - blockH / 2 + lh / 2 + (r.labelDy ?? 0);
    if (r.header) {
      parts.push(textLines(0, ry.y + ry.h - lh / 2 - 4, ry.lines, { size: labelSize, fill: INK, weight: 600, lineH: lh }));
      return;
    }
    parts.push(
      textLines(labelW, ly, ry.lines, {
        size: labelSize,
        fill: r.muted ? MUTED : INK,
        anchor: 'end',
        weight: r.bold ? 600 : undefined,
        lineH: lh,
      }),
    );
    if (ry.subLines.length) {
      const sy = ly + ry.lines.length * lh - lh / 2 + 7;
      parts.push(textLines(labelW, sy, ry.subLines, { size: 12, fill: MUTED, anchor: 'end', lineH: 14.5 }));
    }
    parts.push(o.drawRow(r.data ?? r, i, ctx, ry.y, ry.h));
  });
  if (o.over) parts.push(o.over(ctx));
  y = bottom + (o.ticks ? (o.axisTitle ? 44 : 28) : 8);
  if (o.foot && o.foot.length) {
    for (const f of o.foot) {
      const lines = wrap(f, W - 8, 12);
      parts.push(textLines(0, y + 6, lines, { size: 12, fill: MUTED, lineH: 15 }));
      y += lines.length * 15 + 4;
    }
  }
  return { body: parts.join(''), height: y + 4, ctx };
}

/** Place a value label to the right of x, or inside (end-anchored) if it would overflow maxX. */
export function endLabel(x, y, str, maxX, o = {}) {
  const w = textWidth(str, o.size ?? 12, o.weight);
  if (x + 6 + w <= maxX) return text(x + 6, y, str, { size: o.size ?? 12, fill: INK, weight: o.weight, halo: true });
  return text(maxX, y, str, { size: o.size ?? 12, fill: INK, anchor: 'end', weight: o.weight, halo: true });
}
