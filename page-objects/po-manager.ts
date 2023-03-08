import { Page } from '@playwright/test'
import { LoginPage } from './login-page'

export class POManager {
    private page: Page
    private loginPage: LoginPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
    }

    getLoginPage(): LoginPage {
        return this.loginPage
    }
}
