type AddEmail = {
  type: 'ADD_EMAIL';
  payload: string;
};

type AddPassword = {
  type: 'ADD_PASSWORD';
  payload: string;
};

type AuthenticatePending = {
  type: 'AUTH_PENDING';
};

type AuthenticateSuccess = {
  type: 'AUTH_SUCCESS';
};

type AuthenticateError = {
  type: 'AUTH_ERROR';
  payload: string;
};

export type LoginActions =
  | AddEmail
  | AddPassword
  | AuthenticateError
  | AuthenticateSuccess
  | AuthenticatePending;
