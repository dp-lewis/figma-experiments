import React from 'react';
import ArticleText from './ArticleText';

export default {
  title: 'Atoms/ArticleText',
  component: ArticleText,
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
    children: 'The discovery was made Tuesday morning when Whiskers, a 3-year-old tabby cat, demonstrated what researchers are describing as "unprecedented strategic thinking" in her approach to treat procurement. The technique, which involves a complex series of purrs, head bumps, and what experts term "tactical cute positioning," has proven remarkably effective.',
  },
};

export const Short = {
  args: {
    children: 'This represents a significant development in feline behavior studies.',
  },
};