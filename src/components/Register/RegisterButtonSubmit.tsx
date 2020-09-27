import React, { Dispatch, FormEvent } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CreateUser } from '../../api/models/User/User';
import userService from '../../api/service/user.service';
import { RegisterUserActions } from '../../store/actions/registerUser.action';
import { RootState } from '../../store/store';

const RegisterButtonSubmit: React.FC = () => {
  const dispatch = useDispatch<Dispatch<RegisterUserActions>>();
  const userSelector = useSelector(
    (state: RootState) => state.registerUserReducer,
    shallowEqual,
  );
  const history = useHistory();

  const submit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const createUser: CreateUser = {
      address: userSelector.address,
      email: userSelector.email,
      file: userSelector.image as File,
      lastname: userSelector.lastname,
      name: userSelector.name,
      password: userSelector.password,
      phone: userSelector.phone,
    };
    dispatch({ type: 'REGISTER_USER_PENDING' });
    try {
      await userService.register(createUser);
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
    <div className="submit-btn">
      <button onClick={submit} type="submit">
        Registrar
      </button>
    </div>
  );
};

export default RegisterButtonSubmit;
