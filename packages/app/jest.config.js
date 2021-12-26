const resolvePaths = require('tsconfig-paths-jest');

const tsconfig = require('./tsconfig.json');

const moduleNameMapper = resolvePaths(tsconfig);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(j|t)sx?$': 'ts-jest',
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['vue', 'js', 'ts', 'json', 'node', 'jsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(@storybook/.*\\.vue$))',
    'node_modules/(?!variables/.*)',
  ],
  moduleNameMapper: { ...moduleNameMapper, '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js' },
  globals: {
    'ts-jest': {
      tsconfig: {
        // allow js in typescript
        allowJs: true,
      },
    },
  },
};
