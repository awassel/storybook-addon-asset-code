import addons, { makeDecorator } from '@storybook/addons';
import { CHANNEL_ID } from './constants';

const withCode = makeDecorator({
  name: 'withAssetCode',
  parameterName: 'assetcode',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const storyOptions = parameters || options;
    channel.emit(CHANNEL_ID, storyOptions);
    return getStory(context);
  },
});

export { withCode };
