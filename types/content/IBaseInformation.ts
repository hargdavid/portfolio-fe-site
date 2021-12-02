import { IGeneralInformation } from "./IGeneralInformation";
import { INavigation } from "./INavigation";

export interface IBaseInformation {
  navigation: INavigation;
  information: IGeneralInformation;
}
