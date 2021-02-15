# sharo-babel

This is the `next.config.js` configuration plugin for [sharo][sharo] [Next.js][next]
boilerplate.

It adds support for [MDX Markdown files][mdx] and [Webpack bundle analyzer][bundle-analyzer].

## Installation

```bash
npm i @tkesgar/sharo-next
```

## Usage

Add into `next.config.js`:

```js
const sharoNext = require("@tkesgar/sharo-next");

const withSharo = sharoNext();

module.exports = withSharo({
  // https://nextjs.org/docs/api-reference/next.config.js/introduction
});
```

## What is included

- [@next/mdx](https://www.npmjs.com/package/@next/mdx)
  - Configured to use `*.mdx` extension, can be used in components or in `pages/`
- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
  - Run wih `ANALYZE=true next build`

## License

Licensed under MIT License.

[bundle-analyzer]: https://www.npmjs.com/package/webpack-bundle-analyzer
[mdx]: https://mdxjs.com/
[next]: https://nextjs.org/docs
[sharo]: https://github.com/tkesgar/sharo
