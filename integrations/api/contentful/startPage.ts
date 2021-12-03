import { getEntries } from "./entries";
import { mapStartPage } from "../../../helpers/mappers/mapStartPage";
import { IStartPage } from "../../../types/content/IStartPage";
import { emptyStartPageState } from "../../../__data__/emptyStartPageState";

export const getStartPage = async (): Promise<IStartPage> => {
  const res = await getEntries("startpage", "start");

  if (res?.items?.length > 0) {
    return mapStartPage(res);
  } else {
    return emptyStartPageState;
  }
};
