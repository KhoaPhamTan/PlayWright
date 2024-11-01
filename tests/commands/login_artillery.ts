//const {expect} = require ('@playwright/test');
import { Page } from "playwright";
import { expect } from "@playwright/test";



async function testArtilleryLogin(page:Page) {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page.getByText('Please enter your username')).toBeVisible();
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('KaKaTeo');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('ga7x0830');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Welcome KaKa!')).toBeVisible();
    
}
module.exports = {testArtilleryLogin:testArtilleryLogin};

// export const testArtilleryLogin = () => {};