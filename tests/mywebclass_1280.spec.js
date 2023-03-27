const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('1280x720 resolution', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Verify website functionality', async ({ page }) => {
    // Navigate to the home page
    await page.goto(BASE_URL);
    await page.waitForLoadState();

    // Check that the page is functional
    const pageTitle = await page.title();
    expect(pageTitle).toContain('MyWebClass.org');

    const header = await page.$('header');
    expect(header).toBeTruthy();

    const footer = await page.$('footer');
    expect(footer).toBeTruthy();
  });
});
