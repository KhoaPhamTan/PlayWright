import { test } from "@playwright/test";
import LoginPages from "./PageObjectModal/Pages/login.page";


test("Login with POM", async ({ page }) => {
    const loginPages = new LoginPages(page);
    // await page.goto('https://petstore.octoperf.com/actions/Account.action;jsessionid=FAEEFE3F37406B4C9E3E6357A4A03A0D?signonForm=');
    await loginPages.goto();
    // await loginPages.loginaction("KaKaTeo","ga7x0830");
    await loginPages.enterUsername();
    await loginPages.enterPassword();
    await loginPages.clickLogin();
    await loginPages.loginSuccessful();
    //await page.close()


});

