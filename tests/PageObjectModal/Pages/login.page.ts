import { expect, Page } from "@playwright/test";

export default class LoginPages {
    page: Page;
    // usernameTextbox: any;
    // passwordTextbox: any;
    // loginButton: any;
    // loginSuccessLabel: any;

    constructor(page: Page) {
        this.page = page;

        // this.usernameTextbox = page.locator('input[name="username"]');
        // this.passwordTextbox = page.locator('input[name="password"]');
        // this.loginButton = page.getByRole('button', { name: 'Login' });
        // this.loginSuccessLabel = page.getByText('Wel1come K1aKa!');

    }


    public usernameTextbox = (p0?: string) => this.page.locator('input[name="username"]');
    public passwordTextbox = (p0?: string) => this.page.locator('input[name="password"]');
    public loginButton = () => this.page.getByRole('button', { name: 'Login' });

    public wellcomeContent = () => this.page.locator('#WelcomeContent');
    public loginSuccessLabel = () => this.page.getByText('Welcome KaKa!');


    // I like to add a goto method into each page I create
    public async goto() {
        await this.page.goto("https://petstore.octoperf.com/actions/Account.action?signonForm=");
    }
    public async enterUsername() {
        await this.usernameTextbox().fill('KaKaTeo');
    }
    public async enterPassword() {
        await this.passwordTextbox().fill('ga7x0830');
    }
    public async clickLogin() {
        await this.loginButton().click();
    }

    public async loginSuccessful() {
        await expect(this.wellcomeContent()).toContainText('Welcome KaKa!');
        await expect(this.loginSuccessLabel()).toBeVisible();
    }



   


}






