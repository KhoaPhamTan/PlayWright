import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://commitquality.com/add-product');
    await expect(page.getByTestId('date-stocked')).toBeVisible();
    await expect(page.getByTestId('date-stocked')).toBeEmpty();
   // await page.hover({1313,231})
   // await page.getByTestId('date-stocked').click({ position: { x: 1313, y: 231 } })
    await page.mouse.click(1313, 231,{button:'left'})
    await expect(page).toHaveScreenshot('clendar.png')

    
  //  <input type="date" class="form-control is-invalid" data-testid="date-stocked" id="dateStocked" name="dateStocked" required="" value="">
})