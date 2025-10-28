// Page Object Model simplificado para a página de Login
// ------------------------------------------------------
// Este arquivo contém funções reutilizáveis que representam ações e validações
// específicas da tela de login, permitindo que os testes fiquem mais limpos
// e legíveis.
//

import { test, expect } from '@playwright/test';

const abrirSite = async (page) =>{
  await page.goto('login/')
}

const logarComSucesso = async (page) =>{
    await page.locator('#user').fill('a@a.com');
    await page.locator('#password').fill('senha@123');
}

const clickLoginButton = async (page) =>{
    await page.getByRole('button', { name: 'login' }).click();
}

//Inserir Email Valido
const insertValidEmail = async (page) =>{
    await page.locator('#user').fill('a@a.com');
}

//Inserir Email invalido
const insertInvalidEmail = async (page) =>{
    await page.locator('#user').fill('a@acom');
}

//Inserir Senha Valida
const insertValidPass = async (page) =>{
    await page.locator('#password').fill('senha@123');
}

//tentar logar com senha invalida
const insertInvalidPass = async (page) =>{
    await page.locator('#password').fill('senha');
}

//Mensagem de erro de Email Invalido
const msgErroEMail = async (page) =>{
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
}

//Mensagem de erro de senha Invalido
const msgErroPass = async (page) =>{
    await expect(page.getByText('Senha inválida.')).toBeVisible({ timeout: 10000 });
}
//Sucesso de Login
const verificarLogin = async (page) =>{
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
}

module.exports ={
    clickLoginButton,
    abrirSite,
    insertValidEmail,
    insertValidPass,
    insertInvalidEmail,
    insertInvalidPass,
    msgErroEMail,
    msgErroPass,
    verificarLogin

}