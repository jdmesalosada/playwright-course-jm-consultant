import { test, expect } from '@playwright/test'

test('purchase an item', async ({ page }) => {

    await page.goto('https://original-testing3.admitone.com/secure/events/64a82391e4678570ac214430/attendees')

    await page.locator('id=okta-signin-username').fill('regression.testing.mrg.1@webonoid.com')
    await page.locator('id=okta-signin-password').fill('Platano2!')
    await page.locator('id=okta-signin-submit').click()


    const text = await page.locator("xpath=//input[@placeholder='Referral Code Unique ID' and @value='merlin']/../../..//h3").innerText()
    const text2 = await page.locator("xpath=//input[@placeholder='Referral Code Unique ID' and @value='merlin']/../../..//h3").textContent()
    const text3 = await page.locator("xpath=//input[@placeholder='Referral Code Unique ID' and @value='merlin']/../../..//h3").innerHTML()

    console.log('inner text', text)
    console.log('text content', text2)
    console.log('inner html', text3)

});