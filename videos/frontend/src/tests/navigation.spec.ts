import { getParams, getRoute } from "../scripts/utils/navigation";

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
    });

    afterAll(() => {
        window.location.pathname = pathname;
        window.location.search = search
    });

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