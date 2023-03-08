import { test } from '@playwright/test'
import { LoginPageActions } from '../page-actions/login-page-actions'
import * as registeredUsers from '../data/registeredUsers'

test.beforeEach(async ({ page }) => {
    const loginPageActions = new LoginPageActions(page)
    await loginPageActions.visit()
})

test.describe('Login Page', () => {
    test('should be able to register new user', async ({ page }) => {
        const loginPageActions = new LoginPageActions(page)
        await loginPageActions.registerNewUser()
    })

    test('should be able to log in', async ({ page }) => {
        const loginPageActions = new LoginPageActions(page)
        await loginPageActions.login(registeredUsers.user1)
    })
})
