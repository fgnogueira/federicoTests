import {Locator , Page} from "@playwright/test"

export class loginPage {

private  usernameTextBox: Locator
private  passwordTextBox: Locator
private  loginButton: Locator
private  completedOrdersTab: Locator
private  cancelledOrdersTab: Locator
private  sharedQuotesTab: Locator
private  bookmarksTab: Locator
private  settingsLink: Locator
private  contactsButton: Locator
private  closeContactsButton: Locator
private  logoutButton: Locator
private  acceptCookiesButton: Locator
private  errorMessage: Locator


constructor(page:Page){

    this.usernameTextBox = page.getByPlaceholder('Username or Email Address')
    this.passwordTextBox = page.getByPlaceholder('Password')
    this.loginButton = page.getByRole('button', { name: 'Sign in' })
    this.completedOrdersTab = page.getByRole('tab', { name: 'Completed Orders' })
    this.cancelledOrdersTab = page.getByRole('tab', { name: 'Cancelled Orders' })
    this.sharedQuotesTab = page.getByRole('tab', { name: 'Shared Quotes' })
    this.bookmarksTab = page.getByRole('tab', { name: 'Bookmarks' })
    this.settingsLink = page.getByRole('link', { name: ' Settings' })
    this.contactsButton = page.getByRole('button', { name: ' Contacts' })
    this.closeContactsButton = page.getByRole('button', { name: ' Close contacts' })
    this.logoutButton = page.getByRole('button', { name: ' Logout' })
    this.acceptCookiesButton = page.locator('xpath=//*[@data-test-action="accept-cookie"]')
    this.errorMessage = page.locator('xpath=//*[@class="alert-box show-alert general-error ember-view"]/p')

}



async fillUserName(username:string){
   await this.usernameTextBox.fill(username);
}

async fillPassword(password:string){
    await this.passwordTextBox.fill(password);
}

async clickOnLogin(){
    await this.loginButton.click();
}

async loginWithCredentials(username:string, password:string){
    await this.usernameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    await this.acceptCookiesButton.click();
}

async checkingLinks(){
    await this.completedOrdersTab.click();
    await this.cancelledOrdersTab.click();
	await this.sharedQuotesTab.click();
	await this.bookmarksTab.click();
	await this.settingsLink.click();
	await this.contactsButton.click();
	await this.closeContactsButton.click();
	await this.logoutButton.click();

}

}