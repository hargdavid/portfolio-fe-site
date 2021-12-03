import { IListItem } from "./IListItem";

export interface IList {
  title: string;
  show: boolean;
  items: IListItem[];
}
