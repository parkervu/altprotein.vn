import type { APIRoute } from 'astro';
import { getChapters } from '../lib/content';
import { chapterHref } from '../lib/report.mjs';
import { escapeHtml } from '../lib/render.mjs';
export const GET: APIRoute = async ({ site }) => {
  const chapters = await getChapters();
  const paths = ['/', '/about', ...chapters.map(chapterHref)];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escapeHtml(new URL(path, site).href)}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
