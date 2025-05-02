import { test, expect } from '@playwright/test';
test('cross-browser support test', async ({ page }) => { await page.goto('https://example.com'); });
