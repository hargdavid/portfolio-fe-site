import { IBaseInformation } from "../../../types/content/IBaseInformation";
import { IGeneralInformation } from "../../../types/content/IGeneralInformation";
import { INavigation } from "../../../types/content/INavigation";
import { getInformation } from "./information";
import { getNavigation } from "./navigation";

export const basePageInformation = async (): Promise<IBaseInformation> => {
  const navigation: INavigation = await getNavigation();
  const information: IGeneralInformation = await getInformation();

  return {
    navigation,
    information,
  };
};
