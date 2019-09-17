import { storiesOf } from '@storybook/html';
import button from './button.html';
import css from '!!raw-loader!./button.css';
import html from '!!raw-loader!./button.html';
import './button.css';

storiesOf('Button', module)
  .add('Default', 
  () => button,
  {
    assetcode: [
      { html: html },
      { css: css },
    ],
  }
  );