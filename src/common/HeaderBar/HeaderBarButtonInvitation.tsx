import React, { Dispatch, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { InvitationNotification as Notification } from '../../api/models/InvitationNotification/InvitationNotification';
import { RequestInvitationEvent } from '../../api/socket/RequestInvitation.socket';
import { NotificationInviteActions as NotificationActions } from '../../store/actions/notification-invite.action';
import { useVisible } from '../../hooks/useVisible';
import InvitationRequestIcon from '../Icons/InvitationsRequestIcon';
import NotificationListRequest from '../Notifications/NotificationRequest/NotificationListRequest';

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
        <InvitationRequestIcon color={isVisible ? '#33ffaa' : '#ffffff'} width={24} height={24} />
      </div>
      {isVisible && <NotificationListRequest />}
    </div>
  );
};

export default HeaderBarButtonInvitation;
