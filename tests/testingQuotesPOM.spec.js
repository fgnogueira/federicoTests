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
	await quotes.newBookingLink();
	await quotes.exportButton();
	await quotes.fclButton();
	await quotes.fromInputField('Pip');
	await page.keyboard.press('Space');
	await quotes.suggestionFromItem();
	await quotes.toInputField('New');
	await page.keyboard.press('Space');
	await quotes.suggestionToItem();
	await quotes.equipmentTypeBox();
	await quotes.optionIndex1.click();
	await quotes.viewQuotesButton();
	await expect(quotes.quotesTitle).toContainText('Quotes');
});
