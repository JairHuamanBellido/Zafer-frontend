import { Reducer } from 'react';
import { LoginActions } from '../actions/login.action';

export interface LoginState {
  email: string;
  password: string;
}

const loginState: LoginState = {
  email: '',
  password: '',
};

export const loginReducer: Reducer<LoginState, LoginActions> = (
  state = loginState,
  action
) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.payload };
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};


