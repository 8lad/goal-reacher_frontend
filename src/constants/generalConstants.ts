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

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

export enum TitleType {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum TextAlignType {
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextFontWeight {
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
}

export enum VideoBoxTypes {
  TOP_LEFT = 'topLeft',
  TOP_CENTER = 'topCenter',
  TOP_RIGHT = 'topRight',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_CENTER = 'bottomCenter',
  BOTTOM_RIGHT = 'bottomRight',
}
