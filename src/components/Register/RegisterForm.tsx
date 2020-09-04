import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterInputPhoto from './RegisterInputPhoto';
import Input from '../../common/Input';
import { RegisterUserActions } from '../../store/actions/registerUser.action';

interface Props {
  dispatch: Dispatch<RegisterUserActions>;
}
const NameInput: React.FC<Props> = ({ dispatch }) => {
  const [name, setValue] = useState<string>('');
  const setName = (_name: string): void => {
    setValue(_name);
    dispatch({ type: 'ADD_NAME', payload: name });
  };

  return (
    <Input
      value={name}
      setValue={setName}
      placeholder="Ingrese sus nombres"
      label="Nombres"
    />
  );
};

const LastnameInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');

  const setLastName = (_lastname: string): void => {
    setValue(_lastname);
    dispatch({ type: 'ADD_LASTNAME', payload: value });
  };

  return (
    <Input
      value={value}
      setValue={setLastName}
      placeholder="Ingrese sus apellidos"
      label="Apellidos"
    />
  );
};

const PhoneInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setPhone = (_phone: string): void => {
    setValue(_phone);
    dispatch({ type: 'ADD_PHONE', payload: value });
  };

  return (
    <Input
      value={value}
      setValue={setPhone}
      placeholder="Ingrese numero celular"
      label="Celular"
    />
  );
};

const AddressInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setAddress = (_address: string): void => {
    setValue(_address);
    dispatch({ type: 'ADD_ADDRESS', payload: value });
  };

  return (
    <Input
      value={value}
      setValue={setAddress}
      placeholder="Ingrese su dirección"
      label="Dirección"
    />
  );
};

const EmailInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setAddress = (_address: string): void => {
    setValue(_address);
    dispatch({ type: 'ADD_ADDRESS', payload: value });
  };

  return (
    <Input
      value={value}
      setValue={setAddress}
      placeholder="Ingrese su correo electrónico"
      label="Correo electrónico"
    />
  );
};

const PasswordInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setPassword = (_payload: string): void => {
    setValue(_payload);
    dispatch({ type: 'ADD_PASSWORD', payload: value });
  };

  return (
    <Input
      value={value}
      setValue={setPassword}
      placeholder="Ingrese su contraseña"
      label="Contraseña"
      type="password"
    />
  );
};
const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  return (
    <div className="register-container__form">
      <RegisterInputPhoto />
      <div className="field-container">
        <NameInput dispatch={dispatch} />
        <LastnameInput dispatch={dispatch} />
      </div>
      <div className="field-container">
        <PhoneInput dispatch={dispatch} />
        <AddressInput dispatch={dispatch} />
      </div>
      <div className="field-container">
        <EmailInput dispatch={dispatch} />
        <PasswordInput dispatch={dispatch} />
      </div>
      <div className="submit-btn">
        <button type="button"> Registrar</button>
      </div>
    </div>
  );
};

export default RegisterForm;
