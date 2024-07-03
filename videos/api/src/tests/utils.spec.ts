import { getUserIdByToken } from "../utils/getUserIdByToken";

const oldToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2ZGEyM2ZlLTliOTktNDg4Yy05MmQyLTg1OWI3OWFiNzUxMyIsIm5hbWUiOiJmZWxpcGUiLCJpYXQiOjE3MTk5NjA5NTUsImV4cCI6MTcxOTk4MjU1NX0.--r4pkfsAXAq-_q4YrGVbGYKAUajJoV7PTzgoc9zRiA'

describe('Testing getUserById function', () => {
    test('Test getUserById without Token', () => {
        expect(() => { getUserIdByToken('') }).toThrow('Token invalido')
    })

    test('Test getUserById with an old Token', () => {
        expect(() => { getUserIdByToken(oldToken) }).toThrow('Token expirado')
    })
})