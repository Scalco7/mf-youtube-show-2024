import { onLogin } from "../scripts/utils"

describe('Utils', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'parent', {
            value: {
                postMessage: jest.fn()
            }
        })
    })

    afterAll(() => {
        jest.resetAllMocks()
    })

    describe('onLogin Function', () => {
        afterEach(() => {
            jest.clearAllMocks()
        })

        test('Should post the token for the parent element', () => {
            const token = 'tokendeTesteParaTeste'
            const mockResponse = { action: 'onAuth', token: token }, param2 = "*";

            onLogin(token)

            expect(window.parent.postMessage).toHaveBeenCalledTimes(1);
            expect(window.parent.postMessage).toHaveBeenCalledWith(mockResponse, param2)
        })
    })
})