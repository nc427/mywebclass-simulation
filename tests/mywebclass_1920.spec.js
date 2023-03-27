const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify site functionality at 1920x1080 resolution', async ({ page }) => {
  // Set the viewport size to 1920x1080
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check that the site is functional
  const title = await page.title();
  expect(title).toContain('MyWebClass.org');

  // Check for other elements or functionality as necessary
  const navBar = await page.$('.navbar');
  expect(navBar).toBeTruthy();

  // Reset viewport size to default
  await page.setViewportSize({ width: 1280, height: 720 });
});
