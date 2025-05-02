import { test, expect } from '@playwright/test';
import { HomePage } from './page-objects/HomePage';

test('homepage loads with key sections', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectKeySections();
});
