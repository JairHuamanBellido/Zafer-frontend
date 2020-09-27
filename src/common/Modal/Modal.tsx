import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ModalState } from '../../store/reducer/modal.reducer';
import { RootState } from '../../store/store';

const Modal: React.FC = () => {
  const component = useSelector(
    (state: RootState) => state.modalReducer.component,
    shallowEqual,
  ) as ModalState;
  return <div className="modal-container">{component}</div>;
};

export default Modal;
