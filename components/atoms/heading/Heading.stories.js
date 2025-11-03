import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eUiIyWFv22JiCHDYHgkIGZ/Design-System?node-id=1-30',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Title text',
    level: 1,
    size: 'xlarge',
  },
};

export const Large = {
  args: {
    children: 'Large heading',
    level: 2,
    size: 'large',
  },
};

export const Medium = {
  args: {
    children: 'Medium heading',
    level: 3,
    size: 'medium',
  },
};