import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { convertReport, parse, buildSeed } from '../scripts/import-report.mjs';
import { parts, textOf, headingId, codeId, chapterHref } from '../src/lib/report.mjs';
import { renderReport, referenceMap, safeHref } from '../src/lib/render.mjs';
const markdown = fs.readFileSync(new URL('../content/report.md', import.meta.url), 'utf8');
const seed = convertReport(markdown);
const chapters = seed.content.chapters.map((c) => ({ ...c, id: c.slug }));
const all = [...seed.content.report[0].data.content, ...chapters.flatMap((c) => c.data.content)];
function walk(node, fn) {
  fn(node);
  for (const child of node.children ?? []) walk(child, fn);
}
function textLeaves(node) {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  return (node.children ?? []).map(textLeaves).join('');
}

test('deterministic import preserves all 19 chapters and eight parts', () => {
  assert.deepEqual(
    chapters.map((c) => c.data.number),
    Array.from({ length: 19 }, (_, i) => i + 1),
  );
  assert.deepEqual([...new Set(chapters.map((c) => c.data.part_title))], parts);
  assert.equal(buildSeed(), buildSeed());
  assert.equal(new Set(chapters.map((c) => c.slug)).size, 19);
});
test('all paragraphs, list items, table cells and body headings retain exact text in source order', () => {
  const expected = [];
  walk(parse(markdown), (node) => {
    if (
      node.type === 'paragraph' ||
      node.type === 'tableCell' ||
      (node.type === 'heading' &&
        node.depth >= 2 &&
        !(node.depth === 2 && /^\d+\. /.test(textOf(node))))
    )
      expected.push(textLeaves(node));
  });
  const actual = all.flatMap((b) =>
    b._type === 'block'
      ? [textOf(b)]
      : b._type === 'table'
        ? b.rows.flatMap((r) => r.cells.map((c) => textOf(c)))
        : [],
  );
  assert.deepEqual(actual, expected);
});
test('all 27 tables and all 966 cells survive import, including inline formatting', () => {
  const tables = all.filter((b) => b._type === 'table');
  assert.equal(tables.length, 27);
  assert.equal(
    tables.reduce((n, t) => n + t.rows.reduce((n, r) => n + r.cells.length, 0), 0),
    966,
  );
  assert.ok(
    tables.some((t) =>
      t.rows.some((r) => r.cells.some((c) => c.content.some((s) => s.marks?.includes('strong')))),
    ),
  );
});
test('source URLs remain unchanged and marks are present', () => {
  const expected = [];
  walk(parse(markdown), (n) => {
    if (n.type === 'link') expected.push(n.url);
  });
  const actual = all
    .flatMap((b) =>
      b._type === 'table'
        ? b.rows.flatMap((r) => r.cells.flatMap((c) => c.markDefs ?? []))
        : (b.markDefs ?? []),
    )
    .filter((d) => d._type === 'link')
    .map((d) => d.href);
  assert.deepEqual(actual, expected);
});
test('every generated chapter/code reference has an existing destination and anchors are unique', () => {
  const refs = referenceMap(chapters);
  const valid = new Set(chapters.map(chapterHref));
  for (const c of chapters) {
    const ids = c.data.content
      .flatMap((b) => (b._type === 'table' ? b.rows.flatMap((r) => r.cells) : [b]))
      .map((b) => (/^h[1-6]$/.test(b.style ?? '') ? headingId(b) : codeId(b, c.data.number)))
      .filter(Boolean);
    assert.equal(ids.length, new Set(ids).size);
    ids.forEach((id) => valid.add(`${chapterHref(c)}#${id}`));
  }
  Object.values(refs).forEach((href) => assert.ok(valid.has(href), href));
  assert.ok(refs['R-G1']);
  assert.ok(refs['CF-G3']);
  assert.ok(refs['NP-C1']);
});
test('renderer escapes script content and rejects unsafe URL schemes', () => {
  const block = {
    _type: 'block',
    _key: 'x',
    style: 'normal',
    children: [{ _type: 'span', text: '<script>alert(1)</script>', marks: ['a'] }],
    markDefs: [{ _key: 'a', _type: 'link', href: 'javascript:alert(1)' }],
  };
  const html = renderReport([block]);
  assert.ok(!html.includes('<script>'));
  assert.ok(!html.includes('javascript:'));
  assert.match(html, /&lt;script&gt;/);
  assert.equal(safeHref('//evil.example'), '#');
  assert.equal(safeHref('data:text/html,test'), '#');
});
test('evidence rendering only marks explicitly labelled blocks and keeps normal context', () => {
  const mk = (text) => ({ _type: 'block', _key: 'b', children: [{ _type: 'span', text }] });
  const html = renderReport([mk('This is context.'), mk('Finding [VN-direct]')]);
  assert.equal((html.match(/data-evidence="/g) ?? []).length, 1);
  assert.match(html, /data-evidence-filter="VN-direct"/);
  assert.match(html, /<p>This is context\.<\/p>/);
});
test('ordered list starts survive separate numbered action groups', () => {
  const starts = [];
  walk(parse(markdown), (n) => {
    if (n.type === 'list' && n.ordered) starts.push(n.start);
  });
  const actual = all
    .filter((b) => b.listItem === 'number')
    .filter((b, i, arr) => arr.findIndex((x) => x.listId === b.listId) === i)
    .map((b) => b.listStart);
  assert.deepEqual(actual, starts);
});
