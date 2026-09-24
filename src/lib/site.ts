import site from '../generated/site.json';
import type { Lang } from './i18n';

export type Section = 'front' | 'report' | 'brief' | 'appendix';

export interface PageMeta {
  id: string;
  title: string;
  short_title: string;
  heading: string;
  section: Section;
  part: string | null;
  order: number;
  lang: string;
  bilingual: boolean;
  summary: string;
  subtitle: string | null;
  audiences: string[];
  reading_time_min: number | null;
  key_numbers: string[];
  charts: string[];
  related_data: string[];
  related_pages: string[];
  new_in: string | null;
}

export interface NavItem {
  label?: string;
  page?: string;
  lang?: string;
  new_in_edition?: string;
  children?: NavItem[];
}

export const SITE = site as unknown as {
  title: string;
  publisher: string;
  edition: string;
  editions: { edition: string; date: string; note: string }[];
  audiences: Record<string, string>;
  audience_paths: Record<string, string[]>;
  nav: NavItem[];
  pages: PageMeta[];
};

export const PAGES = SITE.pages;
export const PAGE_BY_ID = new Map(PAGES.map((p) => [p.id, p]));
export const AUDIENCES = Object.keys(SITE.audiences).filter((a) => a in SITE.audience_paths);

/** Front pages have short, readable paths; everything else lives under its section. */
const FRONT_PATHS: Record<string, string> = {
  'front-cover': '/',
  'front-exec-summary': '/summary',
  'front-exec-summary-vi': '/tom-tat',
  'front-at-a-glance': '/at-a-glance',
  'front-how-to-read': '/how-to-read',
};
const SECTION_PATHS: Record<Section, string> = {
  front: '',
  report: '/report',
  brief: '/briefs',
  appendix: '/appendices',
};

export function pagePath(id: string): string {
  if (FRONT_PATHS[id]) return FRONT_PATHS[id];
  const page = PAGE_BY_ID.get(id);
  if (!page) throw new Error(`Unknown page ${id}`);
  return `${SECTION_PATHS[page.section]}/${id}`;
}

const PATH_TO_ID = new Map(PAGES.map((p) => [pagePath(p.id), p.id]));
export function pageIdForPath(pathname: string): string | undefined {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return PATH_TO_ID.get(clean);
}

/** Prefix an internal path with the interface language. */
export function localize(path: string, lang: Lang): string {
  if (
    lang === 'en' ||
    /^(https?:|mailto:|#)/.test(path) ||
    (path.startsWith('/data/') && /\.\w+$/.test(path))
  )
    return path;
  if (path.startsWith('/downloads/') || path.startsWith('/_emdash')) return path;
  return path === '/' ? '/vi' : `/vi${path}`;
}

export function href(id: string, lang: Lang, anchor?: string): string {
  return localize(pagePath(id), lang) + (anchor ? `#${anchor}` : '');
}

/** Pages in reading order (the order of the navigation tree). */
export const READING_ORDER: string[] = (() => {
  const ids: string[] = [];
  const walk = (items: NavItem[]) =>
    items.forEach((item) => {
      if (item.page && !ids.includes(item.page)) ids.push(item.page);
      if (item.children) walk(item.children);
    });
  walk(SITE.nav);
  for (const p of PAGES) if (!ids.includes(p.id)) ids.push(p.id);
  return ids;
})();

export function neighbours(id: string) {
  const i = READING_ORDER.indexOf(id);
  const prev = i > 0 ? PAGE_BY_ID.get(READING_ORDER[i - 1]) : undefined;
  const next =
    i >= 0 && i < READING_ORDER.length - 1 ? PAGE_BY_ID.get(READING_ORDER[i + 1]) : undefined;
  return { prev, next };
}

export const PARTS = [
  ...new Set(PAGES.filter((p) => p.section === 'report').map((p) => p.part as string)),
];

export function chapterNumber(id: string): number | null {
  const m = /^ch(\d+)-/.exec(id);
  return m ? Number(m[1]) : null;
}

export function appendixLetter(id: string): string | null {
  const m = /^app-([a-z])-/.exec(id);
  return m ? m[1].toUpperCase() : null;
}
