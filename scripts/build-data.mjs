// Generates the build-time data the site reads from the report package in report/.
// Outputs: src/generated/*.json (bundled into the Worker) and public/data, public/downloads (static assets).
import fs from 'node:fs';
import path from 'node:path';
import { readCsv } from './lib/csv.mjs';
import { loadPages, readJson, REPORT, ROOT } from './lib/report.mjs';
import { writeZip, zipDirectory } from './lib/zip.mjs';

const GEN = path.join(ROOT, 'src/generated');
const PUBLIC_DATA = path.join(ROOT, 'public/data');
const DOWNLOADS = path.join(ROOT, 'public/downloads');
const quiet = process.argv.includes('--quiet');

fs.rmSync(GEN, { recursive: true, force: true });
fs.rmSync(PUBLIC_DATA, { recursive: true, force: true });
fs.rmSync(DOWNLOADS, { recursive: true, force: true });
fs.mkdirSync(GEN, { recursive: true });

const write = (name, value) => fs.writeFileSync(path.join(GEN, name), JSON.stringify(value));
const split = (value) =>
  String(value || '')
    .split(/;\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

// Pages and navigation --------------------------------------------------------
const manifest = readJson('site-manifest.json');
const pages = loadPages().map(({ entry, meta, body }) => {
  const h1 = /^# (.+)$/m.exec(body);
  return {
    id: meta.id,
    title: meta.title,
    short_title: meta.short_title,
    heading: h1 ? h1[1].trim() : meta.title,
    section: meta.section,
    part: meta.part ?? null,
    order: meta.order,
    lang: Array.isArray(meta.lang) ? 'en' : meta.lang || 'en',
    bilingual: Array.isArray(meta.lang),
    summary: meta.summary,
    subtitle: meta.subtitle ?? null,
    audiences: meta.audiences || [],
    reading_time_min: meta.reading_time_min ?? null,
    key_numbers: meta.key_numbers || [],
    charts: meta.charts || [],
    related_data: meta.related_data || [],
    related_pages: meta.related_pages || [],
    new_in: /^(ch1[5-9]|ch20|app-[u-z]-)/.test(meta.id) ? '1.1' : null,
  };
});
write('site.json', {
  title: manifest.title,
  publisher: manifest.publisher,
  edition: manifest.edition,
  editions: manifest.editions,
  audiences: manifest.audiences,
  audience_paths: manifest.audience_paths,
  nav: manifest.nav,
  pages,
});

// Key numbers -----------------------------------------------------------------
write('key-numbers.json', Object.fromEntries(readJson('data/key-numbers.json').map((k) => [k.id, k])));

// Sources (compact; the full CSV is a static download) ----------------------------
const sources = readCsv(path.join(REPORT, 'data/sources.csv'));
write(
  'sources.json',
  Object.fromEntries(
    sources.map((s) => [
      s.source_id,
      { t: s.title, a: s.author_or_publisher, d: s.date, u: s.url || (s.doi ? `https://doi.org/${s.doi}` : ''), y: s.source_type },
    ]),
  ),
);

// Glossary --------------------------------------------------------------------
const glossary = readCsv(path.join(REPORT, 'data/glossary.csv'));
write('glossary.json', glossary);

// Plays, weights and scenarios for the interactive tools ------------------------------
write('plays.json', {
  plays: readCsv(path.join(REPORT, 'data/plays.csv')),
  criteria: readCsv(path.join(REPORT, 'data/play_criteria.csv')),
  presets: readCsv(path.join(REPORT, 'data/play_weight_presets.csv')),
});
write('scenarios.json', {
  scenarios: readCsv(path.join(REPORT, 'data/scenarios_2050.csv')),
  signposts: readCsv(path.join(REPORT, 'data/signposts_2050.csv')),
  robustness: readCsv(path.join(REPORT, 'data/play_robustness.csv')),
  moves: readCsv(path.join(REPORT, 'data/robust_moves.csv')),
});

// Data dictionary -------------------------------------------------------------
const dictionary = fs.readFileSync(path.join(REPORT, 'data/data-dictionary.md'), 'utf8');
const purposes = {};
for (const m of dictionary.matchAll(/^\| \[([^\]]+)\]\([^)]*\) \| ([^|]*) \| (.*) \|$/gm)) {
  purposes[m[1]] = { rows: m[2].trim(), purpose: m[3].trim() };
}
const columnDocs = {};
for (const block of dictionary.split(/^### /m).slice(1)) {
  const name = block.split('\n', 1)[0].trim();
  const cols = {};
  for (const m of block.matchAll(/^\| `([^`]+)` \| (.*?) \| (.*?) \|$/gm)) cols[m[1]] = m[2].trim();
  columnDocs[name] = cols;
}
const futuresStart = dictionary.indexOf('## Files added in the futures round');
const futuresFiles = new Set(
  [...dictionary.slice(futuresStart).matchAll(/^\| \[?`?([a-z0-9_.-]+\.(?:csv|json))/gm)].map((m) => m[1]),
);
const DATA_VIEWS = new Set([
  'companies.csv', 'facilities.csv', 'sources.csv', 'open_questions.csv', 'disagreements.csv',
  'policy_options.csv', 'routes.csv', 'retail_audit_skus.csv', 'balance_outputs.csv', 'scenarios_2050.csv',
  'signposts_2050.csv', 'play_robustness.csv', 'robust_moves.csv', 'vision_milestones.csv', 'frontier_windows.csv',
]);
const pageRefs = {};
for (const p of pages) for (const d of p.related_data) (pageRefs[d] ||= []).push(p.id);

