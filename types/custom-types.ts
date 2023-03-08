export type User = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
}

export type LoginRequestPayload = {
    userEmail: string
    userPassword: string
}

export type LoginResponsePayload = {
    message: string
    token: string
    userId: string
}
