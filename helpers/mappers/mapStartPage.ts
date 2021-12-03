import { IContentBlock } from "../../types/content/IContentBlock";
import { IHeroComponent } from "../../types/content/IHeroComponent";
import { IStartPage } from "../../types/content/IStartPage";
import { CMS_CONTENT_TYPES } from "../../types/contentful/cmsContentTypes.enum";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { emptyList } from "../../__data__/emptyList";
import { mapFields } from "./mapFields";
import { mapList } from "./mapList";

export const mapStartPage = async (
  data: IContentfulResponse
): Promise<IStartPage> => {
  const mappedFields: IContentBlock[] = mapFields(
    data.items[0].fields,
    data.includes
  );
  const listing = mappedFields.find(
    (field) => field.type === CMS_CONTENT_TYPES.LISTING
  );
  const listTitle = mappedFields.find(
    (field) => field.type === CMS_CONTENT_TYPES.LIST_TITLE
  );
  const showList = mappedFields.find(
    (field) => field.type === CMS_CONTENT_TYPES.SHOWLIST
  );

  //@ts-ignore
  const list = await mapList(listing.value.content, listTitle, showList);
  console.log("list", list);

  const blocks = mappedFields.filter(
    (block) =>
      block.type !== CMS_CONTENT_TYPES.START_TEXT &&
      block.type !== CMS_CONTENT_TYPES.HEADER_IMAGE &&
      block.type !== CMS_CONTENT_TYPES.LISTING &&
      block.type !== CMS_CONTENT_TYPES.LIST_TITLE &&
      block.type !== CMS_CONTENT_TYPES.SHOWLIST
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
    list: emptyList,
  };
};
