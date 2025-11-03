import React from 'react';
import ArticleTitle from './ArticleTitle';

export default {
  title: 'Atoms/ArticleTitle',
  component: ArticleTitle,
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
    children: 'Breaking: Local Cat Discovers Advanced Method of Obtaining Treats',
  },
};

export const LongTitle = {
  args: {
    children: 'Scientists Announce Revolutionary Discovery That Changes Everything We Thought We Knew About The Way Things Work',
  },
};