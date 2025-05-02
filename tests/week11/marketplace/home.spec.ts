import { test, expect } from '@playwright/test';
import { HomePage } from '../../helpers/HomePage';

test('homepage loads with key sections', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectKeySections();
});
