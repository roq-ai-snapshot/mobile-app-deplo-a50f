interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Developer', 'Tester'],
  tenantName: 'Company',
  applicationName: 'mobile app deployment management ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read deployment information',
    'Read application information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Manage deployments',
    'Manage applications',
    'Manage tests',
    'Manage bugs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7aa76019-1b79-4ae0-a1b0-40daf886db35',
};
