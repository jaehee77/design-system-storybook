import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { IconButton } from '../../../../common';

const meta: Meta<typeof IconButton> = {
  title: 'desingSystem/Common/Button/IconButton',
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
    className: {
      description: '버튼 태그에 클래스 추가',
      table: {
        // type: {
        //   summary: 'button 에 클래스 추가',
        // },
        defaultValue: {
          summary: '없음',
        },
      },
    },
    inlineStyles: {
      description: '버튼 태그에 인라인스타일 적용',
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
    className: '',
    inlineStyles: {},
  },
};
