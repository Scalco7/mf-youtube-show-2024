import { getParams, getRoute, navigateTo } from "../scripts/navigation";

const pathname = window.location.pathname
const search = window.location.search

describe('Navigation', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: jest.fn(),
                search: jest.fn(),
            }
        });

        Object.defineProperty(window, 'parent', {
            value: {
                postMessage: jest.fn(),
            }
        })
    });

    afterAll(() => {
        window.location.pathname = pathname;
        window.location.search = search
    });

    describe('navigateTo Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        })

        test('Should post message for change route to favoritos', () => {
            const route = '/favoritos'
            const mockResponse = { action: 'changeRoute', route: route }, param2 = "*";

            navigateTo(route)

            expect(window.parent.postMessage).toHaveBeenCalledTimes(1);
            expect(window.parent.postMessage).toHaveBeenCalledWith(mockResponse, param2)
        })

        test('Should post message for change route to videos', () => {
            const route = '/videos'
            const mockResponse = { action: 'changeRoute', route: route }, param2 = "*";

            navigateTo(route)

            expect(window.parent.postMessage).toHaveBeenCalledTimes(1);
            expect(window.parent.postMessage).toHaveBeenCalledWith(mockResponse, param2)
        })
    })

    describe('getRoute Function', () => {
        test('Should get the actual route - 1', () => {
            const currentRoute = '/videos'
            window.location.pathname = currentRoute

            expect(getRoute()).toBe(currentRoute)
        })

        test('Should get the actual route - 2', () => {
            const currentRoute = '/favoritos'
            window.location.pathname = currentRoute

            expect(getRoute()).toBe(currentRoute)
        })
    })

    describe('getParams Function', () => {
        test('Should get the token parameter', () => {
            const mockedToken = 'mockedTokenmockedTokenmockedToken'
            const searchParams = `?token=${mockedToken}`
            window.location.search = searchParams

            expect(getParams().get('token')).toBe(mockedToken)
        })

        test('Should be null', () => {
            const searchParams = ''
            window.location.search = searchParams

            expect(getParams().get('token')).toBeNull()
        })
    })
})