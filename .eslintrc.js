module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  globals: {
    JSX: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-var': 2,
    'no-undef': 2,
    'no-param-reassign': 2
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};