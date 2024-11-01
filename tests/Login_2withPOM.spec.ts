import { test } from "@playwright/test";
import LoginPages from "./PageObjectModal/Pages/login_2.page";


test.afterEach("Close page", async ({ page }) => {
 
    await page.close()


});

// await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
// await page.getByRole('link', { name: 'Sign In' }).click();
// await expect(page.getByText('Please enter your username')).toBeVisible();
// await page.locator('input[name="username"]').click();
// await page.locator('input[name="username"]').fill('KaKaTeo');
// await page.locator('input[name="password"]').click();
// await page.locator('input[name="password"]').fill('ga7x0830');
// await page.getByRole('button', { name: 'Login' }).click();
// await expect(page.getByText('Welcome KaKa!')).toBeVisible();

test("Login successful with POM", async ({ page }) => {
    const loginPages = new LoginPages(page);
    // await page.goto('https://petstore.octoperf.com/actions/Account.action;jsessionid=FAEEFE3F37406B4C9E3E6357A4A03A0D?signonForm=');
    await loginPages.goto();
     await loginPages.enterUsername('KaKaTeo');
    await loginPages.enterPassword('ga7x0830');
    await loginPages.clickLogin();
    await loginPages.loginSuccessful('Welcome KaKa!');




});

test("Login fail with POM", async ({ page }) => {
    const loginPages = new LoginPages(page);
    // await page.goto('https://petstore.octoperf.com/actions/Account.action;jsessionid=FAEEFE3F37406B4C9E3E6357A4A03A0D?signonForm=');
    await loginPages.goto();
    await loginPages.enterUsername('KaKaTeo1');
    await loginPages.enterPassword('ga7x08301');
    await loginPages.clickLogin();
    await loginPages.loginFail('Invalid username or password. Signon failed.');
 


});


