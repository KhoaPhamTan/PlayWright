import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
  await expect(page.getByRole('link', { name: 'FI-SW-01' })).toBeVisible();

  //await expect(page.getByRole('link', { name: 'FI-SW-01' })).toHaveValue({ href: "/actions/Catalog.action?viewProduct=&amp;productId=FI-SW-01"});

 // await expect(page.getByRole('link', { href: "/actions/Catalog.action?viewProduct=&amp;productId=FI-SW-01"})).toContainText();
 //await expect(page.locator('tbody td a',{ hasText: "/actions/Catalog.action?viewProduct=&amp;productId=FI-SW-01"}));

 await expect(page.locator('tbody td a')).toHaveAttribute("/actions/Catalog.action?viewProduct=&amp;productId=FI-SW-01");
await page.close()
  });
// });  html body div#Content div#Catalog table tbody tr td a


// #Catalog > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)
// /html/body/div[2]/div[2]/table/tbody/tr[2]/td[1]/a
// FI-SW-01
// <a href="/actions/Catalog.action?viewProduct=&amp;productId=FI-SW-01">FI-SW-01</a>