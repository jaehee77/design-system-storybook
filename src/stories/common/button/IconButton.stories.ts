import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { IconButton } from '../../../common';

const meta: Meta<typeof IconButton> = {
  title: 'Common/Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    alt: {
      control: 'text',
      description: '이미지 설명 내용',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: '이미지 경로',
      defaultValue: '',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
  args: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: '/icons/ic-public-delete-dark.svg',
  },
};
