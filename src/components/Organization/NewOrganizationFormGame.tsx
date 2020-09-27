import React, { Dispatch, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Game } from '../../api/models/Game/Game';
import Modal from '../../common/Modal/Modal';
import { ModalActions } from '../../store/actions/modal.action';
import {
  OrganizationActions,
  OrganizationFormActions,
} from '../../store/actions/organization.action';
import { RootState } from '../../store/store';
import ModalOrganization from './NewOrganizationModal';
import CheckCircle from '../../assets/img/ic_check-circle.svg';
import PlusCircle from '../../assets/img/ic_plus-circle.svg';

interface GameComponentProps {
  game: Game;
  isEnableForRemove?: boolean;
  isAdded?: boolean;
}

const GameComponent: React.FC<GameComponentProps> = ({
  game,
  isEnableForRemove,
  isAdded,
}) => {
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(isAdded as boolean);

  const toggle = () => {
    setSelected(!selected);
    if (!selected) {
      organizationDispatch({ type: 'ADD_GAMES', payload: game });
      return;
    }
    organizationDispatch({ type: 'REMOVE_GAMES', payload: game });
  };
  return (
    <div className="organization-container__game">
      <div className="organization-container__game-info">
        <img src={game.avatar} alt={game.name} />
        <p>{game.name}</p>
      </div>
      {isEnableForRemove && (
        <div>
          <button onClick={toggle} type="button">
            {!isAdded ? (
              <img height={24} src={PlusCircle} alt="add-game" />
            ) : (
              <img height={24} src={CheckCircle} alt="check-game" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const OrganizationGames: React.FC = () => {
  const games = useSelector(
    (state: RootState) => state.organizationReducer.games,
    shallowEqual,
  );

  return (
    <div className="organization-container__games">
      {games.map((game) => (
        <GameComponent
          isAdded={true}
          key={game.id}
          game={game}
          isEnableForRemove={true}
        />
      ))}
    </div>
  );
};

const OrganizationModalGame: React.FC = () => {
  // Selector
  const flag = useSelector(
    (state: RootState) => state.modalReducer.flag,
    shallowEqual,
  );
  return <>{flag && <Modal />}</>;
};

const OrganizationFormGame: React.FC = () => {
  // Dispatch
  const dispatchForm = useDispatch<Dispatch<OrganizationFormActions>>();
  const modalDispatch = useDispatch<Dispatch<ModalActions>>();

  // Events
  const showFormMembers = (): void => {
    dispatchForm({ type: 'SHOW_MEMBERS_REGISTER', payload: true });
  };

  const showConfirmation = (): void => {
    dispatchForm({
      type: 'SHOW_CONFIRMATION_REGISTER',
      payload: true,
    });
  };

  const showModal = (): void => {
    modalDispatch({
      type: 'SHOW_MODAL',
      payload: <ModalOrganization type="games" />,
    });
  };
  return (
    <>
      <OrganizationModalGame />
      <div className="organization-container__form-games">
        <h2>Juegos</h2>
        <p>Agregar juegos en los que tu organizacion se encuentran.</p>
        <button onClick={showModal} className="btn-add-games" type="button">
          Agregar juegos
        </button>
        <OrganizationGames />
        <div className="btn-container">
          <button
            type="button"
            className="btn-return"
            onClick={showFormMembers}
          >
            Regresar
          </button>
          <button type="button" onClick={showConfirmation}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default OrganizationFormGame;
