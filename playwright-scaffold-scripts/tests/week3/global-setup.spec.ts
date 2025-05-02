import { test, expect } from '@playwright/test';
test('should leverage global setup', async ({ page }) => { await page.goto('https://example.com'); });
