module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    /**
     * This is a workaround for Next.js Link API issue:
     * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
     */
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react'
      ],
      rules: {
        /**
         * This is a workaround for Next.js Link API issue:
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
         */
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton']
          }
        ]
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      files: 'cypress/**/*.js',
      plugins: ['chai-friendly'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'chai-friendly/no-unused-expressions': 'error'
      }
    }
  ]
}
