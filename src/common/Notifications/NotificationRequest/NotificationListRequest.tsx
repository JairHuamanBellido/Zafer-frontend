import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import NotificationListRequestEmpty from './NotificationListRequestEmpty';
import NotificationRequestItem from './NotificationRequestItem';

const NotificationListRequest: React.FC = () => {
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
          <NotificationRequestItem key={notification.id} notification={notification} />
        ))
      ) : (
        <NotificationListRequestEmpty />
      )}
    </div>
  );
};

export default NotificationListRequest;
