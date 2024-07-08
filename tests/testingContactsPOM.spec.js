import { test, expect } from '@playwright/test';
import { loginPage } from './pageObject/loginPage';
import { contactsPage } from './pageObject/contactsPage';
import { faker } from '@faker-js/faker/locale/en';

test.beforeEach(async ({ page }) => {
	await page.goto('https://qa-staging-auto.kclient-staging.com/login');
});

test('test 1 - create a new contact', async ({ page }) => {
	//await page.setViewportSize({ width: 1600, height: 1200 });
	const login = new loginPage(page);
	const contacts = new contactsPage(page);
	const company = faker.company.name();
	const username = faker.person.firstName();
	const lastname = faker.person.lastName();
	const email = faker.internet.email();
	const address1 = faker.location.street();
	const address2 = faker.location.streetAddress();
	const city = faker.location.city();
	const state = faker.location.state();
	const postcode = faker.location.zipCode();
	const phoneNumber = faker.phone.number();
	const fax = faker.phone.number();
	const vat = faker.string.numeric(8);
	const customerCode = faker.string.numeric(8);

	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.acceptCookiesButton.click();
	await contacts.newContactLink();
	await contacts.addContactLink();
	await contacts.companyNameField(company);
	await contacts.firstNameField(username);
	await contacts.lastNameField(lastname);
	await contacts.emailField(email);
	await contacts.address1Field(address1);
	await contacts.address2Field(address2);
	await contacts.cityField(city);
	await contacts.stateField(state);
	await contacts.countryField();
	await contacts.postcodeField(postcode);
	await contacts.country1Item();
	await contacts.telephoneField(phoneNumber);
	await contacts.faxField(fax);
	await contacts.vatField(vat);
	await contacts.customerCodeField(customerCode);
	await contacts.saveContactDetailsButton();
});

test('test 2 - create a new contact parameterized', async ({ page }) => {
	//await page.setViewportSize({ width: 1600, height: 1200 });
	const login = new loginPage(page);
	const contacts = new contactsPage(page);
	const username = faker.person.firstName();
	const company = faker.company.name();
	await login.loginWithCredentials('qaautostaging@email.ghostinspector.com', 'Automation123!');
	await login.acceptCookiesButton.click();
});
