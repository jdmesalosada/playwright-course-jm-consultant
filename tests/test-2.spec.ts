import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('hola');
  await page.getByTestId('royal_email').press('Tab');
  await page.getByTestId('royal_pass').fill('pepe');
});