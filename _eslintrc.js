module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'prettier',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
}
