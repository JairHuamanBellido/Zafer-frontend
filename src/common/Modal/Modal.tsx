import React from 'react';
import { useSelector } from 'react-redux';

import { ModalState } from '../../store/reducer/modal.reducer';
import { RootState } from '../../store/store';

const Modal: React.FC = () => {
  const selector = useSelector<RootState, RootState['modalReducer']>(
    (state) => state.modalReducer,
  ) as ModalState;
  return <div className="modal-container">{selector.component}</div>;
};

export default Modal;
