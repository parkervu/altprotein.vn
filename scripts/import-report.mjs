import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { parts, slugify, textOf } from '../src/lib/report.mjs';

export const parse = (markdown) => unified().use(remarkParse).use(remarkGfm).parse(markdown);
export function convertReport(markdown) {
  const ast = parse(markdown);
  let serial = 0;
  const key = () => `r${(++serial).toString(36)}`;
  function inline(nodes, marks = [], defs = []) {
    return nodes.flatMap((node) => {
      if (node.type === 'text' || node.type === 'inlineCode')
        return [
          {
            _type: 'span',
            _key: key(),
            text: node.value,
            marks: node.type === 'inlineCode' ? [...marks, 'code'] : marks,
          },
        ];
      if (node.type === 'break') return [{ _type: 'span', _key: key(), text: '\n', marks }];
      if (['strong', 'emphasis', 'delete'].includes(node.type))
        return inline(
          node.children,
          [...marks, { strong: 'strong', emphasis: 'em', delete: 'strike-through' }[node.type]],
          defs,
        );
      if (node.type === 'link') {
        const id = key();
        defs.push({ _type: 'link', _key: id, href: node.url });
        return inline(node.children, [...marks, id], defs);
      }
      throw new Error(`Unsupported inline node: ${node.type}`);
    });
  }
  function blocks(nodes, list = null, level = 1, listMeta = {}) {
    return nodes.flatMap((node) => {
      if (node.type === 'thematicBreak') return [{ _type: 'break', _key: key() }];
      if (node.type === 'list') {
        const meta = node.ordered ? { listId: key(), listStart: node.start ?? 1 } : {};
        return node.children.flatMap((item) =>
          blocks(item.children, node.ordered ? 'number' : 'bullet', list ? level + 1 : level, meta),
        );
      }
      if (node.type === 'paragraph' || node.type === 'heading') {
        const markDefs = [];
        const children = inline(node.children, [], markDefs);
        return [
          {
            _type: 'block',
            _key: key(),
            style: node.type === 'heading' ? `h${Math.max(2, node.depth - 1)}` : 'normal',
            children,
            markDefs,
            ...(list ? { listItem: list, level, ...listMeta } : {}),
          },
        ];
      }
      if (node.type === 'table')
        return [
          {
            _type: 'table',
            _key: key(),
            hasHeaderRow: true,
            rows: node.children.map((row, ri) => ({
              _type: 'tableRow',
              _key: key(),
              cells: row.children.map((cell) => {
                const markDefs = [];
                return {
                  _type: 'tableCell',
                  _key: key(),
                  content: inline(cell.children, [], markDefs),
                  markDefs,
                  isHeader: ri === 0,
                };
              }),
            })),
          },
        ];
      throw new Error(`Unsupported block node: ${node.type}`);
    });
  }
  let part = 0,
    current = null;
  const front = [],
    chapters = [];
  for (const node of ast.children) {
    const text = textOf(node);
    if (node.type === 'heading' && node.depth === 1 && /^Part \d+\./.test(text)) {
      part = Number(text.match(/^Part (\d+)/)[1]);
      if (text !== `Part ${part}. ${parts[part - 1]}`) throw new Error(`Unexpected part: ${text}`);
    } else if (node.type === 'heading' && node.depth === 2 && /^\d+\. /.test(text)) {
      const number = Number(text.match(/^\d+/)[0]);
      const title = text.replace(/^\d+\. /, '');
      current = {
        id: `chapter-${number}`,
        slug: `${number}-${slugify(title)}`,
        status: 'published',
        locale: 'en',
        data: { title, number, part, part_title: parts[part - 1], content: [] },
      };
      chapters.push(current);
    } else if (node.type === 'heading' && node.depth === 1 && !part) {
      // The report title is preserved in metadata instead of duplicated in front matter.
    } else {
      (current ? current.data.content : front).push(...blocks([node]));
    }
  }
  const title = textOf(ast.children[0]);
  const field = (slug, label, type, extra = {}) => ({ slug, label, type, ...extra });
  const common = [
    field('title', 'Title', 'string', { required: true }),
    field('content', 'Content', 'portableText', { searchable: true }),
  ];
  return {
    $schema: 'https://emdashcms.com/seed.schema.json',
    version: '1',
    defaultLocale: 'en',
    meta: {
      name: 'Vietnam novel protein scoping report',
      author: 'altprotein.vn',
      description: 'Complete second public revision, 18 September 2026',
    },
    settings: {
      title: 'altprotein.vn',
      tagline: 'A supply-side scoping study of alternative protein in Vietnam',
      url: 'https://scoping.altprotein.vn',
      timezone: 'Asia/Ho_Chi_Minh',
    },
    collections: [
      {
        slug: 'report',
        label: 'Report',
        labelSingular: 'Report',
        urlPattern: '/about',
        supports: ['drafts', 'revisions', 'preview', 'seo'],
        fields: [
          ...common,
          field('subtitle', 'Subtitle', 'string'),
          field('revision_date', 'Revision date', 'string'),
          field('revision_label', 'Revision label', 'string'),
        ],
      },
      {
        slug: 'chapters',
        label: 'Chapters',
        labelSingular: 'Chapter',
        urlPattern: '/chapters/{slug}',
        supports: ['drafts', 'revisions', 'preview', 'seo'],
        admin: { listColumns: ['number', 'part'] },
        fields: [
          ...common,
          field('number', 'Chapter number', 'number', { required: true, indexed: true }),
          field('part', 'Part number', 'number', { required: true }),
          field('part_title', 'Part title', 'string', { required: true }),
        ],
      },
    ],
    content: {
      report: [
        {
          id: 'report',
          slug: 'report',
          status: 'published',
          locale: 'en',
          data: {
            title,
            subtitle: 'A supply-side scoping study of alternative protein in Vietnam',
            revision_date: '2026-09-18',
            revision_label: 'Second public revision',
            content: front,
          },
        },
      ],
      chapters,
    },
  };
}
export function buildSeed() {
  const markdown = fs.readFileSync(new URL('../content/report.md', import.meta.url), 'utf8');
  const seed = convertReport(markdown);
  return JSON.stringify(seed) + '\n';
}
if (process.argv[1] && import.meta.url === new URL(process.argv[1], 'file:').href) {
  const output = new URL('../seed/seed.json', import.meta.url);
  const seed = buildSeed();
  if (process.argv.includes('--check')) {
    if (fs.readFileSync(output, 'utf8') !== seed)
      throw new Error('Seed differs from source: run pnpm content:import');
    console.log('Seed matches source:', createHash('sha256').update(seed).digest('hex'));
  } else {
    fs.writeFileSync(output, seed);
    console.log('Imported 19 chapters and report metadata.');
  }
}
