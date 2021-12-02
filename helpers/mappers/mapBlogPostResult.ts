import { IBlogPostPage } from "../../types/content/IBlogPostPage";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { mapFields } from "./mapFields";

export const mapBlogPostResult = (
  data: IContentfulResponse,
  slug = "HomePage"
): IBlogPostPage => {
  const blocks = mapFields(data.items[0].fields, data.includes);
  const pageTitle = blocks.find((block) => block.type === "title");

  return {
    title: (pageTitle?.value as string) ?? slug,
    description: "",
    blocks: blocks,
  };
};
