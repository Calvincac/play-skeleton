import { Page, expect, Locator } from '@playwright/test'
import { POManager } from '../page-objects/po-manager'
import { LoginPage } from '../page-objects/login-page'
import { DataBuilder } from '../data/data-builder'
import { User } from '../types/custom-types'
import { logger } from '../utils/logger'

export class LoginPageActions {
    private page: Page
    private poManager: POManager
    private loginPage: LoginPage
    private dataBuilder: DataBuilder

    constructor(page: Page) {
        this.page = page
        this.poManager = new POManager(this.page)
        this.loginPage = this.poManager.getLoginPage()
        this.dataBuilder = new DataBuilder()
    }

    public async visit(): Promise<void> {
        await this.page.goto('https://rahulshettyacademy.com/client')
    }

    public async registerNewUser(): Promise<void> {
        const user: User = this.dataBuilder.getNewUser()
        await this.page.waitForLoadState('networkidle')
        await this.loginPage.registerButton.click()
        await this.loginPage.firstName.type(user.firstName)
        await this.loginPage.lastName.type(user.lastName)
        await this.loginPage.email.type(user.email)
        await this.loginPage.phone.type(user.phoneNumber)
        await this.loginPage.password.type(user.password)
        await this.loginPage.confirmPassword.type(user.password)
        await this.loginPage.consentChecbox.click()
        await this.loginPage.loginButton.click()
        await this.page.waitForLoadState('networkidle')
        logger('User created', user)
    }

    public async login(userInfo: User): Promise<void> {
        await this.page.waitForLoadState('networkidle')
        await this.loginPage.email.type(userInfo.email)
        await this.loginPage.password.type(userInfo.password)
        await this.loginPage.loginButton.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.loginPage.email).not.toBeVisible()
        await expect(this.loginPage.password).not.toBeVisible()
    }
}
