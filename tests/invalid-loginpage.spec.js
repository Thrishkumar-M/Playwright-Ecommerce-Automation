const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Invalid login should show error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'wrong_user',
        'wrong_password'
    );

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();

});