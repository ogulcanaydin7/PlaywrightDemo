import test, { page, expect } from '@playwright/test'

test('Assertions Demo', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    // assertions
    //elementin varlığını, yokluğunu kontrol et
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    

    if(await page.$('text=The Kitchen'))
    // varlığını kontrol et varsa tıkla
    await page.locator('text=The Kitchen').click()

    //görünürrlüğünü kontrol et
    await expect(page.locator('text=The Kitchen')).toBeVisible()
   // await expect.soft(page.locator('text=The Kitchen')).toBeHidden() //soft assertion yaptık yani hata alındığında testi durdurmayacak

    //etkin yada devredışı durumu kontrol et
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled() //soft assertion yaptık yani hata alındığında testi durdurmayacak

    //YAzı eşleşmelerini kontrol et
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchn')

    //özelliğe göre kontrol
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)// "/.* işaretlerinin anlmaı sqldeki % gibi öncesini doldurur"
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //url kontrol etme bu da örneğin loginden sonra gelen sayfa urlsini kontrol etmek için
    // Title da sekmede yazan başlık
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle('The Kitchen') // veya /.*Kitchen
    //Screenshot almak için ilkinden sonraki testte öncekiyle kontrol ediyor aynımı
    //  await expect(page).toHaveScreenShot()


})  