import { Notification } from '../Model/Notification';

export interface INotificationStrategy {
  sendNotification(notification: Notification): void;
}
