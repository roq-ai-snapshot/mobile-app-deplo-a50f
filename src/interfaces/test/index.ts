import { BugInterface } from 'interfaces/bug';
import { UserInterface } from 'interfaces/user';
import { DeploymentInterface } from 'interfaces/deployment';
import { GetQueryInterface } from 'interfaces';

export interface TestInterface {
  id?: string;
  test_name: string;
  test_result: string;
  user_id: string;
  deployment_id: string;
  test_status: string;
  created_at?: any;
  updated_at?: any;
  bug?: BugInterface[];
  user?: UserInterface;
  deployment?: DeploymentInterface;
  _count?: {
    bug?: number;
  };
}

export interface TestGetQueryInterface extends GetQueryInterface {
  id?: string;
  test_name?: string;
  test_result?: string;
  user_id?: string;
  deployment_id?: string;
  test_status?: string;
}
