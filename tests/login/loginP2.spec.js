import { test, expect } from '@playwright/test';
const { clickLoginButton, abrirSite, insertValidEmail, insertValidPass, insertInvalidEmail, insertInvalidPass, msgErroEMail, msgErroPass, verificarLogin } = require('./loginPage.js');


test.use({
  viewport: { width: 800, height: 600 }
})

test.beforeEach(async({page}) =>{
  await abrirSite(page)
})

test('Login campos em branco', async ({ page }) => {
  await clickLoginButton(page)
});

test('Login Email em branco', async ({ page }) => {
  await insertValidPass(page)
  await clickLoginButton(page)
  await msgErroEMail(page)
});

test('Login Email invalido', async ({ page }) => {
  await insertInvalidEmail(page)
  await insertValidPass(page)
  await clickLoginButton(page)
  await msgErroEMail(page)
});

test('Login Password em branco @testLogin', async ({ page }) => {
  await insertValidEmail(page)
  await clickLoginButton(page)
  await msgErroPass(page)
  
});
test('Login Password invalido @testLogin', async ({ page }) => {
  await insertValidEmail(page)
  await insertInvalidPass(page)
  await clickLoginButton(page)
  await msgErroPass(page)
});

test('Login com sucesso', async ({ page }) => {
  await insertValidEmail(page)
  await insertValidPass(page)
  await clickLoginButton(page)
  await verificarLogin(page)
});


test.afterEach(async({page})=>{
})