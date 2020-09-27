import { RequestInvitationEvent } from '../../../api/socket/RequestInvitation.socket';
import { INotificationStrategy } from '../Interface/INotification.interface';
import { Notification } from '../Model/Notification';

export class OrganizationNotificationStrategy implements INotificationStrategy {
  sendNotification = (notification: Notification): void => {
    RequestInvitationEvent.inviteOrganization(notification);
  };
}
