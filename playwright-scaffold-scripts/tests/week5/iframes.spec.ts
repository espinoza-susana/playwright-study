import { test, expect } from '@playwright/test';
test('interact with iframe', async ({ page }) => { await page.goto('https://the-internet.herokuapp.com/iframe'); });
