import { test, expect } from '@playwright/test';


test.beforeEach('clear cookies and goto URL', async ({ page }) => {
  /*clear the cokies*/
  await page.context().clearCookies();
  await page.context().clearCookies({ name: 'session-id' });
  await page.context().clearCookies({ domain: 'my-origin.com' });
  await page.context().clearCookies({ domain: /.*my-origin\.com/ });
  await page.context().clearCookies({ path: '/api/v1' });
  await page.context().clearCookies({ name: 'session-id', domain: 'my-origin.com' });
/* ------ */

//   await page.goto('https://petstore.octoperf.com/');

//   await page.pause();

});

test('login', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/');
    await page.locator('p').filter({ hasText: 'Enter the Store' }).click();
    await page.getByRole('link', { name: 'Enter the Store' }).click();
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.locator('input[name="username"]').fill('KaKaTeo');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('ga7x0830');
    await page.locator('input[name="password"]').press('Enter');
  });


  test('login2', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/');
    await page.locator('p').filter({ hasText: 'Enter the Store' }).click();
    await page.getByRole('link', { name: 'Enter the Store' }).click();
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.locator('input[name="username"]').fill('KaKaTeo');
    await page.locator('input[name="username"]').press('Tab');
    await page.locator('input[name="password"]').fill('ga7x0830');
    await page.locator('input[name="password"]').press('Enter');
  });




test.afterEach('close page', async ({ page }) => {
    /*clear the cokies*/
    await page.close()
  
  //   await page.goto('https://petstore.octoperf.com/');
  
  //   await page.pause();
  
  });
  