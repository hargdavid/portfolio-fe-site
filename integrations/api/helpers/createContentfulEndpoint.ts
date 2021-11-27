const CONTENTFULBASEURL = "https://cdn.contentful.com/spaces/";

export const createContentfulEndpoint = (type: string) => {
  return `${CONTENTFULBASEURL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/${type}`;
};
