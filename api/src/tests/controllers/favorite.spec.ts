import { FavoriteController } from "../../controllers/favorite.controller";
import { FavoriteService } from "../../services/favorite.service";

jest.mock('../../services/favorite.service', () => {
    const service = {
        listFavoriteByUserId: jest.fn(),
        addFavoriteVideo: jest.fn(),
        removeFavoriteVideo: jest.fn(),
    };
    return { FavoriteService: jest.fn(() => service) };
});

describe('Favorite Controller', () => {
    afterAll(() => {
        jest.resetAllMocks()
    })

    describe('listFavoriteByUserId Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should list favorite videos, with a valid data', async () => {
            const responseMock = ['id-videos-1', 'id-videos-2', 'id-videos-3', 'id-videos-4']
            const favoriteService = new FavoriteService();
            (favoriteService.listFavoriteByUserId as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock);

            const userId = "idMockedtest"
            const controller = new FavoriteController();
            const response = await controller.listFavoriteByUserId({ userId });
            expect(favoriteService.listFavoriteByUserId).toHaveBeenCalledTimes(1);
            expect(favoriteService.listFavoriteByUserId).toHaveBeenCalledWith(userId);
            expect(response).toBe(responseMock);
        });

        test('Should throw exception by userId be empty', async () => {
            const userId = ""
            const controller = new FavoriteController();
            await expect(controller.listFavoriteByUserId({ userId })).rejects.toThrow(`\"userId\" is not allowed to be empty`);
        });
    })

    describe('addFavoriteVideo Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should add favorite video, with a valid data', async () => {
            const favoriteService = new FavoriteService();
            (favoriteService.addFavoriteVideo as jest.MockedFunction<any>).mockResolvedValueOnce();

            const userId = "idMockedtest"
            const videoId = "idVideoMocked"

            const controller = new FavoriteController();
            const response = await controller.addFavoriteVideo({ userId, videoId });
            expect(favoriteService.addFavoriteVideo).toHaveBeenCalledTimes(1);
            expect(favoriteService.addFavoriteVideo).toHaveBeenCalledWith(userId, videoId);
            expect(response).toBeUndefined();
        });

        test('Should throw exception by videoId be empty', async () => {
            const userId = "idMockedtest"
            const videoId = ""

            const controller = new FavoriteController();
            await expect(controller.addFavoriteVideo({ userId, videoId })).rejects.toThrow(`\"videoId\" is not allowed to be empty`);
        });

        test('Should throw exception by userId be empty', async () => {
            const userId = ""
            const videoId = "idVideoMockedTest"

            const controller = new FavoriteController();
            await expect(controller.addFavoriteVideo({ userId, videoId })).rejects.toThrow(`\"userId\" is not allowed to be empty`);
        });
    })

    describe('removeFavoriteVideo Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        });
        test('Should add favorite video, with a valid data', async () => {
            const favoriteService = new FavoriteService();
            (favoriteService.removeFavoriteVideo as jest.MockedFunction<any>).mockResolvedValueOnce();

            const userId = "idMockedtest"
            const videoId = "idVideoMocked"

            const controller = new FavoriteController();
            const response = await controller.removeFavoriteVideo({ userId, videoId });
            expect(favoriteService.removeFavoriteVideo).toHaveBeenCalledTimes(1);
            expect(favoriteService.removeFavoriteVideo).toHaveBeenCalledWith(userId, videoId);
            expect(response).toBeUndefined();
        });

        test('Should throw exception by videoId be empty', async () => {
            const userId = "idMockedtest"
            const videoId = ""

            const controller = new FavoriteController();
            await expect(controller.removeFavoriteVideo({ userId, videoId })).rejects.toThrow(`\"videoId\" is not allowed to be empty`);
        });

        test('Should throw exception by userId be empty', async () => {
            const userId = ""
            const videoId = "idVideoMockedTest"

            const controller = new FavoriteController();
            await expect(controller.removeFavoriteVideo({ userId, videoId })).rejects.toThrow(`\"userId\" is not allowed to be empty`);
        });
    })
});