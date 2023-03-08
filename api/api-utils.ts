import { APIRequestContext, APIResponse } from '@playwright/test'
import {
    LoginRequestPayload,
    LoginResponsePayload,
} from '../types/custom-types'

export class APIutils {
    apiContext: APIRequestContext
    loginPayload: LoginRequestPayload

    constructor(
        apiContext: APIRequestContext,
        loginPayLoad: LoginRequestPayload
    ) {
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
        const loginResponseJson: LoginResponsePayload =
            await loginResponse.json()
        const token: string = loginResponseJson.token
        return token
    }
}
