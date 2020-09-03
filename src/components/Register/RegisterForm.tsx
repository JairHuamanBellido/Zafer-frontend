import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterInputPhoto from './RegisterInputPhoto';
import Input from '../../common/Input';
import { RegisterUserActions } from '../../store/actions/registerUser.action';
import { RegisterUserState } from '../../store/reducer/registerUser.reducer';

interface Props {
  dispatch: Dispatch<RegisterUserActions>;
}
const NameInput: React.FC<Props> = ({ dispatch }) => {
  const value = useSelector<RegisterUserState, string>((state) => state.name);
  const setName = (_name: string): void => {
    dispatch({ type: 'ADD_NAME', payload: _name });
  };

  return (
    <Input
      value={value}
      setValue={setName}
      placeholder="Ingrese sus nombres"
      label="Nombres"
    />
  );
};

const LastnameInput: React.FC<Props> = ({ dispatch }) => {
  const value = useSelector<RegisterUserState, string>(
    (state) => state.lastname,
  );

  const setLastName = (_lastname: string): void => {
    dispatch({ type: 'ADD_LASTNAME', payload: _lastname });
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
  const value = useSelector<RegisterUserState, string>((state) => state.phone);
  const setPhone = (_phone: string): void => {
    dispatch({ type: 'ADD_PHONE', payload: _phone });
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
  const value = useSelector<RegisterUserState, string>(
    (state) => state.address,
  );
  const setAddress = (_address: string): void => {
    dispatch({ type: 'ADD_ADDRESS', payload: _address });
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
  const value = useSelector<RegisterUserState, string>((state) => state.email);
  const setAddress = (_address: string): void => {
    dispatch({ type: 'ADD_ADDRESS', payload: _address });
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
  const value = useSelector<RegisterUserState, string>(
    (state) => state.password,
  );
  const setPassword = (_payload: string): void => {
    dispatch({ type: 'ADD_PASSWORD', payload: _payload });
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
