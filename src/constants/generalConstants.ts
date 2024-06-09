export enum APIEndpoints {
  Register = '/users',
  Login = '/users-login',
  Logout = '/users-logout',
  DeleteUser = '/users-delete',
  UpdateUser = '/users-update',
  Goals = '/goals',
  Categories = '/categories',
}

export enum Routes {
  Home = '/',
  Goals = '/goals',
  SingleGoal = '/goal',
  UserPage = '/user',
  Login = '/login',
  Motivation = '/motivation',
}

export const naviationLinks = [
  {
    text: 'Home',
    path: Routes.Home,
  },
  {
    text: 'Goals',
    path: Routes.Goals,
  },
  {
    text: 'Motivation',
    path: Routes.Motivation,
  },
];
