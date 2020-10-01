import React from 'react';
import { User } from '../../../api/models/User/User';
import ModalUserItem from './ModalUserItem';

interface Props {
  users: User[];
}
const ModalUsersResults: React.FC<Props> = ({ users }) => {
  return (
    <div className="modal-container__find-persons__results">
      {users.length > 0 ? (
        users.map((user) => <ModalUserItem key={user.id} user={user} />)
      ) : (
        <div className="no-results">
          <p>Sin resultados</p>
        </div>
      )}
    </div>
  );
};

export default ModalUsersResults;
