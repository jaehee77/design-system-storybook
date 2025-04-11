import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { TagButton } from '../../../../common';

const meta: Meta<typeof TagButton> = {
  title: 'desingSystem/Common/Button/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
      description: '버튼의 텍스트',
      defaultValue: 'button',
    },
    onHandleClick: {
      actions: 'clicked',
      description: '버튼 클릭 이벤트',
      defaultValue: '',
    },
    isChecked: {
      contorl: 'boolean',
      description: '버튼의 활성화 여부',
      defaultValue: false,
    },
  },
  args: {},
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '태그 버튼',
    isChecked: false,
  },
};
