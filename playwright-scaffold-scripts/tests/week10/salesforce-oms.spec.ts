import { test, expect } from '@playwright/test';
test('Salesforce OMS login and nav', async ({ page }) => { await page.goto('https://login.salesforce.com'); });
