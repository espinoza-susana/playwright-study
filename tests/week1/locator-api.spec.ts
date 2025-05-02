import { test, expect } from '@playwright/test';

test('locator API with multiple elements', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  const input = page.locator('.new-todo');
  await input.fill('Learn Playwright');
  await input.press('Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(1);
});
