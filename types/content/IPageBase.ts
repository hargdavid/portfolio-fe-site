import { IContentBlock } from "./IContentBlock";

export interface IPageBase {
  title: string;
  description: string;
  blocks: IContentBlock[];
}
