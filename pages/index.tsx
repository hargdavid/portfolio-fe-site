/** @jsxRuntime classic **/
/** @jsx jsx */
import { useEffect } from "react";
import { jsx } from "theme-ui";
import { mapBlogPostResult } from "../helpers/mappers/mapBlogPostResult";
import { getBlogPost } from "../integrations/api/contentful/blogPost";

const StartPage = () => {
  useEffect(() => {
    (async () => {
      const res = await getBlogPost();
      const mappedData = mapBlogPostResult(res);
    })();
  });

  return (
    <header>
      <div>HEllo</div>
    </header>
  );
};

export default StartPage;
