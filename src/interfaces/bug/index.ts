import { UserInterface } from 'interfaces/user';
import { TestInterface } from 'interfaces/test';
import { GetQueryInterface } from 'interfaces';

export interface BugInterface {
  id?: string;
  bug_name: string;
  bug_status: string;
  user_id: string;
  test_id: string;
  bug_description?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  test?: TestInterface;
  _count?: {};
}

export interface BugGetQueryInterface extends GetQueryInterface {
  id?: string;
  bug_name?: string;
  bug_status?: string;
  user_id?: string;
  test_id?: string;
  bug_description?: string;
}
