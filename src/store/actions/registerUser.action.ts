type AddName = {
  type: 'ADD_NAME';
  payload: string;
};

type AddLastname = {
  type: 'ADD_LASTNAME';
  payload: string;
};

type AddPhone = {
  type: 'ADD_PHONE';
  payload: string;
};

type AddAddres = {
  type: 'ADD_ADDRESS';
  payload: string;
};

type AddEmail = {
  type: 'ADD_EMAIL';
  payload: string;
};

type AddPassword = {
  type: 'ADD_PASSWORD';
  payload: string;
};

export type RegisterUserActions =
  | AddAddres
  | AddEmail
  | AddLastname
  | AddName
  | AddPassword
  | AddPhone;
