import { Locator, Page } from '@playwright/test'

export class ProductListingPage {
    public productCards: Locator
    public productsAmount: Locator

    constructor(page: Page) {
        this.productCards = page.locator('.card')
        this.productsAmount = page.locator('#res')
    }
}
