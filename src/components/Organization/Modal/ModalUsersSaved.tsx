import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import ModalUserItem from './ModalUserItem';

const ModalUsersSaved: React.FC = () => {
  const members = useSelector(
    (appState: RootState) => appState.organizationReducer.members,
    shallowEqual,
  );

  return (
    <div className="modal-container__find-persons__members">
      {members.length > 0 ? (
        members.map((user) => <ModalUserItem key={user.id} user={user} />)
      ) : (
        <div className="no-results">
          <p>No has agregado integrantes</p>
        </div>
      )}
    </div>
  );
};

export default ModalUsersSaved;
