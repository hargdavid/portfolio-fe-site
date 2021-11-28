import { IImage } from "./IImage";
import { IRichTextField } from "./IRichTextField";

export interface IContentBlock {
  type: string;
  value: string | IRichTextField[] | IImage;
}
