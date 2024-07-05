import {Keyboard, Locator , Page } from "@playwright/test"

export class contactsPage {

private  newContact: Locator




constructor(page:Page){

    this.newContact = page.locator('xpath=//*[@data-test-action="contacts"]')

   

}

async newContactLink(){
    await this.newContact.click();
    
 }
 
}