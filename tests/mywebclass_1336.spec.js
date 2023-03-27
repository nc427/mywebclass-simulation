const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';
const VIEWPORT_SIZE = { width: 1336, height: 768 };

test('Verify website is functional on 1336x768 resolution', async ({ page }) => {
  // Set viewport size
  await page.setViewportSize(VIEWPORT_SIZE);

  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check that the site is functional
  const pageTitle = await page.title();
  expect(pageTitle).toContain('MyWebClass.org');
  // Add more tests here as needed
});
