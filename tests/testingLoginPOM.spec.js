import { test, expect } from '@playwright/test';
import { loginPage } from './pageObject/loginPage';

test.beforeEach(async ({ page }) => {
	await page.goto('https://qa-staging-auto.kclient-staging.com/login');
});

test('test 1 - buttons present and clickables', async ({ page }) => {
	const login = new loginPage(page);
	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.checkingLinks();
});

test('test 2 - going to settings', async ({ page }) => {
	const login = new loginPage(page);
	await login.fillUserName('qaautostaging@email.ghostinspector.com');
	await login.fillPassword('Automation123!');
	await login.clickOnLogin();
	await expect(page.locator('body')).toContainText('Dashboard');
	await page.getByRole('link', { name: 'Settings' }).click();
	await expect(page.locator('body')).toContainText('Settings');
	await expect(page.locator('body')).toContainText('Account Details');
});

test('test 3 - login with wrong credentials', async ({ page }) => {
	const login = new loginPage(page);
	await login.fillUserName('qasdasd@email.ghostinspector.com');
	await login.fillPassword('asdasd');
	await login.clickOnLogin();
	await expect(login.errorMessage).toContainText('Email and/or password incorrect');
});
