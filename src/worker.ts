// Cloudflare Worker entry: EmDash's request handler plus its scheduled maintenance.
// Type-checked by Wrangler (worker-configuration.d.ts), not by `astro check`, so that the
// Workers runtime types do not replace the DOM types used by the browser scripts.
import handler, { createScheduledHandler, PluginBridge } from '@emdash-cms/cloudflare/worker';

export { PluginBridge };

export default {
  ...handler,
  scheduled: createScheduledHandler(),
};
