export interface INavigation {
  links: INavigationObj[];
}

export interface INavigationObj {
  name: string;
  link: string;
  external: boolean;
}
