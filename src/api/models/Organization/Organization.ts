import { Game } from '../Game/Game';
import { User } from '../User/User';

/**
 * Interface para creacion de organización
 */
export interface CreateOrganization {
  name: string;
  fundation: Date;
  email: string;
  members: string[];
  games: string[];
}

export interface Organization {
  name: string;
  fundation: Date;
  email: string;
  members: User[];
  games: Game[];
  id: string;
}
