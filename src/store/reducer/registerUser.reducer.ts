import { Reducer } from 'react';
import { RegisterUserActions } from '../actions/registerUser.action';

export interface RegisterUserState {
  name: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  image?: File;
  pending: boolean;
  error: boolean;
  success: boolean;
  errorMessage: string;
}

const registerState: RegisterUserState = {
  address: '',
  email: '',
  lastname: '',
  name: '',
  password: '',
  phone: '',
  pending: false,
  error: false,
  success: false,
  errorMessage: '',
};

type State = RegisterUserState;
type Action = RegisterUserActions;

export const registerUserReducer: Reducer<State, Action> = (
  state = registerState,
  action,
) => {
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
    case 'ADD_IMAGE':
      return { ...state, image: action.payload };
    case 'REGISTER_USER_PENDING':
      return {
        ...state,
        pending: true,
        success: false,
        error: false,
        errorMessage: '',
      };
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        pending: false,
        success: true,
        error: false,
        errorMessage: '',
        address: '',
        email: '',
        image: undefined,
        lastname: '',
        name: '',
        password: '',
        phone: '',
      };
    case 'REGISTER_USER_ERROR':
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
