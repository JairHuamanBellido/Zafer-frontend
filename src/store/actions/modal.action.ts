type ShowModal = {
  type: 'SHOW_MODAL';
  payload: React.ReactNode;
};

type HideModal = {
  type: 'HIDE_MODAL';
};

export type ModalActions = ShowModal | HideModal;
