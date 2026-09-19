import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:4321',
    headless: true,
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
  },
  webServer: {
    command: 'pnpm exec astro dev --host 127.0.0.1 --ignore-lock',
    url: 'http://127.0.0.1:4321/_emdash/api/setup/status',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
