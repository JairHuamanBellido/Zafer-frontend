import React, { useState } from 'react';
import { InvitationNotification } from '../../../api/models/InvitationNotification/InvitationNotification';
import requestInvitationService from '../../../api/service/request-invitation.service';

interface Props {
  notification: InvitationNotification;
}

const NotificationItem: React.FC<Props> = ({ notification }) => {
  // Hooks
  const [confirmation, setConfirmacion] = useState<boolean>(false);
  const [messageConfirmation, setMessageConfirmation] = useState<string>('');

  const AcceptRequest = async (): Promise<void> => {
    setConfirmacion(true);
    setMessageConfirmation('La invitación ha sido aceptada');
    try {
      await requestInvitationService.updateNotification(notification.id, { accept: true });
    } catch (_) {
      setConfirmacion(false);
    }
  };

  const RejectRequest = async (): Promise<void> => {
    setConfirmacion(true);
    setMessageConfirmation('La invitación ha sido rechazada');
    try {
      await requestInvitationService.updateNotification(notification.id, { accept: false });
      setConfirmacion(true);
    } catch (_) {
      setConfirmacion(false);
    }
  };

  return (
    <div className="headerbar__notification">
      <div className="headerbar__notification__avatar">
        <img src={notification.transmitter.avatar} alt={notification.transmitter.name} />
      </div>
      {confirmation ? (
        <div className="headerbar__notification__description">
          <p> {messageConfirmation}</p>
        </div>
      ) : (
        <div className="headerbar__notification__description">
          <p> {notification.message}</p>
          <div className="headerbar__notification__buttons">
            <button onClick={AcceptRequest} type="button">
              Aceptar
            </button>
            <button className="reject" onClick={RejectRequest} type="button">
              Rechazar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
