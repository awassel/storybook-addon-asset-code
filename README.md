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

In the `.storybook/config.js` file, import the `withCode` decorator.

```js
import { withAssetCode } from 'storybook-addon-asset-code';

addDecorator(withAssetCode);
```

Now, you can use the `assetcode` parameter to add a note to each story. This parameter accepts an array of objects that contain the asset language and a string of the file contents. 

> Supported langages and keys can be found [here](https://github.com/awassel/storybook-addon-asset-code/blob/master/src/lanuages.js#L3-L133).

`raw-loader` is installed with this package in order to load the file contents as a string.

> **Note:** Using a `!!` before a request will disable all loaders specified in the configuration. This will allow for the contents to be passed as a string.

```jsx
import cssFile from '!!raw-loader!./button.css';

storiesOf('Button', module).add(
  'Default',
  () => {
    return <Button>Hello Button</Button>
  },
  {
    assetcode: [
      { css: cssFile },
    ],
  }
);
```
