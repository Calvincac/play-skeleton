import { Page, expect, Locator } from '@playwright/test'
import { POManager } from '../page-objects/po-manager'
import { logger } from '../utils/logger'
import { ProductListingPage } from '../page-objects/product-listing-page'

export class ProductListingPageActions {
    private page: Page
    private poManager: POManager
    private productListingPage: ProductListingPage

    constructor(page: Page) {
        this.page = page
        this.poManager = new POManager(this.page)
        this.productListingPage = this.poManager.getProductListingPage()
    }
}
