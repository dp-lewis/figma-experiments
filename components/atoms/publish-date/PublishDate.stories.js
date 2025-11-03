import React from 'react';
import PublishDate from './PublishDate';

export default {
  title: 'Atoms/PublishDate',
  component: PublishDate,
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
    date: '2025-11-03T14:30:00Z',
  },
};

export const Yesterday = {
  args: {
    date: '2025-11-02T09:15:00Z',
  },
};