module.exports = {
  // ESLint configurations
  // =====================
  extends: [
    'xo-react'
  ],
  // Use babel-eslint parser for esnext features.
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        // Add .md, .mdx, and .scss into autoresolved extensions.
        extensions: ['.js', '.jsx', '.md', '.mdx', '.scss']
      }
    }
  }
  // XO configurations
  // =================
  // Note: wait for https://github.com/xojs/xo/issues/352
  /*
  xo: {
    space: 2,
    semicolon: false
  }
  */
}
