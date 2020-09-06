import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';

const RegisterUserSuccessScreen: React.FC = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.replace('/login');
  };
  return (
    <div className="register-success-container">
      <h1>Enhorabuena</h1>
      <p>Tu registro ha sido exitoso</p>
      <Button
        callback={goToLogin}
        backgroundColor="#2C4AE6"
        value="Ir al inicio"
      />
    </div>
  );
};

export default RegisterUserSuccessScreen;
