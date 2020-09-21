import { UserPersonal } from '../../api/models/User/User';

type SetUserPending = {
  type: 'SET_USER_PENDING';
};

type SetUserSuccess = {
  type: 'SET_USER_SUCCESS';
  payload: UserPersonal;
};

type SetUserError = {
  type: 'SET_USER_ERROR';
};

type Logout = {
  type: 'LOGOUT';
};

export type UserActions =
  | SetUserError
  | SetUserPending
  | SetUserSuccess
  | Logout;
