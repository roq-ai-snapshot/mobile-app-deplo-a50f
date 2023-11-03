import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  app_name: string;
  app_version: string;
  user_id: string;
  company_id: string;
  app_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  app_name?: string;
  app_version?: string;
  user_id?: string;
  company_id?: string;
  app_status?: string;
}
