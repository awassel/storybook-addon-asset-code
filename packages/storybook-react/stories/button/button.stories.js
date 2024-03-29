import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';
import css from '!!raw-loader!./button.css';
import jsx from '!!raw-loader!./button.jsx';

storiesOf('Button', module).add(
  'Default',
  () => {
    return <Button>Hello Button</Button>
  },
  {
    assetcode: [
      { css: css },
      { jsx: jsx },
    ],
  }
);
