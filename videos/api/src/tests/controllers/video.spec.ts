import { VideosController } from "../../controllers/video.controller"
import { VideoService } from "../../services/video.service"
import { IListVideosResponse, IVideosData } from "../../types/listVideosResponse"

jest.mock('../../services/video.service', () => {
    const service = {
        searchYoutubeVideos: jest.fn(),
        listFavoriteVideos: jest.fn(),
    }
    return { VideoService: jest.fn(() => service) }
})

describe('Video Controller', () => {
    afterAll(() => {
        jest.resetAllMocks()
    })

    describe('searchYoutubeVideos Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        })

        test('With valid data, should list videos', async () => {
            const responseMock: IListVideosResponse = {
                nextPageToken: 'token-2',
                videos: [
                    {
                        videoId: "test-01",
                        title: "Video Title Test 1",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: false
                    },
                    {
                        videoId: "test-02",
                        title: "Video Title Test 2",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: true
                    },
                    {
                        videoId: "test-03",
                        title: "Video Title Test 3",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: false
                    }]
            }
            const videoService = new VideoService();
            (videoService.searchYoutubeVideos as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock)

            const userId = "idMockedtest"
            const videoTitle = 'futebol'
            const resultsQuantity = 3
            const nextPageToken = undefined

            const controller = new VideosController()
            const response = await controller.searchYoutubeVideos({ userId, videoTitle, resultsQuantity, nextPageToken });
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledTimes(1);
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledWith(userId, videoTitle, resultsQuantity, nextPageToken);
            expect(response).toBe(responseMock);
        })

        test('With valid data and resultsQuantity = 0, should list videos', async () => {
            const responseMock: IListVideosResponse = {
                nextPageToken: 'token-2',
                videos: []
            }
            const videoService = new VideoService();
            (videoService.searchYoutubeVideos as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock)

            const userId = "idMockedtest"
            const videoTitle = 'futebol'
            const resultsQuantity = 0
            const nextPageToken = undefined

            const controller = new VideosController()
            const response = await controller.searchYoutubeVideos({ userId, videoTitle, resultsQuantity, nextPageToken });
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledTimes(1);
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledWith(userId, videoTitle, resultsQuantity, nextPageToken);
            expect(response).toBe(responseMock);
        })

        test('With valid data and videoTitle = "", should list videos', async () => {
            const responseMock: IListVideosResponse = {
                nextPageToken: 'token-2',
                videos: [
                    {
                        videoId: "test-01",
                        title: "Video Title Test 1",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: false
                    },
                    {
                        videoId: "test-02",
                        title: "Video Title Test 2",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: true
                    },
                    {
                        videoId: "test-03",
                        title: "Video Title Test 3",
                        description: "test test test test",
                        thumbnail: {
                            url: "http://test",
                            width: 0,
                            height: 0
                        },
                        favorite: false
                    }]
            }
            const videoService = new VideoService();
            (videoService.searchYoutubeVideos as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock)

            const userId = "idMockedtest"
            const videoTitle = ''
            const resultsQuantity = 3
            const nextPageToken = "token-3"

            const controller = new VideosController()
            const response = await controller.searchYoutubeVideos({ userId, videoTitle, resultsQuantity, nextPageToken });
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledTimes(1);
            expect(videoService.searchYoutubeVideos).toHaveBeenCalledWith(userId, videoTitle, resultsQuantity, nextPageToken);
            expect(response).toBe(responseMock);
        })

        test('With invalide userId, should throw an error', async () => {
            const userId = ""
            const videoTitle = 'futebol'
            const resultsQuantity = 3
            const nextPageToken = "token-3"

            const controller = new VideosController()
            await expect(controller.searchYoutubeVideos({ userId, videoTitle, resultsQuantity, nextPageToken })).rejects.toThrow('\"value\" is not allowed to be empty')
        })
    })

    describe('listFavoriteVideos Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        })

        test('With valid data, should list favorite videos', async () => {
            const responseMock: IVideosData[] = [{
                videoId: "test-01",
                title: "Video Title Test 1",
                description: "test test test test",
                thumbnail: {
                    url: "http://test",
                    width: 0,
                    height: 0
                },
                favorite: false
            }, {
                videoId: "test-02",
                title: "Video Title Test 2",
                description: "test test test test",
                thumbnail: {
                    url: "http://test",
                    width: 0,
                    height: 0
                },
                favorite: true
            }, {
                videoId: "test-03",
                title: "Video Title Test 3",
                description: "test test test test",
                thumbnail: {
                    url: "http://test",
                    width: 0,
                    height: 0
                },
                favorite: false
            }]
            const videoService = new VideoService();
            (videoService.listFavoriteVideos as jest.MockedFunction<any>).mockResolvedValueOnce(responseMock)

            const userId = "idMockedtest"

            const controller = new VideosController()
            const response = await controller.listFavoriteVideos(userId);
            expect(videoService.listFavoriteVideos).toHaveBeenCalledTimes(1);
            expect(videoService.listFavoriteVideos).toHaveBeenCalledWith(userId);
            expect(response).toBe(responseMock);
        })

        test('With invalide userId, should throw an error', async () => {
            const userId = ""

            const controller = new VideosController()
            await expect(controller.listFavoriteVideos(userId)).rejects.toThrow('\"value\" is not allowed to be empty')
        })
    })
})