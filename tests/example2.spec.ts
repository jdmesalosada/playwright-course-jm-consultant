import { test, expect } from "@playwright/test";
import { LoginPage } from "./pageobjects/LoginPage";

test("purchase an item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  
  for (let container of itemsContainer) {
    console.log(await container.allTextContents());
  }
});

test("purchase an item 2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  
  for (let container of itemsContainer) {
    console.log(await container.allTextContents());
  }
});

test("purchase an item 3", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  const itemsContainer = await page
    .locator("#inventory_container .inventory_item")
    .all();
  
  for (let container of itemsContainer) {
    console.log(await container.allTextContents());
  }
});
