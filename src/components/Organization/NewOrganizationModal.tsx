import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../api/models/User/User';
import userService from '../../api/service/user.service';
import { ModalActions } from '../../store/actions/modal.action';
import PlusCircle from '../../assets/img/ic_plus-circle.svg';
import CheckCircle from '../../assets/img/ic_check-circle.svg';
import { OrganizationActions } from '../../store/actions/organization.action';
import { RootState } from '../../store/store';
import { OrganizationState } from '../../store/reducer/organization.reducer';
import { Game } from '../../api/models/Game/Game';
import gameService from '../../api/service/game.service';
import SkeletonSearchOrganization from './SkeletonSearchOrganization';

/**
 * Users Components
 *
 */
const UserResults: React.FC<{ users: User[] }> = ({ users }) => {
  const selector = useSelector<RootState, RootState['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;

  const isUserAdded = (user: User): boolean => {
    return selector.members.filter((_user) => _user.id === user.id).length > 0;
  };

  return (
    <div className="modal-container__find-persons__results">
      {users.length > 0 ? (
        users.map((user) => (
          <UserItem isAdded={isUserAdded(user)} key={user.id} user={user} />
        ))
      ) : (
        <div className="no-results">
          <p>Sin resultados</p>
        </div>
      )}
    </div>
  );
};

const UserItem: React.FC<{ user: User; isAdded?: boolean }> = ({
  user,
  isAdded,
}) => {
  const dispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(isAdded || false);

  const toggle = () => {
    setSelected(!selected);
    if (!selected) {
      dispatch({ type: 'ADD_MEMBERS', payload: user });
      return;
    }
    dispatch({ type: 'REMOVE_MEMBERS', payload: user });
  };

  return (
    <div onClickCapture={toggle} className="user">
      <div className="user-info">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${user.avatar})` }}
        />
        <p className="name">
          {user.name} {user.lastname}
        </p>
      </div>
      <button type="button">
        {!selected ? (
          <img height={24} src={PlusCircle} alt="add-user" />
        ) : (
          <img height={24} src={CheckCircle} alt="check-user" />
        )}
      </button>
    </div>
  );
};

const MembersSaved: React.FC = () => {
  const selector = useSelector<RootState, RootState['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;
  return (
    <div className="modal-container__find-persons__members">
      {selector.members.length > 0 ? (
        selector.members.map((user) => (
          <UserItem isAdded={true} key={user.id} user={user} />
        ))
      ) : (
        <div className="no-results">
          <p>No has agregado integrantes</p>
        </div>
      )}
    </div>
  );
};

const ModalFindPersonsResultsContainer: React.FC = () => {
  // Hooks
  const [searchName, setName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Events
  const searchUsers = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setLoading(true);
    if (e.target.value.length > 0) {
      try {
        const userResult = await userService.findUsersByName(e.target.value);
        setUsers(userResult);
        setLoading(false);
      } catch (_) {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setUsers([]);
    }
  };
  return (
    <>
      <div className="modal-container__find-persons__search">
        <label htmlFor="search-name">
          <input
            value={searchName}
            onChange={searchUsers}
            type="text"
            id="search-name"
            name="search-name"
            placeholder="Busca personas en la comunidad"
          />
        </label>
      </div>
      {loading ? (
        <div className="modal-container__find-persons__results">
          <SkeletonSearchOrganization />{' '}
        </div>
      ) : (
        <UserResults users={users} />
      )}
    </>
  );
};

const CounterMembers: React.FC = () => {
  // Selector
  const selector = useSelector<RootState, RootState['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;

  return (
    <>
      <span>{selector.members.length} integrantes</span>
    </>
  );
};

const ModalFindPersons: React.FC = () => {
  // Hooks
  const [showingSearchContainer, setSearchContainer] = useState<boolean>(true);

  // Events
  const toggleContainer = (): void => {
    setSearchContainer(!showingSearchContainer);
  };

  return (
    <div className="modal-container__find-persons">
      <div className="modal-container__find-persons__header">
        <h2>Buscar personas</h2>
        <button onClick={toggleContainer} type="button">
          {showingSearchContainer ? <CounterMembers /> : 'Buscar personas'}
        </button>
      </div>
      {showingSearchContainer ? (
        <ModalFindPersonsResultsContainer />
      ) : (
        <MembersSaved />
      )}
      <ModalActionsButton />
    </div>
  );
};

/**
 * Games Components
 */

const GamesResults: React.FC<{ games: Game[] }> = ({ games }) => {
  const selector = useSelector<RootState, RootState['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;

  const isGameAdded = (game: Game): boolean => {
    return selector.games.filter((_game) => game.id === _game.id).length > 0;
  };

  return (
    <div className="modal-container__find-persons__results">
      {games.length > 0 ? (
        games.map((game) => (
          <GameItem isAdded={isGameAdded(game)} key={game.id} game={game} />
        ))
      ) : (
        <div className="no-results">
          <p>Sin resultados</p>
        </div>
      )}
    </div>
  );
};

const GameItem: React.FC<{ game: Game; isAdded?: boolean }> = ({
  game,
  isAdded,
}) => {
  const dispatch = useDispatch<Dispatch<OrganizationActions>>();
  const [selected, setSelected] = useState<boolean>(isAdded || false);
  const toggle = () => {
    setSelected(!selected);
    if (!selected) {
      dispatch({ type: 'ADD_GAMES', payload: game });
      return;
    }
    dispatch({ type: 'REMOVE_GAMES', payload: game });
  };

  return (
    <div onClickCapture={toggle} className="user">
      <div className="user-info">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${game.avatar})` }}
        />
        <p className="name">{game.name}</p>
      </div>
      <button type="button">
        {!selected ? (
          <img height={24} src={PlusCircle} alt="add-user" />
        ) : (
          <img height={24} src={CheckCircle} alt="check-user" />
        )}
      </button>
    </div>
  );
};

