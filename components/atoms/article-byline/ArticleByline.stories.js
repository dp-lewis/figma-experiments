import React from 'react';
import ArticleByline from './ArticleByline';

export default {
  title: 'Atoms/ArticleByline',
  component: ArticleByline,
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
    author: 'Sarah Mitchell',
  },
};

export const LongName = {
  args: {
    author: 'Dr. Elizabeth Catherine Thompson-Williams',
  },
};