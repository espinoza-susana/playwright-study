import { test, expect } from '@playwright/test';
test('simulate GitHub CI env', async ({ page }) => { await page.goto('https://example.com'); });
