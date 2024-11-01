import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    for (
        let index = 0;
        index < await page.locator('tbody td a').count();
        index++) {
        const element = page.locator('tbody td a').nth(index);
        await element.click()
        await page.goBack()
       
    }

    await page.close()
})