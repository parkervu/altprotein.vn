import { getEmDashEntry } from 'emdash';
import { renderMarkdown, type RenderResult } from './markdown';
import type { Lang } from './i18n';
import { PAGE_BY_ID } from './site';

export interface PageData {
  id: string;
  title: string;
  short_title: string;
  subtitle?: string | null;
  summary?: string | null;
  body: string;
  updatedAt?: Date | string;
}

export function mayPreview(user?: { role: number }) {
  return Boolean(user && user.role >= 40);
}

/** Load a report page from EmDash. Returns null when it does not exist or is unpublished. */
export async function loadPage(id: string) {
  const result = await getEmDashEntry<'pages', PageData>('pages', id);
  if (result.error && result.error.name !== 'LiveEntryNotFoundError')
    throw new Error(`Unable to load page ${id}`, { cause: result.error });
  return { entry: result.entry, isPreview: Boolean(result.isPreview) };
}

// Rendering is pure, so cache it per isolate by page, revision and language.
const cache = new Map<string, RenderResult>();
export function renderPage(id: string, body: string, lang: Lang, version: string, preview: boolean): RenderResult {
  const page = PAGE_BY_ID.get(id);
  const key = `${id}|${lang}|${version}|${body.length}`;
  const hit = !preview && cache.get(key);
  if (hit) return hit;
  const result = renderMarkdown(body, { lang, contentLang: page?.lang, pageId: id });
  if (!preview) {
    if (cache.size > 240) cache.delete(cache.keys().next().value!);
    cache.set(key, result);
  }
  return result;
}
