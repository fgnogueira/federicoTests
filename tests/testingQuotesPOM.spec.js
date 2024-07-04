import { test, expect } from '@playwright/test';
import { loginPage } from './pageObject/loginPage';
import { quotesPage } from './pageObject/quotesPage';

test.beforeEach(async ({ page }) => {
	await page.goto('https://qa-staging-auto.kclient-staging.com/login');
});

test('test 1 - get a quote', async ({ page }) => {
	//await page.setViewportSize({ width: 1600, height: 1200 });
	const login = new loginPage(page);
	const quotes = new quotesPage(page);
	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.acceptCookiesButton.click();
	await quotes.newBookingLink.click();
	await quotes.exportButton.click();
	await quotes.fclButton.click();
	await quotes.fromInputField.fill('Pip');
	await page.keyboard.press('a');
	await quotes.suggestionFromItem.click();
	await quotes.toInputField.fill('New');
	await page.keyboard.press('Space');
	await quotes.suggestionToItem.click();
	await quotes.equipmentTypeBox.click();
	await quotes.optionIndex1.click();
	await quotes.viewQuotesButton.click();
	await expect(quotes.quotesTitle).toContainText('Quotes');
});
