import { loginDataValidator, registerDataValidator } from "../../validators/auth.validators";

describe("Auth Validators", () => {
    describe("loginDataValidator", () => {
        it("should validate valid login data", () => {
            const validData = { email: "test@example.com", password: "123456" };
            const { error } = loginDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid login data", () => {
            const invalidData = { email: "invalid-email", password: "123" };
            const { error } = loginDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });

    describe("registerDataValidator", () => {
        it("should validate valid register data", () => {
            const validData = { name: "John Doe", email: "test@example.com", password: "123456" };
            const { error } = registerDataValidator.validate(validData);
            expect(error).toBeUndefined();
        });

        it("should invalidate invalid register data", () => {
            const invalidData = { name: "John", email: "invalid-email", password: "123" };
            const { error } = registerDataValidator.validate(invalidData);
            expect(error).toBeDefined();
        });
    });
});
