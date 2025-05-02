import { test, expect } from '@playwright/test';
test('run test in parallel', async ({ page }) => { await page.goto('https://example.com'); });
