module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: { 'prettier/prettier': 'error', 'react/prop-type': 'off' },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
