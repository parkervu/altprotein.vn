import { textOf, headingId, codeId, chapterHref } from './report.mjs';
export const escapeHtml = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
export function safeHref(value) {
  const href = String(value ?? '').trim();
  if (/[\\\u0000-\u0020]/.test(href)) return '#';
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(href) ? href : '#';
}
export function referenceMap(chapters) {
  const refs = {};
  for (const chapter of chapters) {
    const { number, content = [] } = chapter.data;
    refs[`chapter:${number}`] = chapterHref(chapter);
    for (const block of content) {
      for (const target of block._type === 'table' ? block.rows.flatMap((r) => r.cells) : [block]) {
        const code = codeId(target, number);
        if (code) refs[code.toUpperCase()] = `${chapterHref(chapter)}#${code}`;
      }
    }
  }
  return refs;
}
function linkText(text, refs, activeCode) {
  const regex =
    /\[(VN-direct|VN-adjacent|general)\]|\b(?:chapter\s+\d+|(?:R|F|CF|NP|CS)-[CG]\d+)\b/gi;
  let result = '',
    from = 0;
  for (const match of text.matchAll(regex)) {
    result += escapeHtml(text.slice(from, match.index));
    if (match[1])
      result += `<button type="button" class="evidence-badge" data-evidence-filter="${escapeHtml(match[1])}" aria-label="Focus ${escapeHtml(match[1])} evidence">${escapeHtml(match[0])}</button>`;
    else {
      const lookup = /^chapter/i.test(match[0])
        ? `chapter:${match[0].match(/\d+/)[0]}`
        : match[0].toUpperCase();
      const href = refs[lookup];
      result +=
        href && lookup.toLowerCase() !== activeCode
          ? `<a href="${escapeHtml(safeHref(href))}">${escapeHtml(match[0])}</a>`
          : escapeHtml(match[0]);
    }
    from = match.index + match[0].length;
  }
  return result + escapeHtml(text.slice(from));
}
export function renderSpans(spans = [], defs = [], refs = {}, activeCode) {
  return spans
    .map((span) => {
      const link = (span.marks ?? [])
        .map((mark) => defs.find((d) => d._key === mark))
        .find((d) => d?._type === 'link');
      let output = link ? escapeHtml(span.text) : linkText(span.text ?? '', refs, activeCode);
      for (const mark of span.marks ?? []) {
        const tag = {
          strong: 'strong',
          em: 'em',
          code: 'code',
          'strike-through': 's',
          underline: 'u',
          subscript: 'sub',
          superscript: 'sup',
        }[mark];
        if (tag) output = `<${tag}>${output}</${tag}>`;
      }
      return link ? `<a href="${escapeHtml(safeHref(link.href))}">${output}</a>` : output;
    })
    .join('');
}
function evidenceAttr(node) {
  const labels = [
    ...new Set([...textOf(node).matchAll(/\[(VN-direct|VN-adjacent|general)\]/g)].map((m) => m[1])),
  ];
  return labels.length ? ` data-evidence="${labels.join(' ')}"` : '';
}
export function renderReport(blocks = [], { refs = {}, number = 0 } = {}) {
  let html = '',
    list = null;
  const closeList = () => {
    if (list) {
      html += `</${list.tag}>`;
      list = null;
    }
  };
  for (const block of blocks) {
    if (block.listItem) {
      const tag = block.listItem === 'number' ? 'ol' : 'ul';
      if (list?.tag !== tag || list?.id !== block.listId) {
        closeList();
        html += `<${tag}${tag === 'ol' ? ` start="${Number(block.listStart) || 1}"` : ''}>`;
        list = { tag, id: block.listId };
      }
      html += `<li${evidenceAttr(block)}>${renderSpans(block.children, block.markDefs, refs)}</li>`;
      continue;
    }
    closeList();
    if (block._type === 'break') {
      html += '<hr />';
      continue;
    }
    if (block._type === 'table') {
      const rows = block.rows ?? [];
      const renderRow = (row, isHead) =>
        `<tr>${row.cells
          .map((cell) => {
            const tag = cell.isHeader ? 'th' : 'td';
            const code = codeId(cell, number);
            const spans = ` colspan="${Math.max(1, Math.min(100, Number(cell.colspan) || 1))}" rowspan="${Math.max(1, Math.min(100, Number(cell.rowspan) || 1))}"`;
            return `<${tag}${code ? ` id="${code}"` : ''}${cell.isHeader ? ` scope="${isHead ? 'col' : 'row'}"` : ''}${spans}${evidenceAttr(cell)}>${renderSpans(cell.content, cell.markDefs ?? block.markDefs, refs, code)}</${tag}>`;
          })
          .join('')}</tr>`;
      html += `<div class="table-scroll" role="region" aria-label="Report table; scroll horizontally if needed" tabindex="0"><table>${
        block.hasHeaderRow
          ? `<thead>${rows
              .slice(0, 1)
              .map((row) => renderRow(row, true))
              .join('')}</thead>`
          : ''
      }<tbody>${rows
        .slice(block.hasHeaderRow ? 1 : 0)
        .map((row) => renderRow(row, false))
        .join('')}</tbody></table></div>`;
      continue;
    }
    if (block._type === 'block') {
      const code = codeId(block, number);
      const isHeading = /^h[1-6]$/.test(block.style ?? '');
      const tag = isHeading ? block.style : block.style === 'blockquote' ? 'blockquote' : 'p';
      const id = isHeading ? headingId(block) : code;
      html += `<${tag}${id ? ` id="${escapeHtml(id)}"` : ''}${evidenceAttr(block)}>${renderSpans(block.children, block.markDefs, refs, code)}${isHeading ? `<a class="heading-anchor" aria-label="Link to section" href="#${escapeHtml(id)}">#</a>` : ''}</${tag}>`;
      continue;
    }
    // Report collections use text, lists, tables and rules. Unsupported inserted
    // block types stay visible as an editorial notice, never silently disappear.
    html += '<p class="notice">This content block requires a report renderer update.</p>';
  }
  closeList();
  return html;
}
