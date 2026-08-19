# Playwright E-Commerce Automation

End-to-End E-Commerce Test Automation Project using **Playwright, JavaScript, and Page Object Model (POM)**.

This project automates the main user flows of the SauceDemo e-commerce application, including Login, Product Selection, Cart, Checkout, and Logout scenarios.

## 🚀 Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Git & GitHub
- GitHub Actions
- HTML Test Reports

## 📌 Application Under Test

SauceDemo  
https://www.saucedemo.com/

## 🧪 Test Scenarios

The following scenarios are automated:

### 1. Login
- Valid user login
- Invalid login validation

### 2. Product
- Verify products are displayed
- Select product
- Add product to cart

### 3. Checkout
- Verify cart
- Enter checkout information
- Complete checkout

### 4. Logout
- Login to application
- Logout successfully
- Verify user is returned to login page

## 📂 Project Structure

```text
playwright-ecommerce-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── loginPage.js
│   ├── ProductPage.js
│   └── checkoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── invalid-loginpage.spec.js
│   ├── product.spec.js
│   ├── checkout.spec.js
│   └── logout.spec.js
│
├── package.json
├── package-lock.json
├── playwright.config.js
├── .gitignore
└── README.md