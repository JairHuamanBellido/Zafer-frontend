import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { LoginActions } from '../../store/actions/login.action';
import { LoginState } from '../../store/reducer/login.reducer';

const EmailInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<LoginActions>>();
  const email = useSelector<LoginState, string>((state) => state.email);
  const setEmail = (_email: string) => {
    dispatch({ type: 'ADD_EMAIL', payload: _email });
  };

  return (
    <Input
      className="field-container"
      setValue={setEmail}
      value={email}
      placeholder="Ingrese su correo electrónico"
      label="Email"
    />
  );
};

const PasswordInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<LoginActions>>();
  const password = useSelector<LoginState, string>((state) => state.password);
  const setPassword = (_password: string) => {
    dispatch({ type: 'ADD_PASSWORD', payload: _password });
  };
  return (
    <Input
      className="field-container"
      setValue={setPassword}
      value={password}
      placeholder="Ingrese su contraseña"
      label="Contraseña"
      type="Password"
    />
  );
};

const LoginForm: React.FC = () => {
  return (
    <>
      <EmailInput />
      <PasswordInput />
      <Button backgroundColor="#2C4AE6" />
    </>
  );
};

export default LoginForm;
