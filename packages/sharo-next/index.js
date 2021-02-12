const nextMDX = require('@next/mdx')
const nextBundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})
const withMDX = nextMDX()

module.exports = () => (nextConfig = {}) => {
  return withBundleAnalyzer(withMDX({
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    ...nextConfig
  }))
}
