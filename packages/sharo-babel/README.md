# sharo-babel

This is the [Babel][babel] configuration for [sharo][sharo] [Next.js][next]
boilerplate.

It adds [styled-jsx-plugin-postcss][styled-jsx-postcss], so that the styles from `styled-jsx` will be processed with the same PostCSS pipeline with other stylesheets.

## Installation

```bash
npm i @tkesgar/sharo-babel
```

## Usage

Add into Babel configuration (e.g. `.babelrc`):

```json
{
  "presets": ["module:@tkesgar/sharo-babel"]
}
```

## License

Licensed under MIT License.

[babel]: https://babeljs.io/
[next]: https://nextjs.org/docs
[sharo]: https://github.com/tkesgar/sharo
[styled-jsx-postcss]: https://github.com/giuseppeg/styled-jsx-plugin-postcss
