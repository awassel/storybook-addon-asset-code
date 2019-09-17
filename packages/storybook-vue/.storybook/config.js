import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withAssetCode } from 'storybook-addon-asset-code';
import theme from '../../../config/theme';

addDecorator(withAssetCode);

addParameters({
  options: {
    theme: theme,
    panelPosition: 'right',
  },
});

const loadStories = () => {
  // automatically import all files ending in *.stories.js
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
