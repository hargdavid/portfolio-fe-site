import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { INavigation } from "../../types/content/INavigation";

export const mapNavigation = (data: IContentfulResponse): INavigation => {
  const links = data.items.map((item) => {
    const { title, link, external } = item.fields;
    return {
      name: title,
      link: link,
      external: external,
    };
  });

  return { links: links };
};
