# Less preset for Storybook

<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/storybook-preset-less" title="View this project on NPM"><img src="https://img.shields.io/npm/v/storybook-preset-less.svg" alt="NPM version" /></a></span>

<!-- /BADGES -->


One-line [Less](http://lesscss.org) configuration for [Storybook](https://storybook.js.org).

Based on [`@storybook/preset-scss`](https://github.com/storybookjs/presets/tree/master/packages/preset-scss).

## Basic usage

```
npm install --save-dev storybook-preset-less css-loader less less-loader style-loader
```

Then add the following to `.storybook/main.js`:

```js
module.exports = {
  addons: ['storybook-preset-less'],
};
```

## Advanced usage

You can pass configurations by using Object addon declaration for `storybook-preset-less` and adding the configurations under the `option` key. You can pass configurations into the preset's webpack loaders using `styleLoaderOptions`, `cssLoaderOptions`, and `lessLoaderOptions` keys. See documentation for each respective loader to learn about valid options. You can register other addons through the string declaration as normal.

```
module.exports = {
  addons: [
    {
      name: 'storybook-preset-less',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        },
        lessLoaderOptions: {
          lessOptions: {
            strictMath: false,
            noIeCompat: true,
            relativeUrls: false,
          },
        },
      }
    },
    // You can add other presets/addons by using the string declaration
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
  ]
}
```
