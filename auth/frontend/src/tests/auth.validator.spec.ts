import { validateLoginData, validateRegisterData } from "../scripts/validators/auth.validators";

describe("Validators", () => {
    describe("validateRegisterData", () => {
        test("Should not throw whith a valid name", () => {
            const validName = 'Josias Abreu';
            const validEmail = 'josiasabreu@gmail.com';
            const validPassword = '123456';
            expect(() => {
                validateRegisterData(validName, validEmail, validPassword);
            }).not.toThrow();
        })

        test("Should not throw whith a invalid name", () => {
            const invalidName = '';
            const validEmail = 'josiasabreu@gmail.com';
            const validPassword = '123456';

            expect(() => {
                validateRegisterData(invalidName, validEmail, validPassword);
            }).toThrow('Digite um nome');

        })

        test("Should not throw whith a valid name", () => {
            const validName = 'Josias Abreu';
            const invalidEmail = '';
            const validPassword = '123456';

            expect(() => {
                validateRegisterData(validName, invalidEmail, validPassword);
            }).toThrow('Digite um email');
        })

        test("Should not throw whith a valid name", () => {
            const validName = 'Josias Abreu';
            const validEmail = 'josiasabreu@gmail.com';
            const invalidPassword = '123';

            expect(() => {
                validateRegisterData(validName, validEmail, invalidPassword);
            }).toThrow('A senha deve ter pelo menos 6 caracteres');
        })

    })

    describe("validateLoginData", () => {
        test("Should not throw whith a valid name", () => {
            const validEmail = 'josiasabreu@gmail.com';
            const validPassword = '123456';

            expect(() => {
                validateLoginData(validEmail, validPassword)
            }).not.toThrow();
        })

        test("Should not throw whith a valid name", () => {
            const invalidEmail = '';
            const validPassword = '123456';

            expect(() => {
                validateLoginData(invalidEmail, validPassword)
            }).toThrow('Digite um email');
        })

        test("Should not throw whith a valid name", () => {
            const validEmail = 'josiasabreu@gmail.com';
            const invalidPassword = '';

            expect(() => {
                validateLoginData(validEmail, invalidPassword)
            }).toThrow('Digite uma senha');
        })
    })
}) 