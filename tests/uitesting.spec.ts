import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('img', { name: 'Responsive image' }).click();
  //await page.getByRole('link', { name: 'Resources' }).click();
  await page.locator('a.nav-link:has-text("Resources")').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Verify Text' }).click();
  await page.getByText('Welcome UserName!', { exact: true }).click();
});