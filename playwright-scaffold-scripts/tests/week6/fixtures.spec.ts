import { test, expect } from '@playwright/test';
test('custom test fixture demo', async ({ page }) => { await page.goto('https://example.com'); });
