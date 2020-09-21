/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface Props {
  placeholder: string;
  label?: string;
  type?: string;
  value: string;
  setValue(value: string): void;
  className?: string;
  required?: boolean;
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  className,
  required,
  errorMessage,
}) => {
  // Events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  // Styles validation
  const errorBorder = (): string => {
    return errorMessage && errorMessage.length > 0
      ? '1px solid #ff5252'
      : '1px solid #101023';
  };

  return (
    <div className={`field ${className || ''}`}>
      <label
        className={`${
          errorMessage && errorMessage.length > 0 ? 'label-error' : null
        }`}
      >
        {label}
      </label>
      <input
        style={{ border: errorMessage?.length ? errorBorder() : 'none' }}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        name={label?.toLocaleLowerCase()}
        type={type || 'text'}
      />
      {errorMessage && errorMessage?.length > 0 && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
