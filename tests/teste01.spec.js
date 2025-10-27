// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  viewport: {width: 1600, height: 1200}
})

test('Login com sucesso', async ({ page }) => {

  await page.goto('https://automationpratice.com.br/')

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('a@a.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('senha@123');
  await page.getByRole('button', { name: 'login' }).click();

});