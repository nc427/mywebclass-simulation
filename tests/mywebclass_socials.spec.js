const { test, expect } = require('@playwright/test');

const BASE_URL = 'localhost:3000';

test('Verify social media icons', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check for social media icons
  const socialMediaIcons = await page.$$('[class^="nav-item mb-2"]');
  expect(socialMediaIcons.length).toBeGreaterThan(0);
});
