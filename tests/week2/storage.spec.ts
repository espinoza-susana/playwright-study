import { test, expect } from '@playwright/test';

test.use({ storageState: 'tests/state/saucedemo.json' });

test('reuse logged-in session', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.inventory_list')).toBeVisible();
});
