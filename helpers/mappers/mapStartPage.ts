import { IContentBlock } from "../../types/content/IContentBlock";
import { IHeroComponent } from "../../types/content/IHeroComponent";
import { IStartPage } from "../../types/content/IStartPage";
import { CMS_CONTENT_TYPES } from "../../types/contentful/cmsContentTypes.enum";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { mapFields } from "./mapFields";

export const mapStartPage = (data: IContentfulResponse): IStartPage => {
  const mappedFields: IContentBlock[] = mapFields(
    data.items[0].fields,
    data.includes
  );
  const blocks = mappedFields.filter(
    (block) =>
      block.type !== CMS_CONTENT_TYPES.START_TEXT &&
      block.type !== CMS_CONTENT_TYPES.HEADER_IMAGE
  );
  const pageTitle = mappedFields.find(
    (block) => block.type === CMS_CONTENT_TYPES.START_TEXT
  );
  const headerImage = mappedFields.find(
    (block) => block.type === CMS_CONTENT_TYPES.HEADER_IMAGE
  );
  const heroComponent: IHeroComponent = {
    title: pageTitle,
    image: headerImage,
  };
  return {
    title: "Start",
    description: "",
    heroComponent,
    blocks: blocks,
  };
};
