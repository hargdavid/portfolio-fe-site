import { IImage } from "./IImage";

export interface IGeneralInformation {
  description: string;
  logo: IImage;
  favicon: IImage;
  address: string;
  mail: string;
  social: {
    facebook: string;
    instagram: string;
  };
  author: string;
}
