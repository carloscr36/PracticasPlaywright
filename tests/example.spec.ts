import { test, Page, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });//If one of the tests fails, all subsequent tests are skipped

let page: Page;

test.beforeAll(async ({ browser }) => {
  page= await browser.newPage()
})

test.afterAll(async () => {
  await page.close();
});

test('should be able to add a new item', async ({ page }) => {
  await page.goto('/todomvc/#/')
  await page.getByPlaceholder('What needs to be done?')
  await page.getByPlaceholder('What needs to be done?').fill('english course');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('playwright course');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('play guitar');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('git course');
});
test('should delete items added to the list', async ({  }) => {
await page.getByRole('listitem').filter({ hasText: 'playwright course' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
await page.getByRole('button', { name: 'Delete' }).click();
await page.getByRole('listitem').filter({ hasText: 'english course' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
await page.getByRole('button', { name: 'Delete' }).click();
});
