import {Locator , Page} from "@playwright/test"

export class loginPage {

private  usernameTextBox: Locator
private  passwordTextBox: Locator
private  loginButton: Locator


constructor(page:Page){

    this.usernameTextBox = page.getByPlaceholder('Username or Email Address')
    this.passwordTextBox = page.getByPlaceholder('Password')
    this.loginButton = page.getByRole('button', { name: 'Sign in' })
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
}

}


   // await page.getByPlaceholder('Username or Email Address').fill('qaautostaging@email.ghostinspector.com');
//	await page.getByPlaceholder('Password').fill('Automation123!');
//	await page.getByRole('button', { name: 'Sign in' }).click();