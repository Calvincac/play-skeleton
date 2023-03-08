export type User = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
}

export type LoginPayload = {
    userEmail: string
    userPassword: string
}
