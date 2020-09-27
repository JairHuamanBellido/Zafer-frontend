import React, { Dispatch, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CreateOrganization } from '../../api/models/Organization/Organization';
import organizationService from '../../api/service/organization.service';
import LoadingSpinner from '../../common/Loading/SpinnerLoading';
import { NotificationContext } from '../../design-pattern/Notification/Context/Notification.context';
import { Notification } from '../../design-pattern/Notification/Model/Notification';
import { OrganizationNotificationStrategy } from '../../design-pattern/Notification/Strategy/OrganizationNotification.strategy';
import { OrganizationFormActions } from '../../store/actions/organization.action';
import { RootState } from '../../store/store';

const NewOrganizationConfirmation: React.FC = () => {
  // Hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Dispatch
  const dispatch = useDispatch<Dispatch<OrganizationFormActions>>();

  // Selector
  const user = useSelector((state: RootState) => state.userReducer.user);

  const organizationSelector = useSelector(
    (state: RootState) => state.organizationReducer,
    shallowEqual,
  );

  // Events
  const createOrganization = async (): Promise<void> => {
    setLoading(true);
    const organization: CreateOrganization = {
      email: organizationSelector.email,
      fundation: organizationSelector.dateFoundation as Date,
      name: organizationSelector.name,
      members: [user.id],
      guestUsers: [...organizationSelector.members.map((e) => e.id)],
      games: [...organizationSelector.games.map((e) => e.id)],
    };

    try {
      const newOrganization = await organizationService.create(organization);
      setLoading(false);
      notifyAllGuestMembers(newOrganization.id);
      dispatch({ type: 'SHOW_SUCCESS', payload: true });
    } catch (_) {
      setLoading(false);
      setError(true);
    }
  };

  const notifyAllGuestMembers = (organizationId: string): void => {
    const notificationContext = new NotificationContext(
      new OrganizationNotificationStrategy(),
    );

    const notification: Notification = {
      code: organizationId,
      message: 'Únete a mi organización',
      contextNotification: 'invite-organization',
      receivers: Object.keys(organizationSelector.membersById).map((e) => {
        return {
          id: organizationSelector.membersById[e].id,
          role: organizationSelector.membersById[e].role as string,
        };
      }),
      transmitterId: user.id,
    };

    notificationContext.sendNotification(notification);
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
