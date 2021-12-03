import { mapFields } from "../../../helpers/mappers/mapFields";
import { IContactPage } from "../../../types/content/IContactPage";
import { IRichTextField } from "../../../types/content/IRichTextField";
import { CMS_CONTENT_TYPES } from "../../../types/contentful/cmsContentTypes.enum";
import { emptyContactPageState } from "../../../__data__/emptyContactPageState";
import { getEntries } from "./entries";

export const getContactPage = async (): Promise<IContactPage> => {
  const res = await getEntries("contact", "contact");
  const pageState = emptyContactPageState;

  if (res?.items?.length > 0) {
    const mappedFields = mapFields(res.items[0].fields, res.includes);
    mappedFields.map((field) => {
      switch (field.type) {
        case CMS_CONTENT_TYPES.CONTENT_BLOCK:
          pageState.information = field.value as IRichTextField[];
          break;
        case CMS_CONTENT_TYPES.TITLE:
        case CMS_CONTENT_TYPES.LOCATION:
        case CMS_CONTENT_TYPES.MAIL:
        case CMS_CONTENT_TYPES.ADDRESS:
        case CMS_CONTENT_TYPES.PHONE:
          pageState[field.type] = field.value as any;
          break;
        default:
          break;
      }
    });
  }
  return pageState;
};
