import { test, expect } from '@playwright/test';
test('use baseURL from env', async ({ page }) => { await page.goto(process.env.BASE_URL || 'https://example.com'); });
