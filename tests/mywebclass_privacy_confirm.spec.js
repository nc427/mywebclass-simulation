const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify privacy policy pop-up', async ({ page }) => {
  // Navigate to the home page
  await page.goto(BASE_URL);
  await page.waitForLoadState();

  // Check that the privacy policy pop-up is present
  const privacyPolicyPopUp = await page.$('.modal-content');
  expect(privacyPolicyPopUp).toBeTruthy();
});