const datasets = [];
const addDataset = (dir, file, group) => {
  const rows = readCsv(path.join(dir, file));
  const columns = rows.length ? Object.keys(rows[0]) : [];
  const docs = columnDocs[file] || {};
  datasets.push({
    file,
    slug: file.replace(/\.csv$/, '').replace(/_/g, '-'),
    group,
    href: `/data/${group === 'chart' ? 'charts/' : ''}${file}`,
    rows: rows.length,
    purpose: purposes[file]?.purpose || '',
    featured: DATA_VIEWS.has(file),
    new_in: futuresFiles.has(file) ? '1.1' : null,
    pages: pageRefs[file] || [],
    columns: columns.map((c) => ({ name: c, doc: docs[c] || '' })),
  });
};
for (const f of fs.readdirSync(path.join(REPORT, 'data')).filter((f) => f.endsWith('.csv')).sort())
  addDataset(path.join(REPORT, 'data'), f, 'data');
for (const f of fs.readdirSync(path.join(REPORT, 'charts/data')).filter((f) => f.endsWith('.csv')).sort())
  addDataset(path.join(REPORT, 'charts/data'), f, 'chart');
const slugs = new Set();
for (const d of datasets) {
  if (slugs.has(d.slug)) d.slug = `chart-${d.slug}`;
  slugs.add(d.slug);
}
write('datasets.json', datasets);

// Search records beyond the CMS pages -----------------------------------------------
const records = [];
const clip = (s, n = 220) => (s && s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s || '');
for (const g of glossary)
  records.push({
    kind: 'glossary',
    id: g.term_id,
    title: g.term_en + (g.abbreviation ? ` (${g.abbreviation})` : ''),
    title_vi: g.term_vi,
    text: clip(g.definition_en),
    href: `/glossary#${g.term_id}`,
    keywords: [g.term_vi, g.definition_vi, g.category].join(' '),
  });
