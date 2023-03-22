const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test('Verify user confirmation for privacy policy', async ({ page }) => {
  // Navigate to the privacy policy page
  await page.goto(`${BASE_URL}/privacy-policy`);
  await page.waitForLoadState();

  // Check that the user confirmation dialog is present
  const confirmationDialog = await page.$('.confirmation-dialog');
  expect(confirmationDialog).toBeTruthy();

  // Confirm the privacy policy
  await confirmationDialog?.click('button.confirm');

  // Check that the dialog has been dismissed
  await page.waitForSelector('.confirmation-dialog', { state: 'hidden' });
});
