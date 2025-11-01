import { fn } from 'storybook/test';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};

