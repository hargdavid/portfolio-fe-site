//@ts-ignore
import { getEntryById } from "../../integrations/api/contentful/entryById";
import { IList } from "../../types/content/IList";
import { IListItem } from "../../types/content/IListItem";
import { IRichTextField } from "../../types/content/IRichTextField";
import { CMS_CONTENT_TYPES } from "../../types/contentful/cmsContentTypes.enum";
import { mapEntryToListEl } from "./mapEntryToListEl";

export const mapList = async (
  list: IRichTextField[],
  listTitle: IRichTextField,
  showList: IRichTextField
): Promise<IList> => {
  if (list.length === 0) {
    return;
  }
  const listElements: IListItem[] = await Promise.all(
    list.map(async (listEl) => {
      //@ts-ignore
      if (listEl.nodeType === CMS_CONTENT_TYPES.EMBEDDED_ENTRY_BLOCK) {
        //@ts-ignore
        const entry = await getEntryById(listEl.data.target.sys.id);
        return mapEntryToListEl(entry);
      } else {
        Promise.resolve();
      }
    })
  );

  return {
    title: listTitle.value,
    show: showList.value as unknown as boolean,
    items: listElements,
  };
};
