import { ReactNode } from 'react';
import { IconButton } from '../../common';

interface NavigationBar {
  showBackButton?: boolean;
  showCloseButton?: boolean;
  children?: ReactNode;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function NavigationBar({
  showBackButton,
  showCloseButton,
  children = <h1 className="dark:text-white">타이틀 내용</h1>,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
}: NavigationBar) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back arrow"
            iconPath="https://kr.object.ncloudstorage.com/icons/ic-back-arrow.svg"
            onClick={onBackButtonClick}
            inlineStyles={{ marginRight: '10px' }}
          />
        )}
        {/* 페이지 타이틀 */}
        {children}
      </div>
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="close"
          iconPath="https://kr.object.ncloudstorage.com/icons/ic-close.svg"
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
