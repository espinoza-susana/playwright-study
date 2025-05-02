import { test, expect } from '@playwright/test';
test('keyboard interaction', async ({ page }) => { await page.goto('https://example.com'); await page.keyboard.type('Hello'); });
