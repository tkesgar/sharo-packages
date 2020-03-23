module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      files: 'cypress/**/*.js',
      plugins: [
        'chai-friendly'
      ],
      extends: [
        'plugin:cypress/recommended'
      ],
      rules: {
        'chai-friendly/no-unused-expressions': 'error'
      }
    }
  ]
}
