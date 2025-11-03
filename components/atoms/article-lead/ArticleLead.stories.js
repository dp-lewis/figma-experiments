import React from 'react';
import ArticleLead from './ArticleLead';

export default {
  title: 'Atoms/ArticleLead',
  component: ArticleLead,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eUiIyWFv22JiCHDYHgkIGZ/Design-System?node-id=6-11',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'In a groundbreaking development that has captured the attention of pet owners worldwide, a local feline has reportedly discovered an innovative approach to treat acquisition that experts are calling "revolutionary."',
  },
};

export const Short = {
  args: {
    children: 'Scientists announce a major breakthrough in understanding how cats think.',
  },
};