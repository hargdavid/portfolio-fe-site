import { IGeneralInformation } from "../types/content/IGeneralInformation";
import { emptyImageState } from "./emptyImageState";

export const emptyGeneralInformation: IGeneralInformation = {
  description: "",
  logo: emptyImageState,
  favicon: emptyImageState,
  author: "",
  address: "",
  mail: "",
  social: {
    facebook: "",
    instagram: "",
  },
};
