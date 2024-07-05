import {Keyboard, Locator , Page } from "@playwright/test"

export class quotesPage {

private  newBooking: Locator
private  export: Locator
private  import: Locator
private  fcl: Locator
private  lcl: Locator
private  fromInput: Locator
private  toInput: Locator
private  suggestionFrom: Locator
private  suggestionTo: Locator
private  equipmentType: Locator
private  optionIndex1: Locator
private  viewQuotes: Locator
private  quotesTitle: Locator



constructor(page:Page, keyboard:Keyboard){

    this.newBooking = page.locator('xpath=//*[@data-test-link="new-booking"]')
    this.export = page.locator('xpath=//*[@data-test-action="export"]')
    this.import = page.locator('xpath=//*[@data-test-action="import"]')
    this.fcl = page.locator('xpath=//*[@data-test-action="fcl"]')
    this.lcl = page.locator('xpath=//*[@data-test-action="lcl"]')
    this.fromInput = page.locator('xpath=//*[@data-test-input="from"]')
    this.toInput = page.locator('xpath=//*[@data-test-input="to"]')
    this.suggestionFrom = page.locator('xpath=//*[@data-test-data="suggestion-from"]')
    this.suggestionTo = page.locator('xpath=//*[@data-test-data="suggestion-to"]')
    this.equipmentType = page.locator('xpath=//*[@data-test-input="0-equipment-type"]')
    this.optionIndex1 = page.locator('xpath=//*[@data-option-index="0"]')
    this.viewQuotes = page.locator('xpath=//*[@data-test-action="view-quotes"]')
    this.quotesTitle = page.locator('xpath=//*[@class="quote-tools-holder"]/h1')
   

}

async newBookingLink(){
    await this.newBooking.click();
}


async exportButton(){
    await this.export.click();
}


async importButton(){
    await this.import.click();
}


async fclButton(){
    await this.fcl.click();
}


async lclButton(){
    await this.lcl.click();
}


async fromInputField(from:string){
    await this.fromInput.fill(from);
}


async toInputField(to:string){
    await this.toInput.fill(to);
}


async suggestionFromItem(){
    await this.suggestionFrom.click();
}


async suggestionToItem(){
    await this.suggestionTo.click();
}


async equipmentTypeBox(){
    await this.equipmentType.click();
}


async viewQuotesButton(){
    await this.viewQuotes.click();
}

}