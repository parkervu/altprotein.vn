import { test, expect, request as apiRequest } from '@playwright/test';
import seed from '../../seed/seed.json' with { type: 'json' };
const baseURL = 'http://127.0.0.1:4321';
test('editor can save, privately preview and publish; reseeding preserves edits', async ({
  page,
  request,
}) => {
  // A fresh CI runner also compiles the full EmDash editor on its first visit.
  test.setTimeout(120000);
  const editor = await apiRequest.newContext({
    baseURL,
    extraHTTPHeaders: { Origin: baseURL, 'X-EmDash-Request': '1' },
  });
  const setup = await editor.post('/_emdash/api/setup/dev-bypass');
  expect(setup.ok()).toBeTruthy();
  const slug = seed.content.chapters[0].slug;
  const endpoint = `/_emdash/api/content/chapters/${slug}`;
  const originalResponse = await editor.get(endpoint);
  expect(originalResponse.ok()).toBeTruthy();
  const original = (await originalResponse.json()).data.item;
  const title = original.data.title + ' — local acceptance test';
  try {
    const saved = await editor.put(endpoint, { data: { data: { ...original.data, title } } });
    expect(saved.ok(), await saved.text()).toBeTruthy();
    await page.goto(`/chapters/${slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(original.data.title);
    const previewResponse = await editor.post(endpoint + '/preview-url', { data: {} });
    expect(previewResponse.ok()).toBeTruthy();
    const preview = (await previewResponse.json()).data.url;
    expect((await request.get(preview)).status()).toBe(403);
    const reportPreview = await editor.post('/_emdash/api/content/report/report/preview-url', {
      data: { pathPattern: '/' },
    });
    const reportUrl = (await reportPreview.json()).data.url;
    expect((await request.get(reportUrl)).status()).toBe(403);
    expect((await request.get('/about' + new URL(reportUrl, baseURL).search)).status()).toBe(403);
    const privatePreview = await editor.get(preview);
    expect(privatePreview.status()).toBe(200);
    expect(await privatePreview.text()).toContain(title);
    expect(privatePreview.headers()['cache-control']).toContain('no-store');
    const published = await editor.post(endpoint + '/publish', { data: {} });
    expect(published.ok(), await published.text()).toBeTruthy();
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    // EmDash's documented setup helper reapplies the seed with onConflict:skip.
    await editor.post('/_emdash/api/setup/dev-bypass');
    await page.reload();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    const revisions = await editor.get(endpoint + '/revisions');
    expect(revisions.ok()).toBeTruthy();
    // The real admin editor must load report tables without unsupported blocks.
    await page.context().addCookies((await editor.storageState()).cookies);
    await page.goto(`/_emdash/admin/content/chapters/${original.id}`);
    await expect(page.locator('body')).not.toContainText('Unknown block type');
    const welcome = page.getByRole('button', { name: 'Get Started', exact: true });
    await welcome.click({ timeout: 5000 }).catch(() => {});
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('textbox').first()).toBeVisible({ timeout: 20000 });
    await expect(page.locator('.tiptap table').first()).toBeVisible();
  } finally {
    const restored = await editor.put(endpoint, { data: { data: original.data } });
    expect(restored.ok(), await restored.text()).toBeTruthy();
    expect((await editor.post(endpoint + '/publish', { data: {} })).ok()).toBeTruthy();
    await editor.dispose();
  }
});
