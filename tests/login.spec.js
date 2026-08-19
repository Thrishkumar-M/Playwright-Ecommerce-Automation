const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('SauceDemo Login Tests', () => {

    test('Valid login should be successful', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);

    });

});