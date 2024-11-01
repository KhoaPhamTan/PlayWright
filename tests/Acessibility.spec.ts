import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => { 
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Account.action');

    const accessibilityScanResults = await new AxeBuilder({ page })
   // .withTags("wcag2a","wcag2aa","wcag21a","wcag21aa","best-practice","wcag22a","wcag22aa")
   .withTags("best-practice")
  //  .exclude("Footer")
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]); 
  });
});