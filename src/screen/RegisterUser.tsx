import React from 'react';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterHeader from '../components/Register/RegisterHeader';

const RegisterUserScreen: React.FC = () => {
  return (
    <div className="register-container">
      <RegisterHeader />
      <RegisterForm />
    </div>
  );
};

export default RegisterUserScreen;
