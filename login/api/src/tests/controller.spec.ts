import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";

jest.mock('../services/auth.service', () => {
    const service = {
        registerUser: jest.fn(),
        login: jest.fn()
    };
    return { AuthService: jest.fn(() => service) };
});

describe('Auth Controller', () => {
    afterAll(() => {
        jest.resetAllMocks()
    })
    describe('Login function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should do a user login with valid data', async () => {
            const authService = new AuthService();
            (authService.login as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const email = "test@gmail.com"
            const password = '123456'

            const authController = new AuthController();
            const response = await authController.login({ email, password });
            expect(authService.login).toHaveBeenCalledTimes(1);
            expect(authService.login).toHaveBeenCalledWith(email, password);
            expect(response).toBe('tokenJWT');
        });

        test('Should throw exception by email be invalid', async () => {
            const authService = new AuthService();
            (authService.login as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const email = "test.com"
            const password = '123456'

            const authController = new AuthController();
            expect(async () => await authController.login({ email, password })).rejects.toThrow(`\"email\" must be a valid email`);
        });

        test('Should throw exception by password be invalid', async () => {
            const authService = new AuthService();
            (authService.login as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const email = "test@gmail.com"
            const password = '123'

            const authController = new AuthController();
            expect(async () => await authController.login({ email, password })).rejects.toThrow(`\"password\" length must be at least 6 characters long`);
        });
    })

    describe('Register function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should do a user register with valid data', async () => {
            const authService = new AuthService();
            (authService.registerUser as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const name = "Name teste"
            const email = "test@gmail.com"
            const password = '123456'

            const authController = new AuthController();
            const response = await authController.registerUser({ name, email, password });
            expect(authService.registerUser).toHaveBeenCalledTimes(1);
            expect(authService.registerUser).toHaveBeenCalledWith(name, email, password);
            expect(response).toBe('tokenJWT');
        });

        test('Should throw exception by email be invalid', async () => {
            const authService = new AuthService();
            (authService.registerUser as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const name = "Name teste"
            const email = "test.com"
            const password = '123456'

            const authController = new AuthController();
            expect(async () => await authController.registerUser({ name, email, password })).rejects.toThrow(`\"email\" must be a valid email`);
        });

        test('Should throw exception by password be invalid', async () => {
            const authService = new AuthService();
            (authService.registerUser as jest.MockedFunction<any>).mockResolvedValueOnce('tokenJWT');

            const name = "Name teste"
            const email = "test@gmail.com"
            const password = '123'

            const authController = new AuthController();
            expect(async () => await authController.registerUser({ name, email, password })).rejects.toThrow(`\"password\" length must be at least 6 characters long`);
        });
    })
});