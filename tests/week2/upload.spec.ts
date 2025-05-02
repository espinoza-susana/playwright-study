import { test, expect } from '@playwright/test';
import path from 'path';

test('upload a file', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  const filePath = path.resolve(__dirname, 'test-upload.txt');
  await page.setInputFiles('input[type="file"]', filePath);
  await page.click('#file-submit');
  await expect(page.locator('#uploaded-files')).toHaveText('test-upload.txt');
});
