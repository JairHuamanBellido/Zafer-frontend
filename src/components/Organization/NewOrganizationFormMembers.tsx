import React, { Dispatch, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { User } from '../../api/models/User/User';
import Modal from '../../common/Modal/Modal';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../../store/actions/organization.action';
import { RootState } from '../../store/store';
import CheckCircle from '../../assets/img/ic_check-circle.svg';
import PlusCircle from '../../assets/img/ic_plus-circle.svg';
import { ModalActions } from '../../store/actions/modal.action';
import ModalOrganization from './NewOrganizationModal';
import { useVisible } from '../../hooks/useVisible';

const SelectRoles: React.FC<{ user: User }> = ({ user }) => {
  const [role, setRole] = useState<string>('Seleccione un role');
  const { isVisible, ref, setIsVisible } = useVisible(false);
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();

  const toggleShowRoles = (): void => {
    setIsVisible(!isVisible);
  };

  const selectRole = (_role: string): void => {
    setRole(_role);
    organizationDispatch({
      type: 'EDIT_MEMBER',
      payload: { ...user, role: _role },
    });
    toggleShowRoles();
  };

  return (
    <div ref={ref} className="organization-container__member__selector-roles">
      <div
        onClickCapture={toggleShowRoles}
        className="organization-container__member__role"
      >
        <p>{role}</p>
      </div>
      {isVisible && (
        <div className="organization-container__member__roles">
          <p onClickCapture={() => selectRole('Capitan de equipo')}>
            Capitan de equipo
          </p>
          <p onClickCapture={() => selectRole('Jugador')}>Jugador</p>
          <p onClickCapture={() => selectRole('Reclutador')}>Reclutador</p>
          <p onClickCapture={() => selectRole('Fan')}>Fan</p>
        </div>
      )}
    </div>
  );
};

const MemberComponent: React.FC<{
  user: User;
  isEnableForRemove?: boolean;
  isAdded?: boolean;
  role?: boolean;
}> = ({ user, isEnableForRemove, isAdded, role }) => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(isAdded as boolean);
  const member = useSelector(
    (state: RootState) => state.organizationReducer.membersById[user.id],
  );

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
          {member.name} {member.lastname}
        </p>
      </div>
      {role && <SelectRoles user={member} />}
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
  const user = useSelector(
    (state: RootState) => state.userReducer.user,
    shallowEqual,
  );
  const members = useSelector(
    (state: RootState) => state.organizationReducer.members,
    shallowEqual,
  );

  return (
    <div className="organization-container__members">
      {members.map((member) => (
        <MemberComponent
          isAdded={true}
          key={member.id}
          user={member}
          role={true}
          isEnableForRemove={member.id !== user.id}
        />
      ))}
    </div>
  );
};

const OrganizationModalMembers: React.FC = () => {
  const flag = useSelector(
    (state: RootState) => state.modalReducer.flag,
    shallowEqual,
  );
  return <>{flag && <Modal />}</>;
};

const OrganizationFormMembers: React.FC = () => {
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();
  const modalDispatch = useDispatch<Dispatch<ModalActions>>();

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
      <OrganizationModalMembers />
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
