import { IContentBlock } from "./IContentBlock";

export interface IBlogPostPage {
  title: string;
  description: string;
  blocks: IContentBlock[];
}
