import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  //await page.getByPlaceholder('Buscar productos, marcas y más…').click();
 // await page.getByPlaceholder('Buscar productos, marcas y más…').fill('iphone');
 // await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  //await page.getByRole('link', { name: 'Mis compras' }).click();

  await page.getByRole('link', { name: 'Ingresa', exact:true }).click();

  await page.pause()
});