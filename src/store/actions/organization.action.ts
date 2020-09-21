import { Game } from '../../api/models/Game/Game';
import { User } from '../../api/models/User/User';

type ShowFormGeneral = {
  type: 'SHOW_GENERAL_REGISTER';
  payload: boolean;
};

type ShowFormMembers = {
  type: 'SHOW_MEMBERS_REGISTER';
  payload: boolean;
};

type ShowFormGames = {
  type: 'SHOW_GAMES_REGISTER';
  payload: boolean;
};
type ShowFormWelcome = {
  type: 'SHOW_WELCOME_REGISTER';
  payload: boolean;
};

type ShowConfirmation = {
  type: 'SHOW_CONFIRMATION_REGISTER';
  payload: boolean;
};

type ShowSucces = {
  type: 'SHOW_SUCCESS';
  payload: boolean;
};

type ResetForm = {
  type: 'RESET_FORM';
};

export type OrganizationFormActions =
  | ShowFormGeneral
  | ShowFormMembers
  | ShowFormGames
  | ShowFormWelcome
  | ShowConfirmation
  | ShowSucces
  | ResetForm;

type AddNameOrganization = {
  type: 'ADD_NAME';
  payload: string;
};

type AddDateFoundationOrganization = {
  type: 'ADD_DATE_FOUNDATION';
  payload: Date;
};

type AddEmailOrganization = {
  type: 'ADD_EMAIL';
  payload: string;
};

type AddMembers = {
  type: 'ADD_MEMBERS';
  payload: User;
};

type RemoveMembers = {
  type: 'REMOVE_MEMBERS';
  payload: User;
};

type AddGames = {
  type: 'ADD_GAMES';
  payload: Game;
};

type RemoveGames = {
  type: 'REMOVE_GAMES';
  payload: Game;
};

type RemoveAllMembers = {
  type: 'REMOVE_ALL_MEMBERS';
};

type ResetOrganization = {
  type: 'RESET_ORGANIZATION';
};

export type OrganizationActions =
  | AddNameOrganization
  | AddDateFoundationOrganization
  | AddEmailOrganization
  | AddMembers
  | RemoveMembers
  | RemoveAllMembers
  | AddGames
  | RemoveGames
  | ResetOrganization;
