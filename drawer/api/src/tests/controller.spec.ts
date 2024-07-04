import { Controller } from "../controllers/controller";
import { Service } from "../services/service";


jest.mock('../services/service', () => {
    const service = {
        countFavoritesByUserId: jest.fn(),
    };
    return { Service: jest.fn(() => service) };
});

describe('Controller', () => {
    afterAll(() => {
        jest.resetAllMocks()
    })
    afterEach(() => {
        jest.clearAllMocks()
    });
    test('Should count number of favorites videos', async () => {
        const service = new Service();
        (service.countFavoritesByUserId as jest.MockedFunction<any>).mockResolvedValueOnce(11);

        const userId = "idMockedtest"
        const employeesController = new Controller();
        const response = await employeesController.countFavoritesByUserId({ userId });
        expect(service.countFavoritesByUserId).toHaveBeenCalledTimes(1);
        expect(service.countFavoritesByUserId).toHaveBeenCalledWith(userId);
        expect(response).toBe(11);
    });

    test('Should throw exception by userId be empty', async () => {
        const service = new Service();
        (service.countFavoritesByUserId as jest.MockedFunction<any>).mockResolvedValueOnce(11);

        const userId = ""
        const employeesController = new Controller();
        await expect(() => employeesController.countFavoritesByUserId({ userId })).rejects.toThrow(`'value' is not allowed to be empty`);
    });
});