import { test, expect } from '@playwright/test';
test('handle dialog', async ({ page }) => { page.on('dialog', dialog => dialog.accept()); await page.evaluate(() => alert('Test')); });
