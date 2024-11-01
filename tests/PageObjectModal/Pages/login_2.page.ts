import { expect, Page } from "@playwright/test";

export default class LoginPages {
    page: Page;


    constructor(page: Page) {
        this.page = page;


    }


    public usernameTextbox = (p0?: string) => this.page.locator('input[name="username"]');
    public passwordTextbox = (p0?: string) => this.page.locator('input[name="password"]');
    public loginButton = () => this.page.getByRole('button', { name: 'Login' });

    public wellcomeContent = () => this.page.locator('#WelcomeContent');
    public loginSuccessLabel = () => this.page.getByText('Welcome KaKa!');

    public loginFailContent = () => this.page.getByRole('listitem');
    public loginFailLabel = () => this.page.getByText('Invalid username or password');

 

    // I like to add a goto method into each page I create
    public async goto() {
        await this.page.goto("https://petstore.octoperf.com/actions/Account.action?signonForm=");
    }
    public async enterUsername(username: string) {
        await this.usernameTextbox().fill(username);
    }
    public async enterPassword(password: string) {
        await this.passwordTextbox().fill(password);
    }
    public async clickLogin() {
        await this.loginButton().click();
    }

    public async loginSuccessful(wellcomecontent: string | RegExp | readonly (string | RegExp)[]) {

        await expect(this.wellcomeContent()).toContainText(wellcomecontent);
        await expect(this.loginSuccessLabel()).toBeVisible();

        // await expect(this.wellcomeContent()).toContainText('Welcome KaKa!');
        // await expect(this.loginSuccessLabel()).toBeVisible();
    }

    public async loginFail(loginfailcontent: string | RegExp | readonly (string | RegExp)[]) {
        await expect(this.loginFailContent()).toContainText(loginfailcontent);
        await expect(this.loginFailLabel()).toBeVisible();
    }



   
}






// await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
// await page.getByRole('link', { name: 'Sign In' }).click();
// await expect(page.getByText('Please enter your username')).toBeVisible();
// await page.locator('input[name="username"]').click();
// await page.locator('input[name="username"]').fill('KaKaTeo');
// await page.locator('input[name="password"]').click();
// await page.locator('input[name="password"]').fill('ga7x0830');
// await page.getByRole('button', { name: 'Login' }).click();
// await expect(page.getByText('Welcome KaKa!')).toBeVisible();