import { configure } from '@storybook/vue';
import theme from '../../../config/theme';

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
