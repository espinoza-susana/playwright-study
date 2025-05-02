import { test, expect } from '@playwright/test';

test('using text and role selectors', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page.getByPlaceholder('What needs to be done?')).toBeVisible();
});
