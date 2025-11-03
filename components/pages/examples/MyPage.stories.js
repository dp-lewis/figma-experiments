import React from 'react';
import MyPage from './MyPage';

export default {
  title: 'Pages/MyPage',
  component: MyPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/[FILE_KEY]/[FILE_NAME]?node-id=1-2',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};