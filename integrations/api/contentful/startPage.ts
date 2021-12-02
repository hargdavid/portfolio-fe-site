import { IBlogPostPage } from "../../../types/content/IBlogPostPage";
import { getEntries } from "./entries";
import { mapBlogPostResult } from "../../../helpers/mappers/mapBlogPostResult";

export const getStartPage = async (): Promise<IBlogPostPage> => {
  const res = await getEntries("startpage", "start");

  if (res.items.length > 0) {
    return mapBlogPostResult(res, "Start");
  } else {
    return {
      title: "Start",
      description: "",
      blocks: [],
    };
  }
};
