import { test, expect } from '@playwright/test';
import fs from 'fs';

test('trigger and verify file download', async ({ page, context }) => {
  await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-xls-download/');
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('a[href*="xls"]') // click a download link
  ]);

  const path = await download.path();
  expect(fs.existsSync(path!)).toBeTruthy();
});
