const mapping: Record<string, string> = {
  menus: 'menu',
  orders: 'order',
  'order-items': 'order_item',
  restaurants: 'restaurant',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
