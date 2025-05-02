import { test, expect } from '@playwright/test';
import { HomePage } from '../../helpers/HomePage';

test('navigation menu works', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.clickCategory('Rulebooks');
  await expect(page).toHaveURL(/rulebooks/);
});
