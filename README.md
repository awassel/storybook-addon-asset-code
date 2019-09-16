# Storybook Addon Asset Code

An addon to [Storybook](https://storybook.js.org/) that allows for display of asset files in assorted languages.

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Screenshot](https://github.com/awassel/storybook-addon-asset-code/raw/master/docs/screenshot.png)

## Why

In building out component libraries, there may arise a need to display more assets than default Storybook story allows. This addon will allow you to pass in any file contents as a string and display them in a formatted manner.

## Getting Started

Install:

```sh
npm i -D storybook-addon-asset-code
```

Then, add following content to `.storybook/addons.js`

```js
import 'storybook-addon-asset-code/register';
```

Import the `withCode` decorator.
