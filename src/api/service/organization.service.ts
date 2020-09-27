import http from '../http';
import {
  CreateOrganization,
  Organization,
} from '../models/Organization/Organization';

class OrganizationService {
  create = async (organization: CreateOrganization): Promise<Organization> => {
    return http
      .post<Organization>('organizations', organization)
      .then((res) => res.data);
  };
}

export default new OrganizationService();
