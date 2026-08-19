const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductPage } = require('../pages/productPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test('User can complete checkout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Add product
    await productPage.addBackpackToCart();

    // Open cart
    await checkoutPage.openCart();

    // Verify product
    await expect(checkoutPage.cartItem)
        .toHaveText('Sauce Labs Backpack');

    // Checkout
    await checkoutPage.checkout(
        'Thrish',
        'Kumar',
        '600001'
    );

    // Verify order confirmation
    await expect(checkoutPage.successMessage)
        .toHaveText('Thank you for your order!');
});