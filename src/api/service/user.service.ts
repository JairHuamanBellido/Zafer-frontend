import { MessageConfirmation } from '../models/MessageConfirmation';
import http from '../http';
import { CreateUser } from '../models/User';

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
}

export default new UserService();
