const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Check for EN attribute on localhost', async ({ page }) => {
  await page.goto(`${BASE_URL}/my-page`);
  await page.waitForLoadState();

  await page.setContent('<div en="english"></div>');
  const divTag = await page.$('div[en="english"]');
  expect(divTag).toBeTruthy();
});
