const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify presence of meta description', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Get the meta description tag
  const metaDescription = await page.$('meta[name="description"]');

  // Check that the meta description tag exists
  expect(metaDescription).not.toBeNull();
});
