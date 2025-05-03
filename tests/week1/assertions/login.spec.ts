import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../helpers/LoginPage';
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});
test.describe('Login', () => {
    test('User is able to login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user',  'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    test('Validate invalid credentials ', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('standard_user', 'secret_sauc2e');
        await loginPage.expectLoginError('do not match');
    });
});