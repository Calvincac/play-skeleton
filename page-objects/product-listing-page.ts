import { Locator, Page } from '@playwright/test'

export class ProductListingPage {
    public firstName: Locator

    constructor(page: Page) {
        this.firstName = page.locator('#firstName')
    }
}
