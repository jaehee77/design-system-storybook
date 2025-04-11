import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { TagList } from '../../../../common';

const meta: Meta<typeof TagList> = {
  title: 'desingSystem/Common/Button/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    tagList: {
      Control: 'array',
      description: '태그 리스트',
    },
    onTagClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
  args: {},
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['tag 1', 'tag 2', 'tag 3'],
  },
};
