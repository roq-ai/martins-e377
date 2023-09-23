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
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Martins',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'View restaurant reviews', 'Place an order'],
  ownerAbilities: [
    'Manage the restaurant information',
    "Manage the restaurant's menu",
    'View and manage orders',
    'View and respond to reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3aca2943-efe5-42b9-acca-bf0b37bfbe0f',
};
