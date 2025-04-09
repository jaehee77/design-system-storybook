import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from '../../../common';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Common/error/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: {
      // control: 'text',
      description: 'ErrorMessage의 내용',
    },
  },
  args: {},
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메세지는 여기로 작성',
  },
};
