import { useState } from 'react';
import { IconButton } from '../button';
import { ErrorMessage } from '../error';

interface DefaultTextField {
  errorMessage: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  iconAlt: string;
  isError: boolean;
  id: string;
  styleName?: string;
}

export function DefaultTextField({
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChangeInput,
  value = '',
  isError,
  id,
  styleName,
}: DefaultTextField) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  const [inputValue, setInputValue] = useState<string | number>(value);

  // // 외부에서 value가 바뀌면 내부도 반영
  // useEffect(() => {
  //   setInputValue(value);
  // }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChangeInput?.(e);
  };
  return (
    <div className={styleName}>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary
          border-b
          ${borderColor}
          flex
          justify-between
      }`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="outline-none w-full"
          id={id}
        />
        {!!inputValue && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
