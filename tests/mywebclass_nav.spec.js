const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify presence of navigation bar', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check that the navigation bar is present
  const navBar = await page.$('nav');
  expect(navBar).not.toBeNull();
});
