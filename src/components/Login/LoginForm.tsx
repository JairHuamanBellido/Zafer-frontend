import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../common/Input';
import Button from '../../common/Button';
import userService from '../../api/service/user.service';
import LoadingSpinner from '../../common/SpinnerLoading';

const LoginForm: React.FC = () => {
  // Hooks
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const history = useHistory();

  // Events
  const submit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    setErrorEmail('');
    setErrorPassword('');
    try {
      const res = await userService.authenticate({ email, password });
      setLoading(false);
      userService.saveToken(res.access_token);
      history.replace('/');
    } catch (error) {
      setLoading(false);
      const { message } = error.response.data;
      if (error.response.status === 404) {
        setErrorEmail(message);
      } else if (error.response.status === 401) {
        setErrorPassword(message);
      }
    }
  };

  return (
    <form onSubmit={submit}>
      <Input
        required={true}
        type="email"
        className="field-container"
        setValue={setEmail}
        value={email}
        placeholder="Ingrese su correo electrónico"
        label="Email"
        errorMessage={errorEmail}
      />
      <Input
        required={true}
        className="field-container"
        setValue={setPassword}
        value={password}
        placeholder="Ingrese su contraseña"
        label="Contraseña"
        type="Password"
        errorMessage={errorPassword}
      />

      {!loading ? (
        <Button value="Ingresar" backgroundColor="#2C4AE6" />
      ) : (
        <LoadingSpinner />
      )}
    </form>
  );
};

export default LoginForm;
