import { test, expect } from '@playwright/test';

test('upload', async ({ page }) => {
  await page.goto('https://commitquality.com/');
  await page.getByTestId('navbar-practice').click();
  await page.getByTestId('practice-file-upload').click();
  await page.getByTestId('file-input').click();
  //await page.pause()
 // await page.getByTestId('file-input').setInputFiles("C:\Users\khoapham\Downloads\Color block resume.docx");
  await page.getByTestId('file-input').setInputFiles("C:/Users/khoapham/Downloads/Color block resume.docx");
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close()
});


test('download', async ({ page }) => {
  await page.goto('https://commitquality.com/');
  await page.getByTestId('navbar-practice').click();
  await page.getByRole('heading', { name: 'File Download' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download File' }).click();
  const download = await downloadPromise;
  await download.saveAs("./"+download.suggestedFilename())
  await page.close()
});