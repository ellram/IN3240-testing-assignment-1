/**
 * Run npx:
 * npx playwright test test_banking_operations.spec.ts
 */

import { test, expect } from '@playwright/test';
import { executionAsyncId } from 'node:async_hooks';

test.describe('Testing suite for testing tree different functionallities from webpage parabank', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.fill('input[name="username"]', 'john');
        await page.fill('input[name="password"]', 'demo');
        await page.locator('input[type="submit"][value="Log In"]').click(); 
        //await page.waitForTimeout(2000); // venter 2 sekunder så jeg rekker å se hva som skjer

    });

    test.afterEach(async ({ page }) => {
        await page.click('a[href*="logout.htm"]');
        await expect(page.locator('input[value="Log In"]')).toBeVisible();
    });

    test('test open new account creates new accoun successfully', async ({ page }) => {

        //trykk på riktige felter
        await page.locator('li >> text=Open New Account').click();
        await page.locator('select#type').selectOption({ label: 'SAVINGS' });
        await page.locator('select#fromAccountId').selectOption({ label: '12789' }); //denne kontostringen må byttes ut basert på hvilke kontoer som finnes i databasen på tidspunktet av testingen
        await page.locator('input[type="button"][value="Open New Account"]').click(); 

        //bekreft på side
        const message = page.locator('#openAccountResult p', { hasText: 'Congratulations' });
        await expect(message).toHaveCount(1);    
        const accountLink = page.locator('#newAccountId');
        await expect(accountLink).toHaveCount(1);

        await page.waitForTimeout(2000) //bare for testing

    });
}); 


