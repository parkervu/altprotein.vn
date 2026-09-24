import type { APIRoute } from 'astro';
import { mayPreview } from '../../lib/content';
import { PAGE_BY_ID, pagePath } from '../../lib/site';

/** EmDash's URL pattern for report pages; forwards to the page's canonical path (keeping preview tokens). */
export const GET: APIRoute = ({ params, url, locals, redirect }) => {
  if (url.searchParams.has('_preview') && !mayPreview(locals.user))
    return new Response('Editor sign-in is required for previews.', {
      status: 403,
      headers: { 'Cache-Control': 'private, no-store' },
    });
  const id = params.slug ?? '';
  if (!PAGE_BY_ID.has(id)) return new Response('Not found', { status: 404 });
  return redirect(`${pagePath(id)}${url.search}`, 302);
};
