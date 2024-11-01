import { test, expect } from '@playwright/test';



test('check full screen -basic test', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    await expect(page).toHaveScreenshot('full_screen_basic.png')
    await page.close()
});

test('check full screen', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    await expect(page).toHaveScreenshot('full_screen.png', { fullPage: true })
    await page.close()
});

test('check full screen with masking', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    await expect(page).toHaveScreenshot('full_screen_with_mask.png', 
        { fullPage: true ,
        mask: [page.getByRole('cell',{name:'Name'})],
        }
    )
    await page.close()
});

test('check part of screen', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    await expect(page.locator('#Catalog')).toHaveScreenshot('part_screen.png'
    )
    await page.close()
});
