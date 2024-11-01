import { test, expect} from "@playwright/test";
//import {testArtilleryLogin} from './commands/login_artillery'
// export {testArtilleryLogin} from './commands/login_artillery'
const {testArtilleryLogin} =require( './commands/login_artillery')


test('test', async ({ page }) => {
  //const testArtilleryLogin = new TestArtilleryLogin(page);
  await testArtilleryLogin(page)
  // await page.goto('https://petstore.octoperf.com/');
  // await expect(page).toHaveURL(/.*petstore.octoperf.com*/)
  // await expect(page).toHaveTitle('JPetStore Demo')
  // await expect(page).toHaveScreenshot('page.png')
  // await page.getByRole('link', { name: 'Enter the Store' }).click();
  // await page.getByRole('link', { name: 'Sign In' }).click();
  // await page.pause()

  // await expect(page).toHaveURL(/.*petstore.octoperf.com*/)
  // await expect(page).toHaveTitle('JPetStore Demo')
  // await expect(page).toHaveScreenshot('loginform.png')
  // await page.close()
});