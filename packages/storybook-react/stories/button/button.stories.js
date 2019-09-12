import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';
import css from '!!raw-loader!./button.css';
import info from '!!raw-loader!./README.md';
import jsx from '!!raw-loader!./button.jsx';

storiesOf('Button', module).add(
  'Default',
  () => {
    return <Button>Hello Button</Button>
  },
  {
    code: [
      { css: css },
      { jsx: jsx },
      { md: info },
    ],
  }
);
