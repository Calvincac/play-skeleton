import { APIRequestContext, APIResponse } from '@playwright/test'
import { LoginPayload } from '../types/custom-types'

export class APIutils {
    apiContext: APIRequestContext
    loginPayload: LoginPayload

    constructor(apiContext: APIRequestContext, loginPayLoad: LoginPayload) {
        this.apiContext = apiContext
        this.loginPayload = loginPayLoad
    }

    public async getToken(): Promise<string> {
        const loginResponse: APIResponse = await this.apiContext.post(
            'https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data: this.loginPayload,
            }
        )
        const loginResponseJson = await loginResponse.json()
        const token = loginResponseJson.token
        return token
    }
}
