import React from 'react';

import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
// 타입스크립트의 값이 컴포넌트의 args 가 테이블 데이터에 나타남
/**
 * 예시
 * ** size?: 'small' | 'medium' | 'large'; (5개이상부터는 콤보박스로 나옴)
 * Name : size
 * Description: "small" "medium" "large"
 * Default : size = 'medium'(컴포넌트에 매개변수 기본값을 정의하면 나타남)
 *
 * ** primary?: boolean;
 * control 에 true, false 토글버튼으로 렌더링
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
