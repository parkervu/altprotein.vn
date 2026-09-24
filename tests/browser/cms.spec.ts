import { test, expect, request as apiRequest } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4321';

test('editor can save, privately preview and publish a page; reseeding preserves edits', async ({ page, request }) => {
  test.setTimeout(180000);
  const editor = await apiRequest.newContext({
    baseURL,
    extraHTTPHeaders: { Origin: baseURL, 'X-EmDash-Request': '1' },
  });
  expect((await editor.post('/_emdash/api/setup/dev-bypass')).ok()).toBeTruthy();
  const endpoint = '/_emdash/api/content/pages/ch14-unknowns';
  const originalResponse = await editor.get(endpoint);
  expect(originalResponse.ok()).toBeTruthy();
  const original = (await originalResponse.json()).data.item;
  const marker = 'Local acceptance test paragraph.';
  const body = original.data.body.replace(/\n## /, `\n${marker}\n\n## `);
  try {
    const saved = await editor.put(endpoint, { data: { data: { ...original.data, body } } });
    expect(saved.ok(), await saved.text()).toBeTruthy();
    await page.goto('/report/ch14-unknowns');
    await expect(page.locator('.prose')).not.toContainText(marker);
    const previewResponse = await editor.post(endpoint + '/preview-url', { data: {} });
    expect(previewResponse.ok()).toBeTruthy();
    const preview = (await previewResponse.json()).data.url as string;
    expect(preview).toContain('/pages/ch14-unknowns');
    expect((await request.get(preview)).status()).toBe(403);
    const privatePreview = await editor.get(preview);
    expect(privatePreview.status()).toBe(200);
    expect(await privatePreview.text()).toContain(marker);
    expect(privatePreview.headers()['cache-control']).toContain('no-store');
    expect((await editor.post(endpoint + '/publish', { data: {} })).ok()).toBeTruthy();
    await page.reload();
    await expect(page.locator('.prose')).toContainText(marker);
    await editor.post('/_emdash/api/setup/dev-bypass');
    await page.reload();
    await expect(page.locator('.prose')).toContainText(marker);
    expect((await editor.get(endpoint + '/revisions')).ok()).toBeTruthy();
    await page.context().addCookies((await editor.storageState()).cookies);
    await page.goto(`/_emdash/admin/content/pages/${original.id}`);
    await page.getByRole('button', { name: 'Get Started', exact: true }).click({ timeout: 5000 }).catch(() => {});
    await page.waitForLoadState('networkidle');
    await expect(page.locator('textarea').first()).toBeVisible({ timeout: 30000 });
  } finally {
    const restored = await editor.put(endpoint, { data: { data: original.data } });
    expect(restored.ok(), await restored.text()).toBeTruthy();
    expect((await editor.post(endpoint + '/publish', { data: {} })).ok()).toBeTruthy();
    await editor.dispose();
  }
});
