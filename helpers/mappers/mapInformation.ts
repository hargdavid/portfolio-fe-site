import { IGeneralInformation } from "../../types/content/IGeneralInformation";
import { CMS_CONTENT_TYPES } from "../../types/contentful/cmsContentTypes.enum";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { emptyGeneralInformation } from "../../__data__/emptyGeneralInformation";
import { mapImage } from "./mapImage";

export const mapInformation = (
  data: IContentfulResponse
): IGeneralInformation => {
  const generalInformation: IGeneralInformation = emptyGeneralInformation;
  const { fields } = data.items[0];
  Object.keys(fields).map((fieldType) => {
    switch (fieldType) {
      case CMS_CONTENT_TYPES.FACEBOOK:
      case CMS_CONTENT_TYPES.INSTAGRAM:
        generalInformation.social[fieldType] = fields[fieldType];
        break;
      case CMS_CONTENT_TYPES.FAVICON:
      case CMS_CONTENT_TYPES.LOGO:
        generalInformation[fieldType] = mapImage(
          fields,
          data.includes,
          fieldType
        );
        break;
      default:
        generalInformation[fieldType] = fields[fieldType];
        break;
    }
  });

  return generalInformation;
};
