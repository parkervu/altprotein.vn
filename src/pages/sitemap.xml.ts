import type { APIRoute } from 'astro';
import { DATASETS } from '../lib/datasets';
import { PAGES, localize, pagePath } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...PAGES.map((p) => pagePath(p.id)),
    '/report',
    '/briefs',
    '/appendices',
    '/data',
    '/glossary',
    '/about',
    ...DATASETS.map((d) => `/data/${d.slug}`),
  ];
  const urls = paths.flatMap((p) => [p, localize(p, 'vi')]).map((p) => `<url><loc>${new URL(p, site).href}</loc></url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } },
  );
};
