import { storiesOf } from '@storybook/vue';
import Button from './button';
import js from '!!raw-loader!./button.js';

storiesOf('Button', module)
    .add('Default', () => ({
        components: { Button },
        template: '<button>Hello Button</button>'
    }), 
    {
        assetcode: [
          { js: js },
        ],
    });