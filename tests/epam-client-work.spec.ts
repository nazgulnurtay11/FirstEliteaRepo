import { test, expect } from '@playwright/test';

test('Verify Client Work page flow on EPAM website', async ({ page }) => {
  // Step 1: Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Open "Services" from the header
  await page.getByRole('menuitem', { name: 'Services' }).click();

  // Step 3: Click "Explore Our Client Work"
  await page.getByText('Explore Our Client Work').click();

  // Step 4: Verify the text "Client Work" is visible
  await expect(page.getByText('Client Work')).toBeVisible();
});