import { IBlogPostPage } from "../../types/content/IBlogPostPage";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { mapFields } from "./mapFields";

export const mapBlogPostResult = (data: IContentfulResponse): IBlogPostPage => {
  const blocks = mapFields(data.items[0].fields, data.includes);
  const pageTitle = blocks.find((block) => block.type === "title");

  return {
    title: pageTitle.value as string,
    description: "",
    blocks: blocks,
  };
};
