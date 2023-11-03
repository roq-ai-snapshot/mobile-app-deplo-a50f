import { TestInterface } from 'interfaces/test';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface DeploymentInterface {
  id?: string;
  deployment_name: string;
  deployment_version: string;
  deployment_status: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  test?: TestInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    test?: number;
  };
}

export interface DeploymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  deployment_name?: string;
  deployment_version?: string;
  deployment_status?: string;
  user_id?: string;
  company_id?: string;
}
