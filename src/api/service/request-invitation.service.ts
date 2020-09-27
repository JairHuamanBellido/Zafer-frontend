import { InvitationNotification } from '../models/InvitationNotification/InvitationNotification';
import http from '../http';

class RequestInvitationService {
  getAll = async (): Promise<InvitationNotification[]> => {
    return http
      .get<InvitationNotification[]>('request-invitations')
      .then((res) => res.data);
  };
}

export default new RequestInvitationService();
