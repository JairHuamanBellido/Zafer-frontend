import React from 'react';
import LoginForm from './LoginForm';
import LoginForgotPassword from './LoginForgotPassword';
import LoginFormRegister from './LoginFormRegister';

const LoginRightSide: React.FC = () => {
  return (
    <div className="login-container__right-side">
      <div>
        <div className="title">
          <h1>Bienvenido a Zafer</h1>
          <p>La comunidad más grande del mundo</p>
        </div>
        <LoginForm />
        <LoginForgotPassword />
        <LoginFormRegister />
      </div>
    </div>
  );
};

export default LoginRightSide;
