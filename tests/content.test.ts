import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import { renderMarkdown } from '../src/lib/markdown';
import {
  APPENDIX_GROUPS,
  PAGES,
  PAGE_BY_ID,
  ROLE,
  appendixCode,
  pageIdForPath,
  pagePath,
  localize,
  READING_ORDER,
} from '../src/lib/site';
import { MOVED_PAGES } from '../src/lib/redirects';
import { PLAY_ROWS, PRESETS, weightedScore } from '../src/lib/widgets';
import { cleanSnippet, searchRecords } from '../src/lib/search';
import { STRINGS } from '../src/lib/i18n';

const seed = JSON.parse(fs.readFileSync('seed/seed.json', 'utf8'));
const entries: { id: string; data: { body: string } }[] = seed.content.pages;
const strip = (html: string) =>
  html.replace(/<code>[\s\S]*?<\/code>/g, '').replace(/<[^>]+>/g, ' ');

test('the seed holds every manifest page once, with its Markdown body', () => {
  assert.equal(entries.length, PAGES.length);
  assert.equal(entries.length, 81);
  assert.deepEqual(new Set(entries.map((e) => e.id)), new Set(PAGES.map((p) => p.id)));
  for (const e of entries) {
    const file = fs.readFileSync(
      `report/${JSON.parse(fs.readFileSync('report/site-manifest.json', 'utf8')).pages.find((p: { id: string }) => p.id === e.id).path}`,
      'utf8',
    );
    assert.ok(file.endsWith(e.data.body), `${e.id} body differs from the package`);
  }
});

