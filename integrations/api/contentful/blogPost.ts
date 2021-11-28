import { IBlogPostPage } from "../../../types/content/IBlogPostPage";
import { getEntries } from "./entries";
import { mapBlogPostResult } from "../../../helpers/mappers/mapBlogPostResult";

export const getBlogPost = async (slug = "Home"): Promise<IBlogPostPage> => {
  const res = await getEntries("blogPost", slug);

  if (res.items.length > 0) {
    return mapBlogPostResult(res);
  } else {
    return {
      title: slug,
      description: "",
      blocks: [],
    };
  }
};
