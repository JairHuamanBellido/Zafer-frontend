import { User } from '../User/User';

export type NotificationType = 'organization-request' | 'friend-request';

export interface InvitationNotification {
  message: string;
  code: string;
  transmitter: User;
  id: string;
  notificationType: NotificationType;
}
