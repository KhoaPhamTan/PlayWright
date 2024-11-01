import { test, expect } from '@playwright/test';



test('check URL', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    await expect(page).toHaveURL('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH') //check full URL
    await expect(page).toHaveURL(/.*viewCategory=&categoryId=FISH*/)   //part of link

    await expect(page).toHaveTitle('JPetStore Demo')  //check Title of page
    await page.close()
});