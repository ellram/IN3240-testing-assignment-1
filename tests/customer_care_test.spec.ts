import { test, expect } from '@playwright/test';

test('has link', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page).toHaveTitle(/ParaBank/);
});

/* jeg er ikke helt sikker på om det er best practice å dele de to her opp i to tester
eller om vi skal bare kjøre de inn i en og samme. Da tenker jeg på testen for a) gå til customer support side,
og b) fylle inn feltene.

test('go to customer care', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('ul.button li.contact a').click();
});
*/

test('fill inn information in fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('ul.button li.contact a').click()
  
  await page.fill('#name', 'Quorra T. Flynn');
  await page.fill('#email', 'quorra@example.com');
  await page.fill('#phone', '12345678');
  await page.fill('#message', 'This is a test message.');
  
  // for å se testing, bruk denne:
  await page.pause();
  
  await page.click('#contactForm input[type="submit"]');

  const messages = page.locator('#rightPanel p');
  await expect(messages).toHaveCount(2);
});

