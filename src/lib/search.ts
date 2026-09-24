import { search } from 'emdash';
import recordsJson from '../generated/search-records.json';
import { PAGE_BY_ID } from './site';

export interface SearchRecord {
  kind: string;
  id: string;
  title: string;
  title_vi?: string;
  text: string;
  href: string;
  keywords?: string;
}
const RECORDS = recordsJson as SearchRecord[];

const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
const INDEX = RECORDS.map((r) => ({
  r,
  title: fold(`${r.id} ${r.title} ${r.title_vi ?? ''}`),
  body: fold(`${r.text} ${r.keywords ?? ''}`),
}));

export function terms(query: string): string[] {
  return fold(query)
    .split(/[^\p{L}\p{N}.-]+/u)
    .map((t) => t.replace(/^[.-]+|[.-]+$/g, ''))
    .filter((t) => t.length > 1)
    .slice(0, 8);
}

/** Search glossary terms and the main data tables (bundled at build time). */
export function searchRecords(query: string, limit = 60) {
  const words = terms(query);
  if (!words.length) return [];
  return INDEX.map(({ r, title, body }) => {
    let score = 0;
    for (const w of words) {
      if (title.includes(w)) score += title.startsWith(w) || title.includes(` ${w}`) ? 6 : 4;
      else if (body.includes(w)) score += 1;
      else return null;
    }
    return { ...r, score };
  })
    .filter((x): x is SearchRecord & { score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Clean report tokens out of an FTS snippet (which is already HTML-escaped, with <mark> tags). */
export function cleanSnippet(snippet: string): string {
  return snippet
    .replace(/\[@[^\]]*\]/g, '')
    .replace(/\{(VN-direct|VN-adjacent|general)\\?\|(High|Medium|Low)\}/g, '')
    .replace(/\{fx:[a-z]+\}/g, '')
    .replace(/\{\{(kn|chart):[a-z0-9-]+\}\}/g, '')
    .replace(
      /\[\[([a-z0-9-]+)(#[a-z0-9-]+)?\]\]/g,
      (_, id) => PAGE_BY_ID.get(id)?.short_title ?? id,
    )
    .replace(/(\*\*|__|-{3,}|\||^#+ |\n#+ )/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Full-text search over the report pages held in EmDash. */
export async function searchPages(query: string, limit = 30) {
  const words = terms(query);
  if (!words.length) return [];
  const fts = words.map((w) => `"${w.replace(/"/g, '')}"*`).join(' ');
  try {
    const res = await search(fts, { collections: ['pages'], limit });
    return res.items
      .filter((item) => PAGE_BY_ID.has(item.slug ?? item.id))
      .map((item) => ({
        id: item.slug ?? item.id,
        snippet: item.snippet ? cleanSnippet(item.snippet) : '',
        score: item.score,
      }));
  } catch (error) {
    console.error('Search failed', error);
    return [];
  }
}
