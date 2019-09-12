import { configure, addParameters, addDecorator } from '@storybook/html';
import { withCode } from '../../../dist';
import theme from '../../../config/theme';

addDecorator(withCode);

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