const ModalActionsButton: React.FC = () => {
  // Dispatch
  const dispatch = useDispatch<Dispatch<ModalActions>>();
  const organizationDispatch = useDispatch<Dispatch<OrganizationActions>>();
  // Events
  const closeModal = (): void => {
    dispatch({ type: 'HIDE_MODAL' });
    organizationDispatch({ type: 'REMOVE_ALL_MEMBERS' });
  };

  return (
    <div className="modal-container__find-persons__actions">
      <button className="close-btn" onClick={closeModal} type="button">
        Cerrar
      </button>
    </div>
  );
};

const ModalFindGamesResultsContainer: React.FC = () => {
  // Hooks
  const [gameInput, setGameInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [games, setGames] = useState<Game[]>([]);

  // Events
  const searchGames = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameInput(e.target.value);
    setLoading(true);
    if (e.target.value.length > 0) {
      try {
        const gamesResult = await gameService.findByName(e.target.value);
        setGames(gamesResult);
        setLoading(false);
      } catch (_) {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setGames([]);
    }
  };
  return (
    <>
      <div className="modal-container__find-games__search">
        <label htmlFor="search-name">
          <input
            value={gameInput}
            onChange={searchGames}
            type="text"
            id="search-name"
            name="search-name"
            placeholder="Busca personas en la comunidad"
          />
        </label>
      </div>
      {loading ? (
        <div className="modal-container__find-games__results">
          <SkeletonSearchOrganization />
        </div>
      ) : (
        <GamesResults games={games} />
      )}
    </>
  );
};

const ModalFindGames: React.FC = () => {
  return (
    <>
      <div className="modal-container__find-games">
        <div className="modal-container__find-games__header">
          <h2>Buscar juegos</h2>
        </div>
        <ModalFindGamesResultsContainer />
        <ModalActionsButton />
      </div>
    </>
  );
};

type ModalType = 'members' | 'games';

interface Props {
  type: ModalType;
}

const ModalOrganization: React.FC<Props> = ({ type }) => {
  return (
    <>
      {type === 'members' && <ModalFindPersons />}
      {type === 'games' && <ModalFindGames />}
    </>
  );
};

export default ModalOrganization;
