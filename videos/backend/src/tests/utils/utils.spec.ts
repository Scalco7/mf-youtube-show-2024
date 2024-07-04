import { getUserIdByToken } from "../../utils/getUserIdByToken";

describe('Utils', () => {
    describe('GetUserById', () => {
        test('Should throw Token invalido for token: ""', () => {
            expect(() => { getUserIdByToken('') }).toThrow('Token invalido')
        })

        test('Should throw Token expirado for expirated token', () => {
            const oldToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2ZGEyM2ZlLTliOTktNDg4Yy05MmQyLTg1OWI3OWFiNzUxMyIsIm5hbWUiOiJmZWxpcGUiLCJpYXQiOjE3MTk5NjA5NTUsImV4cCI6MTcxOTk4MjU1NX0.--r4pkfsAXAq-_q4YrGVbGYKAUajJoV7PTzgoc9zRiA'
            expect(() => { getUserIdByToken(oldToken) }).toThrow('Token expirado')
        })
    })
})
