const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('Site functionality on 1440x900 resolution', () => {
  let context;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Verify site loads without error', async () => {
    const page = await context.newPage();
    await page.goto(BASE_URL);
    await page.waitForLoadState();
    expect(await page.title()).not.toBe('');
    // Other checks for site functionality
  });
});
