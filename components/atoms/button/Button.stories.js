import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eUiIyWFv22JiCHDYHgkIGZ/Design-System?node-id=6-12',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Share = {
  args: {
    children: 'Share',
    variant: 'primary',
    size: 'medium',
  },
};

export const More = {
  args: {
    children: 'More',
    variant: 'primary',
    size: 'medium',
  },
};