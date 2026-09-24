import { test, expect } from '@playwright/test';
import seed from '../../seed/seed.json' with { type: 'json' };
import site from '../../src/generated/site.json' with { type: 'json' };

test.beforeAll(async ({ request }) => {
  const response = await request.post('/_emdash/api/setup/dev-bypass');
  expect(response.ok()).toBeTruthy();
});

const FRONT: Record<string, string> = {
  'front-cover': '/',
  'front-exec-summary': '/summary',
  'front-exec-summary-vi': '/tom-tat',
  'front-at-a-glance': '/at-a-glance',
  'front-how-to-read': '/how-to-read',
};
const SECTION: Record<string, string> = { report: '/report', brief: '/briefs', appendix: '/appendices' };
const pathOf = (id: string) => {
  const page = site.pages.find((p) => p.id === id)!;
  return FRONT[id] ?? `${SECTION[page.section]}/${id}`;
};

test('every report page loads, with working in-page anchors', async ({ page }) => {
  test.setTimeout(240000);
  for (const entry of seed.content.pages) {
    const response = await page.goto(pathOf(entry.id));
    expect(response?.status(), entry.id).toBe(200);
    if (entry.id !== 'front-cover') await expect(page.locator('h1').first()).toBeVisible();
    const broken = await page
      .locator('main a[href^="#"]')
      .evaluateAll((links) =>
        links.map((a) => decodeURIComponent(a.getAttribute('href')!.slice(1))).filter((id) => id && !document.getElementById(id)),
      );
    expect(broken, entry.id).toEqual([]);
  }
});

test('routes, redirects, the Vietnamese interface and access rules', async ({ request }) => {
  expect((await request.get('/sitemap.xml')).status()).toBe(200);
  expect((await request.get('/report/no-such-page')).status()).toBe(404);
  const old = await request.get('/chapters/1-anything', { maxRedirects: 0 });
  expect(old.status()).toBe(301);
  expect(old.headers()['location']).toBe('/report');
  const p = await request.get('/pages/ch11-plays', { maxRedirects: 0 });
  expect(p.headers()['location']).toBe('/report/ch11-plays');
  expect((await request.get('/report/ch11-plays?_preview=invalid')).status()).toBe(403);
  const vi = await request.get('/vi/report/ch11-plays');
  expect(vi.status()).toBe(200);
  const html = await vi.text();
  expect(html).toContain('<html lang="vi"');
  expect(html).toContain('href="/vi/report/ch12-policy-options"');
  for (const path of ['/report', '/briefs', '/appendices', '/data', '/data/companies', '/glossary', '/about', '/search?q=cassava'])
    expect((await request.get(path)).status(), path).toBe(200);
  expect((await request.get('/data/companies.csv')).status()).toBe(200);
  expect((await request.get('/downloads/altprotein-vn-working-papers.zip')).status()).toBe(200);
});

test('plays can be re-ranked and opened', async ({ page }) => {
  await page.goto('/report/ch11-plays');
  const bars = page.locator('.plays-bars li');
  await expect(bars).toHaveCount(10);
  await expect(bars.first()).toContainText('T4');
  await page.locator('select[name="preset"]').selectOption('startups');
  await expect(bars.first()).toContainText('T1');
  await expect(bars.first()).toContainText('4.15');
  await page.locator('input[name="public_value"]').fill('50');
  await expect(page.locator('select[name="preset"]')).toHaveValue('custom');
  await bars.first().locator('button').click();
  await expect(page.locator('.play-card[open]')).toHaveCount(1);
  await expect(page.locator('.play-card[open]')).toContainText('What must be true');
});

test('scenario explorer works with the keyboard', async ({ page }) => {
  await page.goto('/report/ch18-scenarios-2050');
  const tabA = page.getByRole('tab', { name: /Regional workshop/ });
  await expect(tabA).toHaveAttribute('aria-selected', 'true');
  await tabA.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: /Security build-out/ })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#scen-panel-C')).toBeVisible();
  await expect(page.locator('#scen-panel-A')).toBeHidden();
});

test('audience choice highlights pages and persists', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Investors/ }).click();
  await expect(page.locator('[data-audience-path="investors"]')).toBeVisible();
  await page.goto('/report');
  await expect(page.locator('html')).toHaveAttribute('data-audience', 'investors');
  await expect(page.locator('.card.is-for-you').first()).toBeVisible();
});

test('data browser filters, sorts and search finds data', async ({ page }) => {
  await page.goto('/data/companies');
  await expect(page.locator('.dt-count')).toContainText('97');
  await page.getByLabel('Filter rows').fill('Vedan');
  await expect(page.locator('.dt-wrap tbody tr').first()).toContainText('Vedan');
  await page.goto('/search?q=Vedan');
  await expect(page.locator('.results li').first()).toBeVisible();
});

test('theme toggle, mobile layout and print', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/report/ch08-regional');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole('button', { name: /Menu/ }).click();
  await expect(page.locator('#drawer')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#drawer')).toBeHidden();
  await page.locator('[data-theme-toggle]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.locator('[data-theme-toggle]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('.site-header')).toBeHidden();
});
