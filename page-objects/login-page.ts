import { Locator, Page } from '@playwright/test'

export class LoginPage {
    public firstName: Locator
    public lastName: Locator
    public email: Locator
    public phone: Locator
    public password: Locator
    public confirmPassword: Locator
    public consentChecbox: Locator
    public registerButton: Locator
    public loginButton: Locator

    constructor(page: Page) {
        this.firstName = page.locator('#firstName')
        this.lastName = page.locator('#lastName')
        this.email = page.locator('#userEmail')
        this.phone = page.locator('#userMobile')
        this.password = page.locator('#userPassword')
        this.confirmPassword = page.locator('#confirmPassword')
        this.loginButton = page.locator('#login')
        this.registerButton = page.locator('a[routerlink="/auth/register"]')
        this.consentChecbox = page.locator('input[type="checkbox"]')
    }
}
