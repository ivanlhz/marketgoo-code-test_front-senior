/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  modulePaths: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
