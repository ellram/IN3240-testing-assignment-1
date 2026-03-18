import { test, expect } from '@playwright/test';
import { executionAsyncId } from 'node:async_hooks';

test.describe('Testing suite for testing tree different functionallities from webpage parabank', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.fill('input[name="username"]', 'john');
        await page.fill('input[name="password"]', 'demo');
        await page.locator('input[type="submit"][value="Log In"]').click(); 
        await page.waitForTimeout(2000); // venter 2 sekunder så jeg rekker å se hva som skjer

    });

    test.afterEach(async ({ page }) => {
        await page.click('a[href*="logout.htm"]');
        await expect(page.locator('input[value="Log In"]')).toBeVisible();
    });

    test('test open new account creates new accoun successfully', async ({ page }) => {
        await page.locator('ul.button li.contact a').click();    
    });
}); 

//npx playwright test test_banking_operations.spec.ts
