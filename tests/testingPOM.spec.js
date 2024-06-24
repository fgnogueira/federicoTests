import { test, expect } from '@playwright/test';
import { loginPage } from './pageObject/loginPage';

test.beforeEach(async ({ page }) => {
	await page.goto('https://qa-staging-auto.kclient-staging.com/login');
});

test('test 1 - buttons present and clickables', async ({ page }) => {
	//await page.goto('https://qa-staging-auto.kclient-staging.com/login');
	const login = new loginPage(page);
	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.checkingLinks();
	//await login.completedOrdersTab.click(); - We can use the locators individually.
});

test('test 2 - going to settings', async ({ page }) => {
	//await page.goto('https://qa-staging-auto.kclient-staging.com/login');
	const login = new loginPage(page);
	await login.fillUserName('qaautostaging@email.ghostinspector.com');
	await login.fillPassword('Automation123!');
	await login.clickOnLogin();
	await expect(page.locator('body')).toContainText('Dashboard');
	await page.getByRole('link', { name: 'Settings' }).click();
	await expect(page.locator('body')).toContainText('Settings');
	await expect(page.locator('body')).toContainText('Account Details');
});
