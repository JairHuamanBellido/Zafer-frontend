import { Reducer } from 'react';
import { UserActions } from '../actions/user.action';
import { UserPersonal } from '../../api/models/User/User';

export interface UserState {
  user: UserPersonal;
  errorUser: boolean;
  successUser: boolean;
  pedingUser: boolean;
}

const userState: UserState = {
  user: {
    avatar: '',
    id: '',
    lastname: '',
    name: '',
    organization: null,
  },
  errorUser: false,
  successUser: false,
  pedingUser: false,
};

type State = UserState;
type Action = UserActions;

export const userReducer: Reducer<State, Action> = (
  state = userState,
  action,
) => {
  switch (action.type) {
    case 'SET_USER_ERROR':
      return {
        ...state,
        pedingUser: false,
        errorUser: true,
        successUser: false,
      };
    case 'SET_USER_PENDING':
      return {
        ...state,
        pedingUser: true,
        errorUser: false,
        successUser: false,
      };
    case 'SET_USER_SUCCESS':
      return {
        ...state,
        pedingUser: false,
        errorUser: false,
        successUser: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return userState;
    default:
      return state;
  }
};
