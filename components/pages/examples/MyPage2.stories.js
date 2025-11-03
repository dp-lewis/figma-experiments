import React from 'react';
import MyPage2 from './MyPage2';

export default {
  title: 'Pages/MyPage2',
  component: MyPage2,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IQTJ58xGbMYkRwRpnZe5wj/Using-the-Design-System?node-id=6-9&m=dev', // MyPage2 component node
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IQTJ58xGbMYkRwRpnZe5wj/Using-the-Design-System?node-id=6-9&m=dev', // Full MyPage2 layout
    },
  },
};