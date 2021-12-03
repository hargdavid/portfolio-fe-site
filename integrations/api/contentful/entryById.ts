import { IContentfulResponse } from "../../../types/contentful/IContentfulResponse";
import axios from "axios";
import { createContentfulEndpoint } from "../helpers/createContentfulEndpoint";

export const getEntryById = async (
  id: string
): Promise<IContentfulResponse> => {
  const endpoint = createContentfulEndpoint("entries");
  try {
    const result = await axios.get(endpoint, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        "sys.id": id,
      },
    });
    return result.data;
  } catch (error) {
    console.log({ message: error.message || error, error: error });
    Promise.reject();
  }
};
