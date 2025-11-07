// Run steps:
// npm i -D @playwright/test
// npx playwright install
// npx playwright test -g "EPAM client work visibility"

import { test, expect } from '@playwright/test';

test('EPAM client work visibility', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.epam.com/');

  // Open "Services" from the header
  await page.getByRole('menuitem', { name: 'Services' }).click();

  // Click "Explore Our Client Work"
  await page.getByText('Explore Our Client Work').click();

  // Verify the text "Client Work" is visible
  await expect(page.getByText('Client Work')).toBeVisible();
});