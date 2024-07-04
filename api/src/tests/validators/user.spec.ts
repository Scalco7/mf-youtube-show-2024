import { userDataValidator } from "../../validators/user.validators"

describe('User Validator', () => {
    describe('userDataValidator', () => {
        test('Should validate valid user data', () => {
            const validData = { name: 'Felipe', email: 'test@gmail.com', password: 'Test1234' }
            const { error } = userDataValidator.validate(validData)
            expect(error).toBeUndefined()
        })

        test('Should invalidate data with invalid email', () => {
            const invalidData = { name: 'Felipe', email: 'test', password: 'Test1234' }
            const { error } = userDataValidator.validate(invalidData)
            expect(error).toBeDefined()
        })

        test('Should invalidate data with invalid password', () => {
            const invalidData = { name: 'Felipe', email: 'test@gmail.com', password: '12' }
            const { error } = userDataValidator.validate(invalidData)
            expect(error).toBeDefined()
        })
    })
})