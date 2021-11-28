import { IContentfulResponse } from "../../../types/contentful/IContentfulResponse";
import { INavigation } from "../../../types/content/INavigation";
import { getEntries } from "./entries";
import { mapNavigation } from "../../../helpers/mappers/mapNavigation";

export const getNavigation = async (): Promise<INavigation> => {
  const res: IContentfulResponse = await getEntries("navigation");
  if (res.items.length > 0) {
    return mapNavigation(res);
  } else {
    return {
      links: [],
    };
  }
};
