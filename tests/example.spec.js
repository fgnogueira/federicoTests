// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
	await page.goto('https://playwright.dev/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Playwright/);
});

// adding comments!!!
test('get started link', async ({ page }) => {
	await page.goto('https://playwright.dev/');

	// Click the get started link.
	await page.getByRole('link', { name: 'Get started' }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('testing search button', async ({ page }) => {
	await page.goto('https://www.zonajobs.com.ar/');
	await page.getByText('Puesto, empresa o palabra').click();
	await page.locator('#react-select-2-input').fill('testing');
	await page.getByText('Buscar Trabajo').click();
});

test('testing the search by keyboard', async ({ page }) => {
	await page.goto('https://www.zonajobs.com.ar/');
	await page.getByText('Puesto, empresa o palabra').click();
	await page.locator('#react-select-2-input').fill('testing');
	await page.keyboard.press('Enter');
});
