import React from 'react';
import LoginLeftSide from '../components/Login/LoginLeftSide';
import LoginRightSide from '../components/Login/LoginRightSide';

const LoginScreen: React.FC = () => {
  return (
    <div className="login-container">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
};

export default LoginScreen;
