const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify footer is properly displayed', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Get the footer element
  const footer = await page.$('footer');

  // Check that the footer element exists and is visible
  expect(footer).toBeTruthy();
  expect(await footer.isVisible()).toBe(true);

  // Check that the footer contains the expected text
  const footerText = await footer.innerText();
  expect(footerText).toContain('About Us');
});
