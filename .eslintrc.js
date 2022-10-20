module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/.styled.js'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
