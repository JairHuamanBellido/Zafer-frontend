import React, { Dispatch, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { User } from '../../../api/models/User/User';
import { OrganizationActions } from '../../../store/actions/organization.action';
import { RootState } from '../../../store/store';
import PlusCircle from '../../../assets/img/ic_plus-circle.svg';
import CheckCircle from '../../../assets/img/ic_check-circle.svg';

interface Props {
  user: User;
}
const ModalUserItem: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(false);

  const member = useSelector(
    (state: RootState) => state.organizationReducer.membersById[user.id],
    shallowEqual,
  );

  useEffect(() => {
    setSelected(member !== undefined);
  }, [member, user]);

  const toggle = () => {
    setSelected(!selected);
    if (!selected) {
      dispatch({ type: 'ADD_MEMBERS', payload: user });
      return;
    }
    dispatch({ type: 'REMOVE_MEMBERS', payload: user });
  };
  return (
    <div onClickCapture={user.role ? undefined : toggle} className="user">
      <div className="user-info">
        <div className="avatar" style={{ backgroundImage: `url(${user.avatar})` }} />
        <p className="name">
          {user.name} {user.lastname}
        </p>
      </div>
      {user.role ? (
        <p className="user-not-allowed">En una organización</p>
      ) : (
        <button type="button">
          {!selected ? (
            <img height={24} src={PlusCircle} alt="add-user" />
          ) : (
            <img height={24} src={CheckCircle} alt="check-user" />
          )}
        </button>
      )}
    </div>
  );
};

export default ModalUserItem;
