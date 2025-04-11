import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { NavigationBar } from '../../../../special';

const meta: Meta<typeof NavigationBar> = {
  title: 'desingSystem/special/navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div className="w-[360px] border">
        <Story />
      </div>
    ),
  ],

  argTypes: {
    showBackButton: {
      control: 'boolean',
      description: '뒤로가기 버튼 표시 여부',
      defaultValue: false,
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
      defaultValue: false,
    },
    onBackButtonClick: {
      action: 'clicked',
      description: '뒤로가기 버튼 클릭 이벤트',
    },
    onCloseButtonClick: {
      action: 'clicked',
      description: '뒤로가기 버튼 클릭 이벤트',
    },
    children: {
      control: false, // 조작 비활성화
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: {
          summary: '없음',
        },
      },
      description:
        '내부에 들어갈 React 요소 <br /> (예: &lt;h1&gt;기본 타이틀&lt;/h1&gt; 등)',
    },
  },
  args: {},
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    children: <h1 className="text-xl font-bold title">타이틀이에요!</h1>,
  },
};
