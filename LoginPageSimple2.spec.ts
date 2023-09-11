// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://utility2.intrahealth.com/1004/hcare/#/login');
    await page.getByRole('textbox').first().fill('MOR');
    await page.locator('input[type="password"]').fill('MOR');
    //next step checks if button 'Log In' is enabled after entering login name and password
    await expect(page.getByText('Log In')).toBeEnabled();
    //next step makes click on Log In button
    await page.getByText('Log In').click();
    
});
