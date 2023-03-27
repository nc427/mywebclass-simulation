const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify privacy policy link', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Click the agree button
  const button = await page.$('button[id="agreeButton"]');
  await button.click();

  // Click on the privacy policy link
  await Promise.all([
    page.waitForNavigation(),
    page.click('a[href="privacy.html"]')
  ]);

  // Check that the page title is correct
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass.org | Our Story');
});
