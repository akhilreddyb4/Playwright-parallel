const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });

test.describe(`UI tests for checkbox`, () => {
    
    let browser = null;
    let page = null;
    let context = null;

    // runs before all tests
    test.beforeEach(async() =>{
      browser = await chromium.launch({ headless: false, slowMo: 300 });
      context = await browser.newContext();
      page = await context.newPage();
      page.setViewportSize({ width: 1920, height: 1080 });
    });

    // runs after all tests
    test.afterEach(async() =>{
       await browser.close();
    });

    test(`Should be able to verify checkbox page 1`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 2`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 3`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 4`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 5`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 6`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 7`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 8`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 9`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Should be able to verify checkbox page 10`, async() =>{
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });
});
