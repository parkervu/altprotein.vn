import { test, expect } from '@playwright/test';
import seed from '../../seed/seed.json' with { type: 'json' };
test.beforeAll(async ({ request }) => {
  const response = await request.post('/_emdash/api/setup/dev-bypass');
  expect(response.ok()).toBeTruthy();
});
const chapters = seed.content.chapters;
test('dashboard, all chapters, anchors, and sitemap', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Which novel protein');
  await expect(page.locator('.rank-card')).toHaveCount(6);
  for (const c of chapters) {
    const response = await page.goto(`/chapters/${c.slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(c.data.title);
    const broken = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((a) => a.getAttribute('href')!.slice(1))
          .filter((id) => !document.getElementById(id)),
      );
    expect(broken).toEqual([]);
  }
  expect((await request.get('/sitemap.xml')).status()).toBe(200);
  expect((await request.get('/chapters/no-such-chapter')).status()).toBe(404);
  expect((await request.get('/chapters/' + chapters[0].slug + '?_preview=invalid')).status()).toBe(
    403,
  );
});
test('evidence filter and reset work with keyboard and badge clicks', async ({ page }) => {
  await page.goto('/chapters/' + chapters[1].slug);
  const button = page.getByRole('button', { name: 'VN-direct', exact: true });
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.evidence-match').first()).toBeVisible();
  await expect(page.locator('.filter-status')).toContainText('Unlabelled context stays visible');
  await page.getByRole('button', { name: 'All evidence', exact: true }).click();
  await expect(page.locator('.evidence-match')).toHaveCount(0);
  await page.locator('.evidence-badge').first().click();
  await expect(button).toHaveAttribute('aria-pressed', 'true');
});
test('scenario tools recalculate outcomes and restore report assumptions', async ({ page }) => {
  const ranking = chapters.find((chapter) => chapter.data.number === 5)!;
  await page.goto('/chapters/' + ranking.slug);
  const lab = page.getByRole('region', { name: 'Model a biomass protein scenario' });
  await expect(lab).toBeVisible();
  await expect(lab.getByText('$3.8m')).toBeVisible();
  await lab.getByLabel('Plant utilisation').press('Home');
  await expect(lab.getByText('$1.5m')).toBeVisible();
  await lab.getByRole('button', { name: 'Reset assumptions' }).click();
  await expect(lab.getByText('$3.8m')).toBeVisible();
});
test('mobile navigation and wide tables stay within viewport; print restores evidence', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/chapters/' + chapters[7].slug);
  await page.locator('.mobile-contents summary').click();
  await expect(page.locator('.mobile-contents .chapter-nav')).toBeVisible();
  await page.locator('.mobile-contents summary').click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await expect(page.locator('.table-scroll').first()).toBeVisible();
  await page.getByRole('button', { name: 'general', exact: true }).click();
  await page.emulateMedia({ media: 'print' });
  for (const node of await page.locator('.evidence-muted').all())
    await expect(node).toHaveCSS('opacity', '1');
});
