import { test } from '@playwright/test'

test.skip('Test 1', async () => { 
    //annotation dipnot demek keliem olarak

})
test('not yet ready', async ({ page }) => {
    test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {
    //
});
test('slow test', async ({ page }) => {
    test.slow();
});

test('focus this test', async ({ page }) => { 
    //test.only var burada ama kaldırdım diğerleri için
    // Run only focused tests in the entire project
});

test('Test full report @fast', async ({ page }) => { // etiketli test
    // npx playwright test --grep “@fast” komutu ile etiektli testi çalıştır
    // npx playwright test --grep-invert “@fast" bu kod da etiketli olanları geçmek için
  });