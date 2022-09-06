
const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'parallel' });

test.describe(`UI tests for textbox`, () => {
    
    let browser = null;
    let page = null;
    let context = null;

    test.beforeAll(async() =>{
      browser = await chromium.launch({ headless: false, slowMo: 300 });
      context = await browser.newContext();
      page = await context.newPage();
      page.setViewportSize({ width: 1920, height: 1080 });
    });

    test.afterAll(async() =>{
       await browser.close();
    });

    test(`Scenario 1`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 2`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });
    
    test(`Scenario 3`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 4`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 5`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 6`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 7`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 8`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 9`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 10`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 11`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 12`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 13`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 14`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });

    test(`Scenario 15`, async() =>{
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
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-checkbox"]').click();
        await expect(page.locator('//div[@id="result"]/span[1]')).toHaveText('You have selected :');
    });
});

