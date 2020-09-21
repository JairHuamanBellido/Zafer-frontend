import { MessageConfirmation } from '../models/MessageConfirmation';
import http from '../http';
import {
  CreateUser,
  AuthUser,
  AuthUserResponse,
  User,
  UserPersonal,
} from '../models/User/User';

class UserService {
  register = async (user: CreateUser): Promise<MessageConfirmation> => {
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('file', user.file);
    formData.append('lastname', user.lastname);
    formData.append('phone', user.phone);
    formData.append('address', user.address);
    formData.append('email', user.email);
    formData.append('password', user.password);
    return http
      .post<{}, MessageConfirmation>('users', formData)
      .then((res) => res);
  };

  saveToken = (token: string): void => {
    localStorage.setItem('token', token);
  };

  authenticate = async (auth: AuthUser): Promise<AuthUserResponse> => {
    return http.post<AuthUserResponse>('auth', auth).then((res) => res.data);
  };

  getPersonalInformation = async (): Promise<UserPersonal> => {
    return http.get<UserPersonal>('users/me').then((res) => res.data);
  };

  findUsersByName = async (name: string): Promise<User[]> => {
    return http.get<User[]>(`users?name=${name}`).then((res) => res.data);
  };
}

export default new UserService();
