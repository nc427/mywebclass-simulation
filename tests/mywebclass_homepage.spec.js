const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify MyWebClass.org link redirects to index.html', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Click the agree button
  const button = await page.$('button[id="agreeButton"]');
  await button.click();

  // Click the MyWebClass.org link
  const link = await page.$('a[href="index.html"]');
  await link.click();

  // Wait for the new page to load
  await page.waitForLoadState();

  // Confirm that the URL is now index.html
  expect(page.url()).toBe(`${BASE_URL}/index.html`);
});
