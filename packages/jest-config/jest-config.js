module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['jest-extended/all', '@material-rn/stdlib'],
    testRegex: '(/test/(.*)\\.(test|spec))\\.(ts|js|tsx|jsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
}
