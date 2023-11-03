import { ApplicationInterface } from 'interfaces/application';
import { DeploymentInterface } from 'interfaces/deployment';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  application?: ApplicationInterface[];
  deployment?: DeploymentInterface[];

  _count?: {
    application?: number;
    deployment?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name?: string;
  tenant_id?: string;
}
