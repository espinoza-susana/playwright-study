import { test, expect } from '@playwright/test';
test('simulate flaky test', async ({ page }) => { test.fail(); await page.goto('https://example.com'); });
