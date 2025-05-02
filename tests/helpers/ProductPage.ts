import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async isLoaded() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}
