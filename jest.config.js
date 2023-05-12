module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.spec.tsx', '!src/**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
