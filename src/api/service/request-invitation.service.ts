import { InvitationNotification } from '../models/InvitationNotification/InvitationNotification';
import http from '../http';
import { MessageConfirmation } from '../models/MessageConfirmation';

class RequestInvitationService {
  getAll = async (): Promise<InvitationNotification[]> => {
    return http.get<InvitationNotification[]>('request-invitations').then((res) => res.data);
  };

  updateNotification = async (
    id: string,
    body: { accept: boolean },
  ): Promise<MessageConfirmation> => {
    return http
      .patch<MessageConfirmation>(`request-invitations/organization/${id}`, body)
      .then((res) => res.data);
  };
}

export default new RequestInvitationService();
