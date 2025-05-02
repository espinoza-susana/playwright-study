import { test, expect } from '@playwright/test';
test('loads config for projects', async ({ page }) => { await page.goto('https://demo.playwright.dev/todomvc/'); });
