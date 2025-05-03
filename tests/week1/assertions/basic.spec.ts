import { test, expect } from '@playwright/test';

test('basic page load', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page).toHaveTitle(/TodoMVC/);
});
