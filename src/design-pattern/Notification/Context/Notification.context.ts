import { INotificationStrategy } from '../Interface/INotification.interface';
import { Notification } from '../Model/Notification';

export class NotificationContext {
  private strategy: INotificationStrategy;

  constructor(strategy: INotificationStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: INotificationStrategy) {
    this.strategy = strategy;
  }

  public sendNotification(notification: Notification): void {
    this.strategy.sendNotification(notification);
  }
}
