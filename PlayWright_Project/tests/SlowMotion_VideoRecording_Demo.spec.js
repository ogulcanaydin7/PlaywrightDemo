import { test, expect, chromium } from '@playwright/test'

test('Slow motion and video recording demo', async () => {

    const browser = await chromium.launch({
        slowMo:500
    });

    const context = await browser.newContext({
        recordVideo:{
            dir:'videos/',
            size:{width:800,height:600}
        }
    });
    const page = await context.newPage();
    
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    await context.close();
})