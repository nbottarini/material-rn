module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['jest-extended/all'],
  testRegex: '(/test/(.*)\\.(test|spec))\\.(ts|js|tsx|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  watchman: false,
}
