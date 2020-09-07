import { User } from '../../api/models/User';

type SetUserPending = {
  type: 'SET_USER_PENDING';
};

type SetUserSuccess = {
  type: 'SET_USER_SUCCESS';
  payload: User;
};

type SetUserError = {
  type: 'SET_USER_ERROR';
};

export type UserActions = SetUserError | SetUserPending | SetUserSuccess;
