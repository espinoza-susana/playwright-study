import { test, expect } from '@playwright/test';
test.describe('setup example', () => { test.beforeEach(async ({ page }) => { await page.goto('https://example.com'); }); test('test with setup', async ({ page }) => { }); });
