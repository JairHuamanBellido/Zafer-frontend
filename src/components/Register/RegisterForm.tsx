import React, { Dispatch, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegisterInputPhoto from './RegisterInputPhoto';
import Input from '../../common/Input/Input';
import { RegisterUserActions } from '../../store/actions/registerUser.action';
import RegisterButtonSubmit from './RegisterButtonSubmit';
import { CreateUser } from '../../api/models/User';
import { RootState } from '../../store/store';
import UserService from '../../api/service/user.service';
import LoadingSpinner from '../../common/Loading/SpinnerLoading';
import { RegisterUserState } from '../../store/reducer/registerUser.reducer';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();
  const userState = useSelector<RootState, RootState['registerUserReducer']>(
    (state) => state.registerUserReducer,
  ) as RegisterUserState;
  const history = useHistory();

  const submit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const createUser: CreateUser = {
      address: userState.address,
      email: userState.email,
      file: userState.image as File,
      lastname: userState.lastname,
      name: userState.name,
      password: userState.password,
      phone: userState.phone,
    };
    dispatch({ type: 'REGISTER_USER_PENDING' });
    try {
      await UserService.register(createUser);
      dispatch({ type: 'REGISTER_USER_SUCCESS' });
      history.replace('/register/success');
    } catch (err) {
      dispatch({
        type: 'REGISTER_USER_ERROR',
        payload: err.response.data.message,
      });
    }
  };
  return (
    <form onSubmit={submit} className="register-container__form">
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
      {userState.pending ? (
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
interface Props {
  dispatch: Dispatch<RegisterUserActions>;
}
const NameInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setName = (_name: string): void => {
    setValue(_name);
    dispatch({ type: 'ADD_NAME', payload: _name });
  };

  return (
    <Input
      required={true}
      value={value}
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
    dispatch({ type: 'ADD_LASTNAME', payload: _lastname });
  };

  return (
    <Input
      required={true}
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
    dispatch({ type: 'ADD_PHONE', payload: _phone });
  };

  return (
    <Input
      required={true}
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
    dispatch({ type: 'ADD_ADDRESS', payload: _address });
  };

  return (
    <Input
      required={true}
      value={value}
      setValue={setAddress}
      placeholder="Ingrese su dirección"
      label="Dirección"
    />
  );
};

const EmailInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const userState = useSelector<RootState, RootState['registerUserReducer']>(
    (state) => state.registerUserReducer,
  ) as RegisterUserState;
  const setAddress = (_email: string): void => {
    setValue(_email);
    dispatch({ type: 'ADD_EMAIL', payload: _email });
  };

  return (
    <Input
      type="email"
      required={true}
      value={value}
      setValue={setAddress}
      placeholder="Ingrese su correo electrónico"
      label="Correo electrónico"
      errorMessage={userState.errorMessage}
    />
  );
};

const PasswordInput: React.FC<Props> = ({ dispatch }) => {
  const [value, setValue] = useState<string>('');
  const setPassword = (_password: string): void => {
    setValue(_password);
    dispatch({ type: 'ADD_PASSWORD', payload: _password });
  };

  return (
    <Input
      required={true}
      value={value}
      setValue={setPassword}
      placeholder="Ingrese su contraseña"
      label="Contraseña"
      type="password"
    />
  );
};
export default RegisterForm;
