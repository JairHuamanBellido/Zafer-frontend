import { MessageConfirmation } from '../models/MessageConfirmation';
import http from '../http';
import { CreateUser, AuthUser, AuthUserResponse, User } from '../models/User';

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

  getPersonalInformation = async (): Promise<User> => {
    return http.get<User>('users/me').then((res) => res.data);
  };
}

export default new UserService();
