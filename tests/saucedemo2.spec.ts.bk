import { test, expect } from '@playwright/test';

test('purchase an item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
  await page.getByRole('button', {name: 'Login'}).click()


  const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

  const randomIndex = Math.floor(Math.random() * itemsContainer.length);

  const randomItem = itemsContainer[randomIndex];

  const expectedName = await randomItem.locator('.inventory_item_name').innerText()
  const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()
  const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()


  /*for(let item of itemsContainer){
    console.log(await item.innerText()) 
  }*/

  console.log('random item is: ', await randomItem.innerText())

  console.log('random item price: ', expectedPrice)
  console.log('random item name: ', expectedName)
  console.log('random item description: ', expectedDescription)

  await randomItem.getByRole('button', {name: 'Add to cart'}).click()

  await page.locator('#shopping_cart_container a').click()

  const actualName = await page.locator('.cart_item_label .inventory_item_name').innerText()
  const actualDescription = await page.locator('.cart_item_label .inventory_item_desc').innerText()
  const actualPrice = await page.locator('.cart_item_label .inventory_item_price').innerText()

  expect(actualName).toEqual(expectedName)
  expect(actualDescription).toEqual(expectedDescription)
  expect(actualPrice).toEqual(expectedPrice)

  await page.getByRole('button', {name: 'Checkout'}).click()

  await page.getByRole('button', {name: 'Continue'}).click()

  //await page.pause()

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});
