import { Game } from '../Game/Game';

interface Member {
  name: string;
  lastname: string;
  avatar: string;
  id: string;
}

/**
 * Interface para creacion de organización
 */
export interface CreateOrganization {
  name: string;
  fundation: Date;
  email: string;
  members: string[];
  games: string[];
  guestUsers: string[];
}

/**
 * Interface de detalle de una organización
 */
export interface Organization {
  name: string;
  fundation: Date;
  email: string;
  members: Member[];
  guestUsers: Game[];
  games: Member[];
  id: string;
}
