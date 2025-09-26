/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'frontend',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '<rootDir>/fontes/frontend',
  testMatch: [
    '<rootDir>/**/*.spec.ts',
    '<rootDir>/**/*.spec.js',
    '<rootDir>/**/*.test.ts',
    '<rootDir>/**/*.test.js'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'jsx', 'tsx'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './reports/jest', outputName: 'frontend.xml' }]
  ]
};
