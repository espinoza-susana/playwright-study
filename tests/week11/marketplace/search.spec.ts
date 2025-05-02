import { test, expect } from '@playwright/test';
import { HomePage } from '../../helpers/HomePage';

test('search returns expected results', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.search("Player's Handbook");
  await expect(page.locator('[data-testid="product-tile"]')).toHaveCountGreaterThan(0);
});
