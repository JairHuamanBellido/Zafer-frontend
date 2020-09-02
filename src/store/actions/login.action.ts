type AddEmail = {
  type: 'ADD_EMAIL';
  payload: string;
};

type AddPassword = {
  type: 'ADD_PASSWORD';
  payload: string;
};

export type LoginActions = AddEmail | AddPassword;
