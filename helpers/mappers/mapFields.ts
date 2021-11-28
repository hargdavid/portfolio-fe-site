import { IContentBlock } from "../../types/content/IContentBlock";
import { CMS_CONTENT_TYPES } from "../../types/contentful/cmsContentTypes.enum";
import { mapImage } from "./mapImage";

export const mapFields = (
  fields: Record<string, any>[],
  includes: Record<string, any>
) => {
  const blocks: IContentBlock[] = [];

  Object.keys(fields).map((field) => {
    switch (field) {
      case CMS_CONTENT_TYPES.CONTENT_BLOCK: {
        const blocksValues = [];
        fields[field].content.map((element) => {
          const blockValue = element.content.map((el) => el.value);
          blocksValues.push({
            type: element.nodeType,
            value: blockValue.toString(),
          });
        });
        blocks.push({
          type: field,
          value: blocksValues,
        });
        break;
      }
      case CMS_CONTENT_TYPES.HERO_IMAGE:
      case CMS_CONTENT_TYPES.LOGO:
      case CMS_CONTENT_TYPES.FAVICON:
      case CMS_CONTENT_TYPES.CONTENT_IMAGE: {
        const image = mapImage(fields, includes, field);
        blocks.push({
          type: field,
          value: image,
        });
        break;
      }
      default:
        blocks.push({ type: field, value: fields[field] });
        break;
    }
  });

  return blocks;
};
