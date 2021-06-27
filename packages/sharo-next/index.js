const nextMDX = require("@next/mdx");
const nextBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = ({ mdxOptions = {} }) => {
  const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  });
  const withMDX = nextMDX({
    extension: /.mdx?$/,
    ...mdxOptions,
  });

  return (nextConfig = {}) => {
    return withBundleAnalyzer(
      withMDX({
        pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
        ...nextConfig,
      })
    );
  };
};
