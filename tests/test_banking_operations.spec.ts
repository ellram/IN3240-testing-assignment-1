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

    //test case 02
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
    
    //test case 03
    test('Transfer funds to accounts', async ({ page }) => {
        await page.getByText('Transfer Funds').click();

        //fyll inn felter
        await page.locator('#amount').fill('500');
        await page.locator('#fromAccountId').selectOption('12345');
        await page.locator('#toAccountId').selectOption('12456');
        await page.getByRole('button', { name: 'Transfer' }).click();

        //bekreftelse på siden
        const amount = page.locator('#amountResult');
        await expect(amount).toHaveText('$500.00');
        const fromAccount = page.locator('#fromAccountIdResult');
        await expect(fromAccount).toHaveText('12345');
        const toAccount = page.locator('#toAccountIdResult');
        await expect(toAccount).toHaveText('12456');
    });
}); 


