import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { DefaultTextField } from '../../../../common';

const meta: Meta<typeof DefaultTextField> = {
  title: 'desingSystem/Common/textField/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지의 alt 속성',
      defaultValue: '아이콘 이미지 대체 텍스트',
    },
    iconPath: {
      control: 'text',
      description: '아이콘 이미지의 경로',
      defaultValue: '',
    },
    onIconClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
    onChangeInput: {
      action: 'clicked',
      description: '텍스트 필드 값 변경 이벤트',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      description: '플레이스 홀더 텍스트',
      // defaultValue: '',
    },
    errorMessage: {
      control: 'text',
      description: '아이콘 이미지의 경로',
      defaultValue: '',
    },
    id: {
      control: 'text',
      description: 'htmlFor 매핑',
      defaultValue: '',
    },
    isError: {
      // control: 'boolean',
      description: '에러 상태 여부',
      defaultValue: false,
    },
  },
  args: {},
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: 'icon',
    iconPath: '/icons/ic-public-delete-dark.svg',
    placeholder: '텍스트를 입력해주세요',
    value: '',
    errorMessage: '에러 메시지입니다.',
    isError: true,
    id: 'email',
  },
};
