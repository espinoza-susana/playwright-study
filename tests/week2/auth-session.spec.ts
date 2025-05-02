import { test, expect } from '@playwright/test';

test('store login session state for reuse', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Save session state
  await context.storageState({ path: 'tests/state/saucedemo.json' });
});
