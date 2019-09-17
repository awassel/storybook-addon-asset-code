import React from 'react';
import addons from '@storybook/addons';
import { CHANNEL_ID, PANEL_ID } from './constants';
import Panel from './panel';

export function register() {
  addons.register(CHANNEL_ID, api => {
    const channel = addons.getChannel();

    addons.addPanel(PANEL_ID, {
      title: 'Code',
      render: ({ active, key }) => (
        <Panel channel={channel} api={api} key={key} active={active} />
      ),
    });
  });
}