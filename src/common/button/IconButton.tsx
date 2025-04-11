interface IconButton {
  alt: string;
  iconPath: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  inlineStyles?: React.CSSProperties;
  className?: string;
}

export function IconButton({
  alt,
  iconPath,
  onClick,
  inlineStyles,
  className = '',
}: IconButton) {
  return (
    <button onClick={onClick} className={className} style={inlineStyles}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
