import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../api/models/User/User';
import Modal from '../../common/Modal/Modal';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../../store/actions/organization.action';
import { ModalState } from '../../store/reducer/modal.reducer';
import { UserState } from '../../store/reducer/user.reducer';
import { OrganizationState } from '../../store/reducer/organization.reducer';
import { RootState } from '../../store/store';
import CheckCircle from '../../assets/img/ic_check-circle.svg';
import PlusCircle from '../../assets/img/ic_plus-circle.svg';
import { ModalActions } from '../../store/actions/modal.action';
import ModalOrganization from './NewOrganizationModal';

const MemberComponent: React.FC<{
  user: User;
  isEnableForRemove?: boolean;
  isAdded?: boolean;
}> = ({ user, isEnableForRemove, isAdded }) => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(isAdded as boolean);

  const toggle = () => {
    setSelected(!selected);
    if (!selected) {
      organizationDispatch({ type: 'ADD_MEMBERS', payload: user });
      return;
    }
    organizationDispatch({ type: 'REMOVE_MEMBERS', payload: user });
  };
  return (
    <div className="organization-container__member">
      <div className="organization-container__member-info">
        <img src={user.avatar} alt={user.name} />
        <p>
          {user.name} {user.lastname}
        </p>
      </div>
      {isEnableForRemove && (
        <div>
          <button onClick={toggle} type="button">
            {!isAdded ? (
              <img height={24} src={PlusCircle} alt="add-user" />
            ) : (
              <img height={24} src={CheckCircle} alt="check-user" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const OrganizationsMembers: React.FC = () => {
  const userSelector = useSelector<RootState, RootState['userReducer']>(
    (state) => state.userReducer,
  ) as UserState;
  const organizationSelector = useSelector<
  RootState,
  RootState['organizationReducer']
  >((state) => state.organizationReducer) as OrganizationState;
  return (
    <div className="organization-container__members">
      <MemberComponent user={userSelector.user} />
      {organizationSelector.members.map((user) => (
        <MemberComponent
          isAdded={true}
          key={user.id}
          user={user}
          isEnableForRemove={user.id !== userSelector.user.id}
        />
      ))}
    </div>
  );
};

const OrganizationFormMembers: React.FC = () => {
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();
  const modalDispatch = useDispatch<Dispatch<ModalActions>>();
  const modalSelector = useSelector<RootState, RootState['modalReducer']>(
    (state) => state.modalReducer,
  ) as ModalState;

  const showFormGames = (): void => {
    dispatch({ type: 'SHOW_GAMES_REGISTER', payload: true });
  };

  const showFormGeneral = (): void => {
    dispatch({ type: 'SHOW_GENERAL_REGISTER', payload: true });
  };

  const showModal = (): void => {
    modalDispatch({
      type: 'SHOW_MODAL',
      payload: <ModalOrganization type="members" />,
    });
  };
  return (
    <>
      {modalSelector.flag && <Modal />}
      <div className="organization-container__form-members">
        <h2>Miembros</h2>
        <p>Agrega personas a tu organización</p>
        <button className="btn-add-members" onClick={showModal} type="button">
          Agregar integrantes
        </button>
        <OrganizationsMembers />
        <div className="btn-container">
          <button
            className="btn-return"
            onClick={showFormGeneral}
            type="button"
          >
            Regresar
          </button>
          <button onClick={showFormGames} type="button">
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};
export default OrganizationFormMembers;
