import { InvitationNotification } from '../../api/models/InvitationNotification/InvitationNotification';

type AddNotification = {
  type: 'ADD_NOTIFICATION';
  payload: InvitationNotification;
};

type AddNotifications = {
  type: 'ADD_NOTIFICATIONS';
  payload: InvitationNotification[];
};

export type NotificationInviteActions = AddNotification | AddNotifications;
