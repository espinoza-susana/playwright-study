import { test, expect } from '@playwright/test';

test('assert page contains new todo input', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page.locator('.new-todo')).toBeVisible();
});
