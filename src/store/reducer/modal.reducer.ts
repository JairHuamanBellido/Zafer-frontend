import { Reducer } from 'react';
import { ModalActions } from '../actions/modal.action';

export interface ModalState {
  flag: boolean;
  component: React.ReactNode | undefined;
}

const modalState: ModalState = {
  flag: false,
  component: undefined,
};

type State = ModalState;
type Action = ModalActions;

export const modalReducer: Reducer<State, Action> = (
  state = modalState,
  action,
) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { flag: true, component: action.payload };
    case 'HIDE_MODAL':
      return { flag: false, component: undefined };
    default:
      return state;
  }
};
