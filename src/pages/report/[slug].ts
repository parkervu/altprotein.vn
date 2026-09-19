import type { APIRoute } from 'astro';
import { mayPreview } from '../../lib/content';
export const GET: APIRoute = ({ url, locals, redirect }) => {
  if (url.searchParams.has('_preview') && !mayPreview(locals.user))
    return new Response('Editor sign-in is required for previews.', {
      status: 403,
      headers: { 'Cache-Control': 'private, no-store' },
    });
  return redirect(`/about${url.search}`, 302);
};
