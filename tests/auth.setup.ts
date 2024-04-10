import { test as setup, expect } from "@playwright/test";
import { LoginPage } from './pageobjects/LoginPage';

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
    await page.goto('https://saucedemo.com')
    const login = new LoginPage(page)
    await login.loginWithCredentials('standard_user', 'secret_sauce')
    await login.checkSuccessfulLogin()

    await page.context().storageState({path: authFile})

});
