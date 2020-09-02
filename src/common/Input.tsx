/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface Props {
  placeholder: string;
  label?: string;
  type?: string;
  value: string;
  setValue(value: string): void;
  className?: string;
}

const Input: React.FC<Props> = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className={`field ${className || ''}`}>
      <label>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        name={label?.toLocaleLowerCase()}
        type={type || 'text'}
      />
    </div>
  );
};

export default Input;
