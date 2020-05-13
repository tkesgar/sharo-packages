# eslint-config-sharo-scripts

This is the [ESLint][eslint] shareable configuration for [sharo][sharo]
[Next.js][next] boilerplate.

## What this config does

- JavaScript support with the recommended `eslint` rules
- TypeScript support with the recommended `@typescript-eslint` rules
- Prettier support via `eslint-plugin-prettier`
- Jest support via `eslint-plugin-jest` with `recommended` and `style` rules
- Cypress support via `eslint-plugin-cypress` and `eslint-plugin-chai-friendly`

## Notes

- Cypress tests should be written in JS
- Jest tests should be written in TS

### Regarding `jsx-a11y/anchor-is-valid`

Due to how Next.js Link component API works, `jsx-a11y/anchor-is-valid` will
report this as an error:

```jsx
// error because <a> does not have href
<Link href="/somewhere">
  <a>Link to somewhere</a>
</Link>
```

To work around this issue, the rule is overriden [as described in this issue][anchor-workaround]:

```js
{
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton']
    }
  ]
}
```

However, this workaround introduces another issue: **it disables the rule's
check for an href attribute altogether**:

```jsx
<p>
  This paragraph contains <a>an anchor without href</a>.
</p>
```

You should probably add another accessibility checker to capture these issues,
such as [react-axe].

## License

Licensed under [MIT License][license].

[anchor-workaround]: https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
[eslint]: https://eslint.org/
[license]: https://github.com/tkesgar/eslint-config-sharo-scripts/blob/master/LICENSE
[next]: https://nextjs.org/docs
[react-axe]: https://github.com/dequelabs/react-axe
[sharo]: https://github.com/tkesgar/sharo
