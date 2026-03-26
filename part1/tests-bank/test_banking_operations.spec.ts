import { test, expect } from '@playwright/test';
test.describe('Testing suite for testing tree different functionallities from webpage parabank', () => {
    
    //beforehooks
    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.fill('input[name="username"]', 'john');
        await page.fill('input[name="password"]', 'demo');
        await page.locator('input[type="submit"][value="Log In"]').click(); 
    });

    //afterhooks
    test.afterEach(async ({ page }) => {
        await page.click('a[href*="logout.htm"]');
        await expect(page.locator('input[value="Log In"]')).toBeVisible();
    });

    //test case 02 ==> Open new account
    test('test open new account creates new accoun successfully', async ({ page }) => {
        await page.locator('li >> text=Open New Account').click();
        await page.locator('select#type').selectOption({ label: 'SAVINGS' });
        await page.locator('input[type="button"][value="Open New Account"]').click(); 
        const message = page.locator('#openAccountResult p', { hasText: 'Congratulations' });
        await expect(message).toHaveCount(1);    
        const accountLink = page.locator('#newAccountId');
        await expect(accountLink).toHaveCount(1);
      });

    //test case 03 ==> Fund transfer
    test('Transfer funds to accounts', async ({ page }) => {
        await page.getByText('Transfer Funds').click();
        await page.locator('#amount').fill('500');
        const options = await page.locator('#toAccountId option').allTextContents();
        const randomOption = options[Math.floor(Math.random() * options.length)];
        await page.locator('#toAccountId').selectOption({ label: randomOption });
        await page.getByRole('button', { name: 'Transfer' }).click();
        const amount = page.locator('#amountResult');
        await expect(amount).toHaveText('$500.00');
    });

    //test case 04 ==> Bill pay
    test('Bill pay', async ({ page }) => {
        await page.getByText('Bill Pay').click();
        await page.locator('input[name="payee.name"]').fill('Quorra');
        await page.locator('input[name="payee.address.street"]').fill('The Grid');
        await page.locator('input[name="payee.address.city"]').fill('Tron City');
        await page.locator('input[name="payee.address.state"]').fill('California');
        await page.locator('input[name="payee.address.zipCode"]').fill('8766');
        await page.locator('input[name="payee.phoneNumber"]').fill('777 22 333');
        await page.locator('input[name="payee.accountNumber"]').fill('001100');
        await page.locator('input[name="verifyAccount"]').fill('001100');
        await page.locator('input[name="amount"]').fill('500');
        await page.getByRole('button', { name: 'Send Payment' }).click();
        await expect(page.locator('#billpayResult')).toBeVisible();
     })
});