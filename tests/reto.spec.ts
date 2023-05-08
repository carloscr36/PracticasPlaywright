import { test, expect } from '@playwright/test';


test('Reto buy products', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  await page.mouse.wheel(0, 500);
  await page.hover('a[href="/product_details/1"]');
  await page.locator('a[href="/product_details/1"]').click(); 
  //hacer una pausa en el debug
  await page.pause();
   // This code evited the google ads page    
  if( page.url() === "https://automationexercise.com/#google_vignette"){
    //const popup = await page.waitForEvent('popup');
    //await popup.close();
    //page.on('dialog', dialog => dialog.dismiss());
    //await page.locator('internal:role=button[name="Close ad"i]').click();
    //await page.frameLocator('iframe[name="aswift_9"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Close ad' }).click();
    //const frame = await page.frameLocator('iframe#ad_iframe'); 
    //frame.getByRole('button', { name: 'Close ad' }).click();
   
    page.reload()
  }
   await page.locator('a[href="/product_details/1"]').click(); 
   await page.locator('input#quantity').isVisible();
   await page.locator('input#quantity').fill('3');
   await page.locator('.btn.btn-default.cart').click(); 
   await expect(page.locator('.modal-title.w-100')).toContainText('Added!');

   await page.locator('.btn.btn-block.btn-success.close-modal').click();
   await expect(page.locator('.modal-title.w-100')).toContainText('Added!'); 
  
});