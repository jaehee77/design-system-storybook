import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Label } from '../../../common';

const meta: Meta<typeof Label> = {
  title: 'Common/Label/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'label의 for 속성',
    },
    children: {
      // control: 'text',
      description: 'label의 내용',
    },
  },
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'usename',
    children: '이메일',
  },
};
