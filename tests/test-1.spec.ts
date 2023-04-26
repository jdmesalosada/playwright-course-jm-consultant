import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill('ihpne');
  await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 13 (128 GB) - Azul medianoche' }).first().click()
  await page.getByRole('heading', { name: '¡Hola! Para comprar, ingresa a tu cuenta' }).click();
});


test('test 2', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  
});


test('test locators', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.pause()

  await page.locator('input[class="form"]').fill('algo')
  await page.pause()

});