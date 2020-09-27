import { LoginActions } from '../actions/login.action';

export interface LoginState {
  email: string;
  password: string;
  errorMessage: string;
  pending: boolean;
  success: boolean;
  error: boolean;
}

const loginState: LoginState = {
  email: '',
  password: '',
  errorMessage: '',
  error: false,
  pending: false,
  success: false,
};

export const loginReducer = (
  state = loginState,
  action: LoginActions,
): LoginState => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return { ...state, email: action.payload };
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload };
    case 'AUTH_PENDING':
      return {
        ...state,
        pending: true,
        success: false,
        error: false,
        errorMessage: '',
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };
    case 'AUTH_SUCCESS':
      return {
        email: '',
        password: '',
        pending: false,
        success: true,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};
