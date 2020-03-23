/**
 * This function is a Next.js plugin for sharo.
 *
 * Features:
 *   - MDX support via `@zeit/next-mdx`
 *
 * Docs:
 *   - https://nextjs.org/docs#custom-configuration
 *   - https://www.npmjs.com/package/@zeit/next-mdx
 *
 * @param {any} nextConfig Next.js configuration object
 * @returns {any} New Next.js configuration object
 */
function withSharo(nextConfig = {}) {
  // https://github.com/zeit/next-plugins/issues/320
  const withMdx = require('@zeit/next-mdx')({
    // Allow regular markdown files (*.md) to be imported.
    extension: /\.mdx?$/
  })

  return withMdx(
    Object.assign(
      // =====================================================================
      // Default configurations (can be overridden by nextConfig)
      // =====================================================================
      {
        // Currently empty
      },
      // =====================================================================
      // Override default configurations with nextConfig
      // =====================================================================
      nextConfig,
      // =====================================================================
      // Override nextConfig configurations
      // (note to self: follow Next.js rules on this section)
      // =====================================================================
      {
        webpack(config, options) {
          config.resolve.extensions.push('.md', '.mdx')

          if (typeof nextConfig.webpack === 'function') {
            return nextConfig.webpack(config, options)
          }

          return config
        }
      }
    )
  )
}

module.exports = withSharo
