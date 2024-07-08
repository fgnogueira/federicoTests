import {Keyboard, Locator , Page } from "@playwright/test"

export class contactsPage {

private  newContact: Locator
private  addContact: Locator
private  companyName: Locator
private  firstName: Locator
private  lastName: Locator
private  email: Locator
private  address1: Locator
private  address2: Locator
private  city: Locator
private  state: Locator
private  country: Locator
private  postcode: Locator
private  telephone: Locator
private  fax: Locator
private  vat: Locator
private  customerCode: Locator
private  saveContactDetails: Locator
private  country1: Locator
private  country2: Locator
private  country3: Locator



constructor(page:Page){

    this.newContact = page.locator('xpath=//*[@data-test-action="contacts"]')
    this.addContact = page.locator('xpath=//*[@data-test-action="add-contact"]')
    this.companyName = page.locator('xpath=//*[@data-test-input="company-name"]')
    this.firstName = page.locator('xpath=//*[@data-test-input="first-name"]')
    this.lastName = page.locator('xpath=//*[@data-test-input="last-name"]')
    this.email = page.locator('xpath=//*[@data-test-input="email"]')
    this.address1 = page.locator('xpath=//*[@data-test-input="address1"]')
    this.address2 = page.locator('xpath=//*[@data-test-input="address2"]')
    this.city = page.locator('xpath=//*[@data-test-input="city-town"]')
    this.state = page.locator('xpath=//*[@data-test-input="region"]')
    this.country = page.locator('xpath=//*[@data-test-input="country"]')
    this.postcode = page.locator('xpath=//*[@data-test-input="post-code"]')
    this.telephone = page.locator('xpath=//*[@data-test-input="phone"]')
    this.fax = page.locator('xpath=//*[@data-test-input="fax"]')
    this.vat = page.locator('xpath=//*[@data-test-input="vat-no"]')
    this.customerCode = page.locator('xpath=//*[@data-test-input="customer-code"]')
    this.saveContactDetails = page.locator('xpath=//*[@data-test-action="create-contact"]')
    this.country1 = page.locator('xpath=//*[@data-option-index="1"]')
    this.country2 = page.locator('xpath=//*[@data-option-index="2"]')
    this.country3 = page.locator('xpath=//*[@data-option-index="3"]')

}

async newContactLink(){
    await this.newContact.click();
    
 }

 async addContactLink(){
    await this.addContact.click();
    
 }

 async companyNameField(company:string){
    await this.companyName.fill(company);
    
 }

 async firstNameField(firstName:string){
    await this.firstName.fill(firstName);
    
 }
 async lastNameField(lastName:string){
    await this.lastName.fill(lastName);
    
 }

 async emailField(email:string){
    await this.email.fill(email);
    
 }
 async address1Field(address1:string){
    await this.address1.fill(address1);
    
 }

 async address2Field(address2:string){
    await this.address2.fill(address2);
    
 }
 async cityField(city:string){
    await this.city.fill(city);
    
 }

 async stateField(state:string){
    await this.state.fill(state);
    
 }
 async countryField(){
    await this.country.click();
    
 }

 async postcodeField(postcode:string){
    await this.postcode.fill(postcode);
    
 }
 async telephoneField(telephone:string){
    await this.telephone.fill(telephone);
    
 }

 async faxField(fax:string){
    await this.fax.fill(fax);
    
 }

 async vatField(vat:string){
    await this.vat.fill(vat);
    
 }
 async customerCodeField(customerCode:string){
    await this.customerCode.fill(customerCode);
    
 }

 async saveContactDetailsButton(){
    await this.saveContactDetails.click();
    
 }

 async country1Item(){
   await this.country1.click();
   
}

async country2Item(){
   await this.country2.click();
   
}

async country3Item(){
   await this.country3.click();
   
}

}