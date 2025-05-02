import { test, expect } from '@playwright/test';
test('handle multi-tab flow', async ({ context }) => { const page = await context.newPage(); await page.goto('https://example.com'); });
