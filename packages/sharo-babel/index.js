module.exports = () => ({
  presets: [
    ['next/babel', {
      // https://github.com/vercel/styled-jsx#css-preprocessing-via-plugins
      'styled-jsx': {
        plugins: ['styled-jsx-plugin-postcss']
      }
    }]
  ]
})
