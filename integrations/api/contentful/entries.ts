import { IContentfulResponse } from "../../../types/contentful/IContentfulResponse";
import axios from "axios";
import { createContentfulEndpoint } from "../helpers/createContentfulEndpoint";

export const getEntries = async (
  contentType: string,
  slug?: string
): Promise<IContentfulResponse> => {
  const endpoint = createContentfulEndpoint("entries");
  try {
    const result = await axios.get(endpoint, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        content_type: contentType,
        "fields.slug": slug,
      },
    });

    return result.data;
  } catch (error) {
    console.log({ message: error.message || error, error: error });
    Promise.reject();
  }
};
