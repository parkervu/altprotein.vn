// Builds seed/seed.json (the EmDash schema and the initial content) from report/content.
// The Markdown body of each page is stored verbatim, with its report tokens intact.
// `--check` fails when the committed seed is out of date instead of rewriting it.
import fs from 'node:fs';
import path from 'node:path';
import { loadPages, readJson, ROOT } from './lib/report.mjs';

const SEED = path.join(ROOT, 'seed/seed.json');
const manifest = readJson('site-manifest.json');
const field = (slug, label, type, extra = {}) => ({ slug, label, type, ...extra });

export function buildSeed() {
  const pages = loadPages();
  return {
    $schema: 'https://emdashcms.com/seed.schema.json',
    version: '1',
    defaultLocale: 'en',
    meta: {
      name: manifest.title,
      author: manifest.publisher,
      description: manifest.edition,
    },
    settings: {
      title: 'AltProtein Vietnam',
      tagline: manifest.title,
      url: 'https://scoping.altprotein.vn',
      timezone: 'Asia/Ho_Chi_Minh',
    },
    collections: [
      {
        slug: 'pages',
        label: 'Report pages',
        labelSingular: 'Report page',
        description:
          'Every page of the study: front matter, chapters, briefs and appendices. The body is Markdown with the report tokens described in report/STYLE.md.',
        urlPattern: '/p/{slug}',
        supports: ['drafts', 'revisions', 'preview', 'search'],
        admin: { listColumns: ['short_title'] },
        fields: [
          field('title', 'Title', 'string', { required: true }),
          field('short_title', 'Short title (navigation)', 'string', { required: true }),
          field('subtitle', 'Subtitle', 'string'),
          field('summary', 'Summary (cards and meta description)', 'text', { options: { rows: 3 } }),
          field('body', 'Body (Markdown with report tokens)', 'text', {
            required: true,
            searchable: true,
            options: { rows: 36 },
          }),
        ],
      },
    ],
    content: {
      pages: pages.map(({ meta, body }) => ({
        id: meta.id,
        slug: meta.id,
        status: 'published',
        locale: 'en',
        data: {
          title: meta.title,
          short_title: meta.short_title,
          ...(meta.subtitle ? { subtitle: meta.subtitle } : {}),
          summary: meta.summary,
          body: body.replace(/^\n+/, ''),
        },
      })),
    },
  };
}

const json = `${JSON.stringify(buildSeed(), null, 1)}\n`;
if (process.argv.includes('--check')) {
  const current = fs.existsSync(SEED) ? fs.readFileSync(SEED, 'utf8') : '';
  if (current !== json) {
    console.error('seed/seed.json is out of date. Run `pnpm content:seed`.');
    process.exit(1);
  }
  console.log('seed/seed.json matches report/content.');
} else {
  fs.mkdirSync(path.dirname(SEED), { recursive: true });
  fs.writeFileSync(SEED, json);
  console.log(`Wrote ${path.relative(ROOT, SEED)}.`);
}
