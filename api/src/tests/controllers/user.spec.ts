import { InferAttributes, SetOptions, SaveOptions, FindOptions, InstanceUpdateOptions, InstanceDestroyOptions, InstanceRestoreOptions, IncrementDecrementOptionsWithBy, Model, InferCreationAttributes } from "sequelize";
import { SequelizeHooks } from "sequelize/types/hooks";
import { ValidationOptions } from "sequelize/types/instance-validator";
import { Col, Fn, Literal } from "sequelize/types/utils";
import { UserController } from "../../controllers/user.controller";
import { User } from "../../migrations/entities/user.entity";
import { UserService } from "../../services/user.service";

jest.mock('../../services/user.service', () => {
    const service = {
        create: jest.fn(),
    };
    return { UserService: jest.fn(() => service) };
});

describe('User Controller', () => {
    afterAll(() => {
        jest.resetAllMocks()
    })

    describe('CreateUser function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should do create user with valid data', async () => {
            const responseMock = {
                id: "newRandomId",
                name: "Name teste",
                email: "test@gmail.com",
                password: "hashOfPassword:123456",
                isNewRecord: true,
            }
            const userService = new UserService();
            (userService.create as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock);

            const name = "Name teste"
            const email = "test@gmail.com"
            const password = '123456'

            const userController = new UserController();
            const response = await userController.createUser({ name, email, password });
            expect(userService.create).toHaveBeenCalledTimes(1);
            expect(userService.create).toHaveBeenCalledWith(name, email, password);
            expect(response).toBe(responseMock);
        });

        test('Should throw exception by email be invalid', async () => {
            const name = "Name teste"
            const email = "test.com"
            const password = '123456'

            const userController = new UserController();
            expect(async () => await userController.createUser({ name, email, password })).rejects.toThrow(`\"email\" must be a valid email`);
        });

        test('Should throw exception by password invalid', async () => {
            const name = "Name teste"
            const email = "test@gmail.com"
            const password = '123'

            const userController = new UserController();
            expect(async () => await userController.createUser({ name, email, password })).rejects.toThrow(`\"password\" length must be at least 6 characters long`);
        });
    })
});