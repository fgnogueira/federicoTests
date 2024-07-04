import {Locator , Page} from "@playwright/test"

export class quotesPage {

private  newBookingLink: Locator
private  exportButton: Locator
private  importButton: Locator
private  fclButton: Locator
private  lclButton: Locator
private  fromInputField: Locator
private  toInputField: Locator
private  suggestionFromItem: Locator
private  suggestionToItem: Locator
private  equipmentTypeBox: Locator
private  optionIndex1: Locator
private  viewQuotesButton: Locator
private  quotesTitle: Locator


constructor(page:Page){

    this.newBookingLink = page.locator('xpath=//*[@data-test-link="new-booking"]')
    this.exportButton = page.locator('xpath=//*[@data-test-action="export"]')
    this.importButton = page.locator('xpath=//*[@data-test-action="import"]')
    this.fclButton = page.locator('xpath=//*[@data-test-action="fcl"]')
    this.lclButton = page.locator('xpath=//*[@data-test-action="lcl"]')
    this.fromInputField = page.locator('xpath=//*[@data-test-input="from"]')
    this.toInputField = page.locator('xpath=//*[@data-test-input="to"]')
    this.suggestionFromItem = page.locator('xpath=//*[@data-test-data="suggestion-from"]')
    this.suggestionToItem = page.locator('xpath=//*[@data-test-data="suggestion-to"]')
    this.equipmentTypeBox = page.locator('xpath=//*[@data-test-input="0-equipment-type"]')
    this.optionIndex1 = page.locator('xpath=//*[@data-option-index="0"]')
    this.viewQuotesButton = page.locator('xpath=//*[@data-test-action="view-quotes"]')
    this.quotesTitle = page.locator('xpath=//*[@class="quote-tools-holder"]/h1')
}

}