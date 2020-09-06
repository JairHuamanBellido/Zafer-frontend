export interface CreateUser {
  file: File;
  name: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

export interface AuthUser {
  email: string;
  password: string;
}

export interface AuthUserResponse {
  access_token: string;
}
