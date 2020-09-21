import { MessageConfirmation } from '../models/MessageConfirmation';
import { CreateOrganization } from '../models/Organization/Organization';
import http from '../http';

class OrganizationService {
  async create(organization: CreateOrganization): Promise<MessageConfirmation> {
    return http
      .post<MessageConfirmation>('organizations', organization)
      .then((res) => res.data);
  }
}

export default new OrganizationService();
