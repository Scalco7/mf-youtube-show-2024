import { getRoute, navigateTo } from "../scripts/navigation"

const href = window.location.href

describe('Nagiation', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            value: {
                href: jest.fn(),
                pathname: jest.fn(),
            }
        });
    });

    afterAll(() => {
        window.location.href = href;
    });

    describe('navigateTo Function', () => {
        test('Should change route with valid route', () => {
            window.location.href = '/videos'

            const nextRoute = '/favoritos'
            navigateTo(nextRoute)
            expect(window.location.href).toBe(nextRoute)
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

        test('Should get the actual route - 3', () => {
            const currentRoute = '/auth'
            window.location.pathname = currentRoute

            expect(getRoute()).toBe(currentRoute)
        })
    })
})