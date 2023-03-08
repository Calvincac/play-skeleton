import { Page } from '@playwright/test'
import { LoginPage } from './login-page'
import { ProductListingPage } from './product-listing-page'

export class POManager {
    private page: Page
    private loginPage: LoginPage
    private productListingPage: ProductListingPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.productListingPage = new ProductListingPage(this.page)
    }

    public getLoginPage(): LoginPage {
        return this.loginPage
    }

    public getProductListingPage(): ProductListingPage {
        return this.productListingPage
    }
}
