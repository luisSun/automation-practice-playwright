// Page Object Model no qual cada teste possui uma função independente
// ------------------------------------------------------
// Este arquivo contém funções reutilizáveis para testes de login,
// facilitando a organização e a manutenção dos scripts de automação.
// Cada função representa um cenário de teste isolado:
// - abrirSite: acessa a página de login
// - logarComSucesso: realiza login com credenciais válidas
// - allEmpytFields: tenta logar deixando todos os campos em branco
// - blankEmail: tenta logar com o campo de e-mail em branco
// - invalidEmail: tenta logar com e-mail inválido
// - blankPass: tenta logar com o campo de senha em branco
// - invalidPass: tenta logar com senha inválida
// - verificarLogin: confirma o sucesso do login

import { test, expect } from '@playwright/test';

const abrirSite = async (page) =>{
  await page.goto('login/')
}

const logarComSucesso = async (page) =>{
    await page.locator('#user').fill('a@a.com');
    await page.locator('#password').fill('senha@123');
    await page.getByRole('button', { name: 'login' }).click();
}


//tentar logar em branco
const allEmpytFields = async (page) =>{
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
}

// tentar logar campo email em branco
const blankEmail = async (page) =>{
    await page.locator('#password').fill('senha@123');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
}

// tentar logar com email invalido
const invalidEmail = async (page) =>{
    await page.locator('#user').fill('a@acom');
    await page.locator('#password').fill('senha@123');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });

}

//tentar logar com senha em branco
const blankPass = async (page) =>{
    await page.locator('#user').fill('a@a.com');
    await page.locator('#password').fill('');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Senha inválida.')).toBeVisible({ timeout: 10000 });
}


//tentar logar com senha invalida
const invalidPass = async (page) =>{
    await page.locator('#user').fill('a@a.com');
    await page.locator('#password').fill('senha');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Senha inválida.')).toBeVisible({ timeout: 10000 });

}

//Sucesso de Login
const verificarLogin = async (page) =>{
    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, a@a.com').click();
    await page.getByRole('button', { name: 'OK' }).click();
}

module.exports ={
    abrirSite,
    logarComSucesso,
    verificarLogin,
    allEmpytFields,
    blankEmail,
    invalidEmail,
    blankPass,
    invalidPass
}