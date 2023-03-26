const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify presence of aria-label attribute', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Get the first element with an aria-label attribute
  const element = await page.$('[aria-label]');

  // Check that the element exists and has an aria-label attribute
  expect(element).not.toBeNull();
  const ariaLabel = await element.getAttribute('aria-label');
  expect(ariaLabel).not.toBeNull();
});
