module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    rootDir: 'src',
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
      '.*\\.(vue)$': 'vue-jest',
      '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    testRegex: '(/__unit__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
  }
}