test('every page renders with no unrendered report tokens', () => {
  for (const e of entries) {
    const r = renderMarkdown(e.data.body, {
      lang: 'en',
      pageId: e.id,
      contentLang: PAGE_BY_ID.get(e.id)!.lang,
    });
    const leftovers = strip(r.html).match(
      /\[@[A-Z]|\{(VN-direct|VN-adjacent|general)|\{fx:|\[\[[a-z]|\{\{(kn|chart):/g,
    );
    assert.equal(leftovers, null, `${e.id}: ${leftovers?.join(' ')}`);
    assert.ok(
      !/<script/i.test(
        r.html.replace(
          /<script type="application\/json" class="plays-data">[\s\S]*?<\/script>/,
          '',
        ),
      ),
      `${e.id} contains a script tag`,
    );
  }
});

test('evidence and foresight tags become badges, one per token', () => {
  for (const e of entries) {
    const body = e.data.body.replace(/`[^`]*`/g, '');
    const tags =
      body.match(/\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}/g)?.length ?? 0;
    const fx =
      body.match(/\{fx:(trend|projection|estimate|signal|wildcard|vision)\}/g)?.length ?? 0;
    const r = renderMarkdown(e.data.body, { lang: 'en', pageId: e.id });
    const html = r.html.replace(/<details class="kn-more">[\s\S]*?<\/details>/g, '');
    const kn = e.data.body.match(/\{\{kn:/g)?.length ?? 0;
    const charts = [...e.data.body.matchAll(/\{\{chart:([a-z0-9-]+)\}\}/g)].length;
    const evBadges = html.match(/class="ev"/g)?.length ?? 0;
    // Tiles and charts add their own evidence badge; the plays and scenario widgets add foresight badges.
    assert.ok(
      evBadges >= tags && evBadges <= tags + kn + charts,
      `${e.id}: ${evBadges} badges for ${tags} tags`,
    );
    assert.ok((html.match(/class="fx"/g)?.length ?? 0) >= fx, `${e.id}: foresight badges`);
  }
});

test('vision badges appear only on the vision chapter', () => {
  for (const e of entries) {
    const r = renderMarkdown(e.data.body, { lang: 'en', pageId: e.id });
    const inline = r.html.replace(/<figure class="kn[\s\S]*?<\/figure>/g, '');
    if (e.id !== ROLE.vision) assert.ok(!inline.includes('data-fx="vision"'), e.id);
  }
});

test('citations are numbered in order and resolve to sources', () => {
  const e = entries.find((x) => x.id === 'ch01-why-vietnam')!;
  const r = renderMarkdown(e.data.body, { lang: 'en', pageId: e.id });
  assert.ok(r.citations.length > 10);
  const numbers = [...r.html.matchAll(/data-src="[^"]+"[^>]*>(\d+)<\/a>/g)].map((m) =>
    Number(m[1]),
  );
  let max = 0;
  for (const n of numbers) {
    assert.ok(n <= max + 1, 'citation numbers appear in order of first use');
    max = Math.max(max, n);
  }
  assert.equal(max, r.citations.length);
});

test('callouts are classified, with corrections styled consistently', () => {
  const all = entries
    .map((e) => renderMarkdown(e.data.body, { lang: 'en', pageId: e.id }).html)
    .join('\n');
  const corrections = entries
    .map((e) => e.data.body.match(/^> \*\*Correction[^*]*\*\*/gm)?.length ?? 0)
    .reduce((a, b) => a + b, 0);
  assert.ok(corrections > 0);
  assert.equal(all.match(/callout-correction/g)?.length, corrections);
  assert.ok(all.includes('callout-draft'));
  assert.ok(all.includes('callout-vision'));
  assert.ok(all.includes('callout-speculative'));
  assert.ok(!all.includes('<blockquote><p><strong>'));
});

test('tables keep escaped tag pipes inside cells', () => {
  const e = entries.find((x) => x.id === ROLE.plays)!;
  const html = renderMarkdown(e.data.body, { lang: 'en', pageId: e.id }).html;
  assert.match(
    html,
    /<td>Source: AltProtein Vietnam scoring|<p>Source: AltProtein Vietnam scoring/,
  );
  const rows = html.match(/<tr>[\s\S]*?<\/tr>/g)!;
  for (const row of rows) assert.ok(!row.includes('\\|'));
});

test('raw HTML is escaped except source anchors and line breaks', () => {
  const html = renderMarkdown(
    '<a id="MAC-04"></a> text <img src=x onerror=alert(1)> <br>\n\n<script>alert(1)</script>',
    { lang: 'en' },
  ).html;
  assert.ok(html.includes('id="MAC-04"'));
  assert.ok(!html.includes('<img'));
  assert.ok(!html.includes('<script'));
  assert.ok(html.includes('&lt;script&gt;'));
});

test('links reject javascript URLs', () => {
  const html = renderMarkdown('[x](javascript:alert(1))', { lang: 'en' }).html;
  assert.ok(!html.includes('javascript:'));
});

test('page paths round-trip, and the Vietnamese interface prefixes them', () => {
  for (const p of PAGES) assert.equal(pageIdForPath(pagePath(p.id)), p.id);
  assert.equal(pagePath('front-cover'), '/');
  assert.equal(pagePath('ch26-plays'), '/report/ch26-plays');
  assert.equal(pagePath('app-m1-method'), '/appendices/app-m1-method');
  assert.equal(pagePath('front-prologue-vi'), '/loi-mo-dau');
  assert.equal(localize('/', 'vi'), '/vi');
  assert.equal(localize('/report/ch26-plays', 'vi'), '/vi/report/ch26-plays');
  assert.equal(localize('/data/companies.csv', 'vi'), '/data/companies.csv');
  assert.equal(localize('/downloads/x.zip', 'vi'), '/downloads/x.zip');
  assert.equal(READING_ORDER.length, PAGES.length);
});

test('balanced play scores match the table in chapter 11', () => {
  const balanced = PRESETS.find((p) => p.preset_id === 'balanced')!;
  const expected: Record<string, number> = {
    T1: 3.8,
    T2: 3.45,
    T3: 2.65,
    T4: 3.9,
    T5: 3.45,
    T6: 3.3,
    T7: 2.1,
    T8: 1.55,
    T9: 3.0,
    T10: 3.05,
  };
  for (const p of PLAY_ROWS)
    assert.equal(weightedScore(p, balanced).toFixed(2), expected[p.play_id].toFixed(2), p.play_id);
});

test('top three plays per preset match chapter 11', () => {
  const top = (id: string) => {
    const preset = PRESETS.find((p) => p.preset_id === id)!;
    return PLAY_ROWS.map((p) => [p.play_id, weightedScore(p, preset)] as const)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([k, v]) => `${k} ${v.toFixed(2)}`);
  };
  assert.deepEqual(top('investors'), ['T1 3.80', 'T4 3.50']);
  assert.deepEqual(top('startups'), ['T1 4.15', 'T4 3.85']);
  assert.deepEqual(top('research'), ['T4 4.15', 'T5 4.00']);
});

test('search finds glossary terms in either language and cleans snippets', () => {
  assert.ok(searchRecords('protein thay the').some((r) => r.id === 'GL-001'));
  assert.ok(searchRecords('Emmay').some((r) => r.kind === 'company'));
  assert.equal(
    cleanSnippet('a [@MAC-04] b {VN-direct|High} c [[ch26-plays]] d {dx:revealed}'),
    'a b c Plays d',
  );
});

test('interface strings use no em or en dashes', () => {
  const text = JSON.stringify(STRINGS, (_k, v) => (typeof v === 'function' ? v(1, 'x') : v));
  assert.ok(!/[–—]/.test(text));
});

test('every chart spec is rendered, themed only through CSS variables', async () => {
  const { CHARTS } = await import('../src/lib/charts');
  const specs = JSON.parse(fs.readFileSync('report/charts/chart-specs.json', 'utf8')).charts as {
    id: string;
  }[];
  assert.equal(Object.keys(CHARTS).length, specs.length);
  for (const spec of specs) {
    const c = CHARTS[spec.id];
    assert.ok(c?.svg, spec.id);
    assert.ok(
      !/#[0-9a-f]{3,6}\b|rgb\(/i.test(c.svg.replace(/href="#[^"]*"/g, '')),
      `${spec.id} hardcodes a colour`,
    );
    assert.ok(!/[–—]/.test(c.svg + c.table), `${spec.id} has a dash`);
  }
});

test('every page the interface refers to by role exists', () => {
  for (const [role, id] of Object.entries(ROLE)) assert.ok(PAGE_BY_ID.has(id), `${role}: ${id}`);
  const manifest = JSON.parse(fs.readFileSync('report/site-manifest.json', 'utf8'));
  assert.equal(ROLE.vision, manifest.tokens.foresight_tag.vision_only_on);
});

test('pages moved in v0.6 redirect to pages that exist, and no old id is reused', () => {
  for (const [from, to] of Object.entries(MOVED_PAGES)) {
    assert.ok(PAGE_BY_ID.has(to), `${from} -> ${to}`);
    assert.ok(!PAGE_BY_ID.has(from), `${from} is a current page id`);
  }
});

test('appendix codes and groups follow the manifest', () => {
  assert.deepEqual(
    APPENDIX_GROUPS.map((g) => g.id),
    ['m', 's', 'd', 'f', 'r'],
  );
  assert.equal(appendixCode('app-s13-science'), 'S13');
  assert.equal(
    APPENDIX_GROUPS.flatMap((g) => g.pages).length,
    PAGES.filter((p) => p.section === 'appendix').length,
  );
});

test('demand evidence tags become their own badge', () => {
  const html = renderMarkdown('Buyers pay more {VN-direct|High} {dx:revealed}.', {
    lang: 'en',
  }).html;
  assert.match(html, /class="dx" data-dx="revealed"/);
  assert.match(html, /class="ev"/);
});
