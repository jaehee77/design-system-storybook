interface TagButton {
  children: string;
  onHandleClick: () => void;
  isChecked: boolean;
}

export function TagButton({ children, onHandleClick, isChecked }: TagButton) {
  const buttonStyle = isChecked
    ? 'bg-white text-primary'
    : 'text-white bg-dark-opacity';
  return (
    <button
      className={`
        ${buttonStyle} 
        font-sm
        font-medium
        rounded-tag-button 
        px-[10px] 
        border
      border-white h-[33px]
        `}
      onClick={onHandleClick}
    >
      {children}
    </button>
  );
}
