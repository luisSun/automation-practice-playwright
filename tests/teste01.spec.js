// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  // Context geolocation
  geolocation: { longitude: 12.492507, latitude: 41.889938 },
  permissions: ['geolocation'],
  viewport: { width: 800, height: 600 }
})

test.beforeEach(async({page}) =>{
  await page.goto('https://automationpratice.com.br/')
})

test('Login com sucesso @testLogin', async ({ page }) => {

  const buttonEmail = await page.getByRole('button', { name: 'Send Mail' })
  await buttonEmail.scrollIntoViewIfNeeded()
  await buttonEmail.click()

  const text = await page.waitForSelector('text=NEWSLETTER')
  await text.scrollIntoViewIfNeeded()
  
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('a@a.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('senha@123');
  await page.getByRole('button', { name: 'login' }).click();

});


test('Login com sucesso 2 @testLogin', async ({ page }) => {

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('a@a.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('senha@123');
  await page.getByRole('button', { name: 'login' }).click();

});

test('Login com sucesso 3 @testLogin', async ({ page }) => {

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('a@a.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('senha@123');
  await page.getByRole('button', { name: 'login' }).click();

});


test.afterEach(async({page})=>{
  //Fazer algo depois de cada teste rodado
  console.log("Vai Corinthians")
})