const table = (file, kind, fn) => {
  const set = datasets.find((d) => d.file === file);
  for (const r of readCsv(path.join(REPORT, 'data', file))) {
    const rec = fn(r);
    records.push({ kind, href: `/data/${set.slug}?q=${encodeURIComponent(rec.id)}`, ...rec, text: clip(rec.text) });
  }
};
table('companies.csv', 'company', (r) => ({ id: r.record_id, title: r.name, text: [r.category, r.products, r.hq_province_current].filter(Boolean).join(' · '), keywords: [r.vn_name, r.key_protein_inputs, r.plant_location].join(' ') }));
table('facilities.csv', 'facility', (r) => ({ id: r.record_id, title: r.name, text: [r.type, r.owner, r.location_province_current, r.capacity && `${r.capacity} ${r.capacity_unit}`].filter(Boolean).join(' · '), keywords: [r.relevant_capability, r.location_province_former].join(' ') }));
table('open_questions.csv', 'question', (r) => ({ id: r.oq_id, title: r.question, text: r.why_it_matters, keywords: r.topic }));
table('disagreements.csv', 'disagreement', (r) => ({ id: r.dg_id, title: r.topic, text: r.position_taken, keywords: [r.claim_a, r.claim_b].join(' ') }));
table('policy_options.csv', 'policy', (r) => ({ id: r.record_id, title: r.option, text: [r.owner_agency, r.instrument_to_amend].filter(Boolean).join(' · '), keywords: r.precedent }));
write('search-records.json', records);

// Static data downloads ----------------------------------------------------------
fs.mkdirSync(path.join(PUBLIC_DATA, 'charts'), { recursive: true });
for (const f of fs.readdirSync(path.join(REPORT, 'data')))
  fs.copyFileSync(path.join(REPORT, 'data', f), path.join(PUBLIC_DATA, f));
for (const f of fs.readdirSync(path.join(REPORT, 'charts/data')))
  fs.copyFileSync(path.join(REPORT, 'charts/data', f), path.join(PUBLIC_DATA, 'charts', f));
fs.copyFileSync(path.join(REPORT, 'charts/chart-specs.json'), path.join(PUBLIC_DATA, 'chart-specs.json'));
fs.copyFileSync(path.join(REPORT, 'sources/bibliography.md'), path.join(PUBLIC_DATA, 'bibliography.md'));

zipDirectory(path.join(DOWNLOADS, 'altprotein-vn-working-papers.zip'), path.join(REPORT, 'working-papers'), 'working-papers');
const dataEntries = [];
for (const dir of ['data', 'charts', 'sources', 'tools'])
  for (const rel of fs.readdirSync(path.join(REPORT, dir), { recursive: true }).sort()) {
    const full = path.join(REPORT, dir, rel);
    if (fs.statSync(full).isFile() && !rel.includes('__pycache__')) dataEntries.push([`altprotein-vn-data/${dir}/${rel}`, full]);
  }
writeZip(path.join(DOWNLOADS, 'altprotein-vn-data.zip'), dataEntries);
const contentEntries = [];
for (const rel of fs.readdirSync(path.join(REPORT, 'content'), { recursive: true }).sort()) {
  const full = path.join(REPORT, 'content', rel);
  if (fs.statSync(full).isFile()) contentEntries.push([`altprotein-vn-report/content/${rel}`, full]);
}
for (const f of ['README.md', 'STYLE.md', 'site-manifest.json'])
  contentEntries.push([`altprotein-vn-report/${f}`, path.join(REPORT, f)]);
writeZip(path.join(DOWNLOADS, 'altprotein-vn-report-markdown.zip'), contentEntries);

// Charts (rendered to inline SVG at build time) ----------------------------------------
let charts = {};
let chartCss = '';
try {
  const mod = await import('./charts/index.mjs');
  charts = mod.renderAllCharts(REPORT);
  chartCss = mod.chartCss || '';
} catch (error) {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
  console.warn('Chart renderer not found; charts will render as placeholders.');
}
write('charts.json', charts);
fs.writeFileSync(path.join(GEN, 'charts.css'), chartCss);

if (!quiet)
  console.log(
    `Generated ${pages.length} pages, ${Object.keys(charts).length} charts, ${datasets.length} datasets, ${records.length} search records.`,
  );
