import { ILoginDataValidator, IRegisterDataValidator } from "../validators/auth.validators";

describe("Validators", () => {
    describe("ILoginDataValidator", () => {
        it("should validate valid login data", () => {
            const validData = { email: "test@example.com", password: "123456" };
            const { error } = ILoginDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid login data", () => {
            const invalidData = { email: "invalid-email", password: "123" };
            const { error } = ILoginDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });

    describe("IRegisterDataValidator", () => {
        it("should validate valid register data", () => {
            const validData = { name: "John Doe", email: "test@example.com", password: "123456" };
            const { error } = IRegisterDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid register data", () => {
            const invalidData = { name: "John", email: "invalid-email", password: "123" };
            const { error } = IRegisterDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });
});
