import React, { Dispatch, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { InvitationNotification as Notification } from '../../api/models/InvitationNotification/InvitationNotification';
import { RequestInvitationEvent } from '../../api/socket/RequestInvitation.socket';
import { NotificationInviteActions as NotificationActions } from '../../store/actions/notification-invite.action';
import { RootState } from '../../store/store';
import { useVisible } from '../CustomHook/useVisible';
import InvitationEmptyIcon from '../Icons/InvitationsEmptyIcon';
import InvitationRequestIcon from '../Icons/InvitationsRequestIcon';

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <div className="headerbar__notification">
      <div className="headerbar__notification__avatar">
        <img
          src={notification.transmitter.avatar}
          alt={notification.transmitter.name}
        />
      </div>
      <div className="headerbar__notification__description">
        <p> {notification.message}</p>
      </div>
    </div>
  );
};

const NotifcationEmptyList: React.FC = () => {
  return (
    <div className="headerbar__notification__empty-list">
      <InvitationEmptyIcon width={32} height={32} color="#ffffff" />
      <p>No hay notificaicones</p>
    </div>
  );
};

const NotificationsList: React.FC = () => {
  const notifications = useSelector(
    (state: RootState) => state.notificationInviteReducer.notifications,
    shallowEqual,
  );

  return (
    <div className="headerbar__notifications-container">
      <div className="headerbar__notifications-container__header">
        <h3>Invitaciones</h3>
      </div>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))
      ) : (
        <NotifcationEmptyList />
      )}
    </div>
  );
};

const HeaderBarButtonInvitation: React.FC = () => {
  // Hooks
  const { ref, isVisible, setIsVisible } = useVisible(false);

  // Dispatch
  const notificationDispatch = useDispatch<Dispatch<NotificationActions>>();

  // Events
  const onNotificationReceived = useCallback(
    async (notification: Notification) => {
      notificationDispatch({ type: 'ADD_NOTIFICATION', payload: notification });
    },
    [notificationDispatch],
  );

  const toggleNotificationList = (): void => {
    setIsVisible(!isVisible);
  };

  // Effects
  useEffect(() => {
    RequestInvitationEvent.socket.on('organization', onNotificationReceived);
  }, [onNotificationReceived]);

  return (
    <div ref={ref} className="headerbar__icon-container">
      <div className="headerbar__icon" onClickCapture={toggleNotificationList}>
        <InvitationRequestIcon
          color={isVisible ? '#33ffaa' : '#ffffff'}
          width={24}
          height={24}
        />
      </div>
      {isVisible && <NotificationsList />}
    </div>
  );
};

export default HeaderBarButtonInvitation;
