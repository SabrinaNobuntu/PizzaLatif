/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'frontend',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '<rootDir>/fontes/frontend',
  testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
};
