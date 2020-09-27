import { Game } from '../../api/models/Game/Game';
import { User } from '../../api/models/User/User';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../actions/organization.action';

interface UserById {
  [key: string]: User;
}

export interface OrganizationFormState {
  isShowGeneralForm: boolean;
  isShowMembersForm: boolean;
  isShowWelcomeForm: boolean;
  isShowGamesForm: boolean;
  isShowConfirmation: boolean;
  isShowSuccess: boolean;
}
export interface OrganizationState {
  name: string;
  dateFoundation: Date;
  email: string;
  members: User[];
  membersById: UserById;
  games: Game[];
}

const organizationFormState: OrganizationFormState = {
  isShowGeneralForm: false,
  isShowGamesForm: false,
  isShowMembersForm: false,
  isShowWelcomeForm: false,
  isShowConfirmation: false,
  isShowSuccess: false,
};

const organizationState: OrganizationState = {
  name: '',
  dateFoundation: new Date(),
  email: '',
  members: [],
  membersById: {},
  games: [],
};

export const organizationReducer = (
  state = organizationState,
  action: OrganizationActions,
): OrganizationState => {
  switch (action.type) {
    case 'ADD_NAME':
      return { ...state, name: action.payload };
    case 'ADD_EMAIL':
      return { ...state, email: action.payload };
    case 'ADD_DATE_FOUNDATION':
      return { ...state, dateFoundation: action.payload };

    case 'ADD_MEMBERS':
      return {
        ...state,
        members: [...state.members, action.payload],
        membersById: {
          ...state.membersById,
          ...{ [action.payload.id]: action.payload },
        },
      };
    case 'EDIT_MEMBER':
      return {
        ...state,
        membersById: {
          ...state.membersById,
          [action.payload.id]: action.payload,
        },
      };

    case 'REMOVE_MEMBERS': {
      const rest: UserById = {};
      Object.keys(state.membersById).forEach((e) => {
        if (e !== action.payload.id) {
          rest[e] = state.membersById[e];
        }
      });
      return {
        ...state,
        members: [...state.members.filter((e) => e.id !== action.payload.id)],
        membersById: rest,
      };
    }
    case 'ADD_GAMES':
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case 'REMOVE_GAMES':
      return {
        ...state,
        games: [...state.games.filter((e) => e.id !== action.payload.id)],
      };
    case 'RESET_ORGANIZATION':
      return organizationState;
    default:
      return state;
  }
};

export const organizationFormReducer = (
  state = organizationFormState,
  action: OrganizationFormActions,
): OrganizationFormState => {
  switch (action.type) {
    case 'SHOW_GAMES_REGISTER':
      return {
        ...state,
        isShowGamesForm: action.payload,
        isShowGeneralForm: false,
        isShowMembersForm: false,
        isShowWelcomeForm: false,
        isShowConfirmation: false,
        isShowSuccess: false,
      };
    case 'SHOW_GENERAL_REGISTER':
      return {
        ...state,
        isShowGamesForm: false,
        isShowGeneralForm: action.payload,
        isShowMembersForm: false,
        isShowWelcomeForm: false,
        isShowConfirmation: false,
        isShowSuccess: false,
      };
    case 'SHOW_MEMBERS_REGISTER':
      return {
        ...state,
        isShowGamesForm: false,
        isShowGeneralForm: false,
        isShowMembersForm: action.payload,
        isShowWelcomeForm: false,
        isShowConfirmation: false,
        isShowSuccess: false,
      };
    case 'SHOW_WELCOME_REGISTER':
      return {
        ...state,
        isShowGamesForm: false,
        isShowGeneralForm: false,
        isShowMembersForm: false,
        isShowConfirmation: false,
        isShowWelcomeForm: action.payload,
        isShowSuccess: false,
      };
    case 'SHOW_CONFIRMATION_REGISTER':
      return {
        ...state,
        isShowConfirmation: action.payload,
        isShowGamesForm: false,
        isShowGeneralForm: false,
        isShowMembersForm: false,
        isShowWelcomeForm: false,
        isShowSuccess: false,
      };
    case 'SHOW_SUCCESS':
      return {
        ...state,
        isShowConfirmation: false,
        isShowGamesForm: false,
        isShowGeneralForm: false,
        isShowMembersForm: false,
        isShowWelcomeForm: false,
        isShowSuccess: action.payload,
      };
    case 'RESET_FORM':
      return organizationFormState;
    default:
      return state;
  }
};
