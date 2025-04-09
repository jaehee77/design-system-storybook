interface IconButton {
  alt: string;
  iconPath: string;
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function IconButton({ alt, iconPath, onClick }: IconButton) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
