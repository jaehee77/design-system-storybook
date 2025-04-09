import { useState } from 'react';
import { IconButton } from '../button';
import { ErrorMessage } from '../error';

interface DefaultTextField {
  errorMessage: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  iconAlt: string;
  isError: boolean;
  id: string;
}

export function DefaultTextField({
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: DefaultTextField) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
    ? 'border-mono300'
    : 'border-primary';

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        text-primary
          border-b
          ${borderColor}
      }`}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none w-full"
          id={id}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
