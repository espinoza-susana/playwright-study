import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://marketplace.dndbeyond.com/');
  }

  async expectKeySections() {
    await expect(this.page.getByText('Shop by Categories')).toBeVisible();
    await expect(this.page.getByText(/New Arrivals/i)).toBeVisible();
    await expect(this.page.getByText(/Trending Best Sellers/i)).toBeVisible();
  }

  async clickCategory(name: string) {
    await this.page.getByRole('link', { name }).click();
  }

  async search(query: string) {
    await this.page.getByPlaceholder('Search the Marketplace').fill(query);
    await this.page.keyboard.press('Enter');
  }
}
