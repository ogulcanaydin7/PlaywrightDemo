import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('#username').fill('Raghav')
    await page.locator('#password').fill('1234')

    await page.waitForSelector('#log-in', { timeout: 5000 })
    await page.locator('#log-in').click()

})
test('Demo Login Test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()

    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('.oxd-button').click()
    await page.locator('.oxd-userdropdown-name').click();
    await page.locator('[href="/web/index.php/auth/logout"]').click();



})
test('Demo Login Test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})

