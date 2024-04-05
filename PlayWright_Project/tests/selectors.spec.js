import  {test,expect} from '@playwright/test' 

test('Selectors demo',async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.pause()
    await page.locator('id=user-name').fill('standard_user') 
   // await page.locator('[id="user-name"]').fill('locked_out_user')
    await page.locator('//input[@id="password"]').fill('secret_sauce11') 
    //await page.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    
})