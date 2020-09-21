import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateOrganization } from '../../api/models/Organization/Organization';
import organizationService from '../../api/service/organization.service';
import LoadingSpinner from '../../common/Loading/SpinnerLoading';
import { OrganizationFormActions } from '../../store/actions/organization.action';
import { OrganizationState } from '../../store/reducer/organization.reducer';
import { UserState } from '../../store/reducer/user.reducer';
import { RootState } from '../../store/store';

type S = RootState;

const NewOrganizationConfirmation: React.FC = () => {
  // Hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Dispatch
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();

  // Selector
  const userSelector = useSelector<S, S['userReducer']>(
    (state) => state.userReducer,
  ) as UserState;
  const organizationSelector = useSelector<S, S['organizationReducer']>(
    (state) => state.organizationReducer,
  ) as OrganizationState;

  // Events
  const createOrganization = async (): Promise<void> => {
    setLoading(true);
    const organization: CreateOrganization = {
      email: organizationSelector.email,
      fundation: organizationSelector.dateFoundation as Date,
      name: organizationSelector.name,
      members: [
        ...organizationSelector.members.map((e) => e.id),
        userSelector.user.id,
      ],
      games: [...organizationSelector.games.map((e) => e.id)],
    };
    try {
      await organizationService.create(organization);
      setLoading(false);
      dispatch({ type: 'SHOW_SUCCESS', payload: true });
    } catch (_) {
      setLoading(false);
      setError(true);
    }
  };

  const showGamesForm = (): void => {
    dispatch({ type: 'SHOW_GAMES_REGISTER', payload: true });
  };

  if (!loading) {
    return (
      <div className="organization-container__confirmation">
        <h2>Confirmación</h2>
        <p>Estás a un click de crear tu organización</p>
        <button onClick={createOrganization} type="button">
          Crear organización
        </button>
        <button className="btn-return" onClick={showGamesForm} type="button">
          Regresar
        </button>

        {error && (
          <p>
            {' '}
            Hubo un error al crear su organización, por favor vuelva a
            intentarlo
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="organization-container__confirmation-loading">
      <LoadingSpinner />
      <p>Cargando...</p>
    </div>
  );
};

export default NewOrganizationConfirmation;
