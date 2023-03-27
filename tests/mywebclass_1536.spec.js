const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('Site functionality on 1536x864 resolution', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage({ viewport: { width: 1536, height: 864 } });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Site loads without errors', async () => {
    await page.goto(BASE_URL);
    await page.waitForLoadState();
    const title = await page.title();
    expect(title).not.toBeFalsy();
  });

  test('Check for footer', async () => {
    await page.goto(BASE_URL);
    await page.waitForSelector('footer');
    const footer = await page.$('footer');
    expect(footer).toBeTruthy();
  });

  // Add more tests as needed
});
