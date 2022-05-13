module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
  // globals: {
  //   'ts-jest': {
  //     tsconfig: 'tsconfig.jest.json'
  //   }
  // }
}
