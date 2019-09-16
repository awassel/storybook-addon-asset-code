# Storybook Addon Code

An addon to [Storybook](https://storybook.js.org/) that allows for display of asset files in assorted languages.

[Framework Support](https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md)

![Screenshot](https://github.com/awassel/storybook-code-addon/raw/master/docs/screenshot.png)

## Why

In building out component libraries, there may arise a need to display more assets than default Storybook story allows. This addon will allow you to pass in any file contents as a string and display them in a formatted manner.

## Getting Started

Install:

```sh
npm i -D storybook-addon-code
```

Then, add following content to `.storybook/addons.js`

```js
import 'storybook-addon-code/register';
```

Import the `action` function and use it to create actions handlers. When creating action handlers, provide a **name** to make it easier to identify.

> _Note: Make sure NOT to use reserved words as function names. [issues#29](https://github.com/storybookjs/storybook-addon-actions/issues/29#issuecomment-288274794)_

```js
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

storiesOf('Button', module).add('default view', () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
));
```
