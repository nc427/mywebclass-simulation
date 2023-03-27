const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify website loads without error', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check that there are no console errors
  const consoleMessages = await page.evaluate(() => {
    return window.console ? window.console.log() : [];
  });

});
