import { faker } from '@faker-js/faker'
import { User } from '../types/user'

export class DataBuilder {
    public getNewUser(): User {
        const user: User = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number('##########'),
            password: faker.internet.password(),
        }
        return user
    }
}
