import React from 'react';
import BodyText from './BodyText';

export default {
  title: 'Atoms/BodyText',
  component: BodyText,
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
    children: 'The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates.',
    size: 'base',
  },
};

export const Small = {
  args: {
    children: 'Small body text for captions or secondary information.',
    size: 'small',
  },
};

export const LongText = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog, but only after checking its inbox for the latest design updates. Good typography isn\'t just about choosing the right font; it\'s about balance, contrast, and rhythm. Notice how italics add subtle emphasis, how bold text commands attention, and how numbers — like 12, 345, or 67% — align neatly within the grid.',
    size: 'base',
  },
};