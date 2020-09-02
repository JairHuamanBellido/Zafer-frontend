import React from 'react';

interface Props {
  backgroundColor: string;
}
const Button: React.FC<Props> = ({ backgroundColor }) => {
  return (
    <div>
      <button style={{ background: backgroundColor }} type="submit">
        Ingresar
      </button>
    </div>
  );
};
export default Button;
