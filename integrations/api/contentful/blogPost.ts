import axios from "axios";
import { createContentfulEndpoint } from "../helpers/createContentfulEndpoint";

export const getBlogPost = async (slug?: string): Promise<any> => {
  const endpoint = createContentfulEndpoint("entries");
  try {
    const result = await axios.get(endpoint, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        "fields.slug": "my first blog post",
        content_type: "blogPost",
      },
    });

    return result.data;
  } catch (error) {
    console.log({ message: error.message || error, error: error });
  }
};
