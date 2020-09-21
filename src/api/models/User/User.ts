import { Organization } from '../Organization/Organization';

/**
 * Interface para crear un usuario
 */
export interface CreateUser {
  file: File;
  name: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
}

/**
 * Interface para autenticarse
 */
export interface AuthUser {
  email: string;
  password: string;
}

/**
 * Interface de respuesta luego de la autenticación
 */
export interface AuthUserResponse {
  access_token: string;
}

/**
 * Interface para resultado de búsquedas de usuarios
 */
export interface User {
  name: string;
  lastname: string;
  avatar: string;
  id: string;
}

/**
 * Interface para informacion detallada del usuario actual
 */
export interface UserPersonal {
  name: string;
  lastname: string;
  avatar: string;
  id: string;
  organization: Organization | null;
}
