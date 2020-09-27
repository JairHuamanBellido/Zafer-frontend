import React, { Dispatch, FormEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RegisterInputPhoto from './RegisterInputPhoto';
import Input from '../../common/Input/Input';
import { RegisterUserActions } from '../../store/actions/registerUser.action';
import RegisterButtonSubmit from './RegisterButtonSubmit';
import { RootState } from '../../store/store';
import LoadingSpinner from '../../common/Loading/SpinnerLoading';

const RegisterForm: React.FC = () => {
  const pending = useSelector(
    (state: RootState) => state.registerUserReducer.pending,
  );

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submit} className="register-container__form">
      <RegisterInputPhoto />
      <div className="field-container">
        <NameInput />
        <LastnameInput />
      </div>
      <div className="field-container">
        <PhoneInput />
        <AddressInput />
      </div>
      <div className="field-container">
        <EmailInput />
        <PasswordInput />
      </div>
      {pending ? (
        <LoadingSpinner />
      ) : (
        <>
          <RegisterButtonSubmit />
          <a href="/login" className="register-container__redirect-login">
            Ir al Login
          </a>
        </>
      )}
    </form>
  );
};

const NameInput: React.FC = () => {
  const name = useSelector(
    (state: RootState) => state.registerUserReducer.name,
    shallowEqual,
  );

  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  const setName = (_name: string): void => {
    dispatch({ type: 'ADD_NAME', payload: _name });
  };

  return (
    <Input
      required={true}
      value={name}
      setValue={setName}
      placeholder="Ingrese sus nombres"
      label="Nombres"
    />
  );
};

const LastnameInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();
  const lastname = useSelector(
    (state: RootState) => state.registerUserReducer.lastname,
    shallowEqual,
  );
  const setLastName = (_lastname: string): void => {
    dispatch({ type: 'ADD_LASTNAME', payload: _lastname });
  };

  return (
    <Input
      required={true}
      value={lastname}
      setValue={setLastName}
      placeholder="Ingrese sus apellidos"
      label="Apellidos"
    />
  );
};

const PhoneInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();
  const phone = useSelector(
    (state: RootState) => state.registerUserReducer.phone,
    shallowEqual,
  );
  const setPhone = (_phone: string): void => {
    dispatch({ type: 'ADD_PHONE', payload: _phone });
  };

  return (
    <Input
      required={true}
      value={phone}
      setValue={setPhone}
      placeholder="Ingrese numero celular"
      label="Celular"
    />
  );
};

const AddressInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  const address = useSelector(
    (state: RootState) => state.registerUserReducer.address,
    shallowEqual,
  );

  const setAddress = (_address: string): void => {
    dispatch({ type: 'ADD_ADDRESS', payload: _address });
  };

  return (
    <Input
      required={true}
      value={address}
      setValue={setAddress}
      placeholder="Ingrese su dirección"
      label="Dirección"
    />
  );
};

const EmailInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  const email = useSelector(
    (state: RootState) => state.registerUserReducer.email,
    shallowEqual,
  );

  const errorMessage = useSelector(
    (state: RootState) => state.registerUserReducer.errorMessage,
    shallowEqual,
  );

  const setAddress = (_email: string): void => {
    dispatch({ type: 'ADD_EMAIL', payload: _email });
  };

  return (
    <Input
      type="email"
      required={true}
      value={email}
      setValue={setAddress}
      placeholder="Ingrese su correo electrónico"
      label="Correo electrónico"
      errorMessage={errorMessage}
    />
  );
};

const PasswordInput: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();

  const password = useSelector(
    (state: RootState) => state.registerUserReducer.password,
    shallowEqual,
  );

  const setPassword = (_password: string): void => {
    dispatch({ type: 'ADD_PASSWORD', payload: _password });
  };

  return (
    <Input
      required={true}
      value={password}
      setValue={setPassword}
      placeholder="Ingrese su contraseña"
      label="Contraseña"
      type="password"
    />
  );
};
export default RegisterForm;
