const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');

test('User should be able to logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    // Login
    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify successful login
    await expect(page).toHaveURL(/inventory\.html/);

    // Logout
    await productPage.logout();

    // Verify user returned to login page
    await expect(page).toHaveURL(/saucedemo\.com/);
    await expect(page.locator('#login-button')).toBeVisible();
});