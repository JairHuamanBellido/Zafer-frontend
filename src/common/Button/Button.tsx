import React from 'react';

interface Props {
  backgroundColor: string;
  value: string;
  callback?(): void;
}
const Button: React.FC<Props> = ({ backgroundColor, value, callback }) => {
  return (
    <div>
      <button
        onClick={callback}
        style={{ background: backgroundColor }}
        type="submit"
      >
        {value}
      </button>
    </div>
  );
};
export default Button;
