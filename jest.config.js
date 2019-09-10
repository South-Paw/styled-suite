module.exports = {
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/.storybook/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/src/__test__/',
    '<rootDir>/src/index.js',
    '.stories.js',
    'jest.config.js',
  ],
};
