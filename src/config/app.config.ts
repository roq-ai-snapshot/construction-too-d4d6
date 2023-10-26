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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Outlet Manager', 'Sales Associate'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Update own user information',
    'Read supplier information',
    'Create a new supplier',
  ],
  ownerAbilities: ['Manage user information', 'Manage supplier information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8156e277-d104-49e4-85c5-433221adbe07',
};
