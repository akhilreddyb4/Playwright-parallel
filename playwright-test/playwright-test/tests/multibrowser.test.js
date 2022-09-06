/*const playwright = require('playwright');
const { test, expect } = require('@playwright/test');
//test.describe.configure({ mode: 'parallel' });

for (const browserType of ["chromium", "firefox", "webkit"]) {
    test.describe(`(${browserType}):UI tests for textbox`, () => {
        let browser = null;
        let page = null;
        let context = null;
        test(`(${browserType}):Should be able to verify text page`, async ({ page }) => {
            browser = await playwright[browserType].launch({ headless: false, slowMo: 300 });
            context = await browser.newContext();
            page = await context.newPage();
            page.setViewportSize({ width: 1920, height: 1080 });
            await page.goto('https://demoqa.com/text-box');
            await page.locator('//input[@id="userName"]').fill('John Doe');
            await page.locator('//input[@id="userEmail"]').fill('testing@gmail.com');
            await page.locator('//textarea[@id="currentAddress"]').fill('1405 Testing Blvd');
            await page.locator('//textarea[@id="permanentAddress"]').fill('2508 Developing Blvd');
            await page.locator('//button[@id="submit"]').click();
            await expect(page.locator('//p[@id="name"]')).toHaveText('Name:John Doe');
            await expect(page.locator('//p[@id="email"]')).toHaveText('Email:testing@gmail.com');
            await expect(page.locator('//p[@id="currentAddress"]')).toHaveText('Current Address :1405 Testing Blvd ');
            await expect(page.locator('//p[@id="permanentAddress"]')).toHaveText('Permananet Address :2508 Developing Blvd');
        });

        test(`(${browserType}):Should be able to verify text page 2`, async ({ page }) => {
            browser = await playwright[browserType].launch({ headless: false, slowMo: 300 });
            context = await browser.newContext();
            page = await context.newPage();
            page.setViewportSize({ width: 1920, height: 1080 });
            await page.goto('https://demoqa.com/text-box');
            await page.locator('//input[@id="userName"]').fill('John Doe');
            await page.locator('//input[@id="userEmail"]').fill('testing@gmail.com');
            await page.locator('//textarea[@id="currentAddress"]').fill('1405 Testing Blvd');
            await page.locator('//textarea[@id="permanentAddress"]').fill('2508 Developing Blvd');
            await page.locator('//button[@id="submit"]').click();
            await expect(page.locator('//p[@id="name"]')).toHaveText('Name:John Doe');
            await expect(page.locator('//p[@id="email"]')).toHaveText('Email:testing@gmail.com');
            await expect(page.locator('//p[@id="currentAddress"]')).toHaveText('Current Address :1405 Testing Blvd ');
            await expect(page.locator('//p[@id="permanentAddress"]')).toHaveText('Permananet Address :2508 Developing Blvd');
        });
    });

}

*/