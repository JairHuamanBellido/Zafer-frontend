import { InvitationNotification } from '../../api/models/InvitationNotification/InvitationNotification';
import { NotificationInviteActions } from '../actions/notification-invite.action';

export interface NotificationInviteState {
  notifications: InvitationNotification[];
}

const notificationInviteState: NotificationInviteState = {
  notifications: [],
};

export const notificationInviteReducer = (
  state = notificationInviteState,
  action: NotificationInviteActions,
): NotificationInviteState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'ADD_NOTIFICATIONS':
      return {
        ...state,
        notifications: [...state.notifications, ...action.payload],
      };
    default:
      return state;
  }
};
