import React from 'react';
import ArticleHeader from './ArticleHeader';

export default {
  title: 'Molecules/ArticleHeader',
  component: ArticleHeader,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eUiIyWFv22JiCHDYHgkIGZ/Design-System?node-id=6-9',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Breaking: Local Cat Discovers Advanced Method of Obtaining Treats',
    author: 'Sarah Mitchell',
    publishDate: '2025-11-03T14:30:00Z',
  },
};

export const LongTitle = {
  args: {
    title: 'Scientists Announce Revolutionary Discovery That Changes Everything We Thought We Knew About The Way Cats Manipulate Humans Into Providing Treats',
    author: 'Dr. Elizabeth Thompson-Williams',
    publishDate: '2025-11-02T09:15:00Z',
  },
};