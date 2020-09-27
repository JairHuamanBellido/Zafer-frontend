export type ReceiverInvite = {
  id: string;
  role: string;
};
export interface Notification {
  message: string;
  receivers: ReceiverInvite[];
  transmitterId: string;
  contextNotification: string;
  code: string;
}
