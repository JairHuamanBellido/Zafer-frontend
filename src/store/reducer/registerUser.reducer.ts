import { Reducer } from 'react';
import { RegisterUserActions } from '../actions/registerUser.action';

export interface RegisterUserState {
  name: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

const registerState: RegisterUserState = {
  address: '',
  email: '',
  lastname: '',
  name: '',
  password: '',
  phone: '',
};

export const registerUserReducer: Reducer<
RegisterUserState,
RegisterUserActions
> = (state = registerState, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return { ...state, address: action.payload };
    case 'ADD_EMAIL':
      return { ...state, email: action.payload };
    case 'ADD_LASTNAME':
      return { ...state, lastname: action.payload };
    case 'ADD_NAME':
      return { ...state, name: action.payload };
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload };
    case 'ADD_PHONE':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
