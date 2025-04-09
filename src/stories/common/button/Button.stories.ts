import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../../../common';

const meta: Meta<typeof Button> = {
  title: 'Common/Button/button', // 경로를 나타냄
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '버튼 컴포넌트',
        story: '타입별 버튼 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],

  // 테이블 데이터에 렌더링됨
  //argTypes는 컴포넌트의 props (args)에 대한 설정
  // props를 문서화하고, 어떤 컨트롤로 조작 가능한지 Storybook UI에 정의
  argTypes: {
    backgroundColor: {
      // name: '버튼 색상',
      // name 이 없으면 키값이 name 으로 설정됨
      control: 'color',
      description: '버튼의 배경컬러',
    },
    // variant: {
    //   control: 'select',
    //   options: ['primary', 'secondary'],
    //   description: '버튼 스타일',
    // },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// parameters 설정값
// layout	: 스토리 렌더링 위치 지정: "centered", "fullscreen", "padded"
// docs.description.component :	Docs 페이지에 표시할 설명
// actions : 액션 이벤트 자동 등록
// controls :	컨트롤 패널에 대한 설정
// backgrounds :	배경색 설정
// viewport	: 다양한 디바이스 뷰포트 시뮬레이션
// a11y	: 접근성 관련 설정
/*
parameters: {
  layout: 'centered',
  docs: {
    description: {
      component: '이건 버튼 컴포넌트입니다.',
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
}
*/

// ✅ args
// args는 스토리에 실제로 전달되는 props 값.
// 이걸로 기본 상태를 정의할 수 있음.
// Storybook UI에서 props를 변경하면 args 값이 변경돼서 다시 렌더링됨.

// ✅ argTypes vs args 차이점 요약
// 항목	    : argTypes                 | args
// 역할	    : props의 설명,              | 제어 UI 정의	props의 기본 값 설정
// 적용 범위 : UI 설명 및 문서화	          | 실제 props 값
// 사용 목적 : 문서 작성, 컨트롤 조작 범위 설정	| 초기값 지정 및 테스트용

// Docs의 테이블 데이터 아래 렌더링 및 Docs 다음으로 나오는 메뉴(페이지)
// ex. Primary 변수명이 타이틀로 렌더링
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
