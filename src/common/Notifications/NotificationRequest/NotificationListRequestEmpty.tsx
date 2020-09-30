import React from 'react';
import InvitationEmptyIcon from '../../Icons/InvitationsEmptyIcon';

const NotificationEmptyList: React.FC = () => {
  return (
    <div className="headerbar__notification__empty-list">
      <InvitationEmptyIcon width={32} height={32} color="#ffffff" />
      <p>No hay notificaicones</p>
    </div>
  );
};

export default NotificationEmptyList;
