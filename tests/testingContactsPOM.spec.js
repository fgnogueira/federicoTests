import { test, expect } from '@playwright/test';
import { loginPage } from './pageObject/loginPage';
import { quotesPage } from './pageObject/quotesPage';
import { contactsPage } from './pageObject/contactsPage';

test.beforeEach(async ({ page }) => {
	await page.goto('https://qa-staging-auto.kclient-staging.com/login');
});

test('test 1 - create a new contact', async ({ page }) => {
	//await page.setViewportSize({ width: 1600, height: 1200 });
	const login = new loginPage(page);
	const contacts = new contactsPage(page);
	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.acceptCookiesButton.click();
	// TO DO - HERE!!!
});
