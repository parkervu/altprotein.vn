import { defineMiddleware } from 'astro:middleware';

/** `/vi/...` serves the same pages with a Vietnamese interface. */
export const onRequest = defineMiddleware((context, next) => {
  const { pathname, search } = context.url;
  if (pathname === '/vi' || pathname.startsWith('/vi/')) {
    const rest = pathname.slice(3) || '/';
    context.locals.lang = 'vi';
    context.locals.basePath = rest;
    return next(rest + search);
  }
  context.locals.lang ??= 'en';
  context.locals.basePath ??= pathname;
  return next();
});
