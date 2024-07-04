import { getUserName, validateToken } from "../scripts/token-utils";

describe('Token Utils', () => {
  describe('getUserName function', () => {
    test('should return name for valid token', () => {
      const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2ZGEyM2ZlLTliOTktNDg4Yy05MmQyLTg1OWI3OWFiNzUxMyIsIm5hbWUiOiJmZWxpcGUiLCJpYXQiOjE3MTk5NjA5NTUsImV4cCI6MTcxOTk4MjU1NX0.--r4pkfsAXAq-_q4YrGVbGYKAUajJoV7PTzgoc9zRiA";

      const userName = getUserName(validToken);
      expect(userName).toBe("felipe");
    });

    test('should return null for invalidToken', () => {
      const invalidToken = "invalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidToken";
      expect(getUserName(invalidToken)).toBeNull();
    });
  });


  describe('validateToken function', () => {
    test('should return true for a valid token', () => {
      const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2ZGEyM2ZlLTliOTktNDg4Yy05MmQyLTg1OWI3OWFiNzUxMyIsIm5hbWUiOiJmZWxpcGUiLCJpYXQiOjE3MTk5NjA5NTUsImV4cCI6MTcxOTk4MjU1NX0.--r4pkfsAXAq-_q4YrGVbGYKAUajJoV7PTzgoc9zRiA";

      const isValid = validateToken(validToken);
      expect(isValid).toBeTruthy();
    });

    test('should return false for an invalid token', () => {
      const invalidToken = "invalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidTokeninvalidToken";
      const isValid = validateToken(invalidToken);
      expect(isValid).toBeFalsy();
    });

    test('should return false for null token', () => {
      const isValid = validateToken(null);
      expect(isValid).toBeFalsy();
    });
  });
})