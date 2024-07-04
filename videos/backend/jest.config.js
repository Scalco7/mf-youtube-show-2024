/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFiles: ['./src/tests/setEnvVars.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};