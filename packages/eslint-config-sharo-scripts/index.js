module.exports = {
  extends: ['next', 'eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: 'cypress/**/*.js',
      plugins: ['chai-friendly'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'chai-friendly/no-unused-expressions': 'error'
      }
    },
    {
      files: [
        '**/**.{test,spec}.{js,jsx,ts,tsx}',
        '**/__tests__/**.{js,jsx,ts,tsx}'
      ],
      extends: ['plugin:jest/recommended', 'plugin:jest/style']
    }
  ]
}
