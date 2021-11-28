import { mapInformation } from "../../../helpers/mappers/mapInformation";
import { IGeneralInformation } from "../../../types/content/IGeneralInformation";
import { emptyGeneralInforamtion } from "../../../__data__/emptyGeneralInformation";
import { getEntries } from "./entries";

export const getInformation = async (): Promise<IGeneralInformation> => {
  const res = await getEntries("information");
  if (res.items.length > 0) {
    return mapInformation(res);
  } else {
    return emptyGeneralInforamtion;
  }
};
