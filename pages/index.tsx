/** @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import { getBlogPost } from "../integrations/api/contentful/blogPost";
import { useEffect } from "react";
import { INavigation } from "../types/content/INavigation";
import { getNavigation } from "../integrations/api/contentful/navigation";
import { IBlogPostPage } from "../types/content/IBlogPostPage";
import { getInformation } from "../integrations/api/contentful/information";
import { IGeneralInformation } from "../types/content/IGeneralInformation";

const StartPage = () => {
  useEffect(() => {
    (async () => {
      const res: IBlogPostPage = await getBlogPost("my-first-blog-post");
      const navigation: INavigation = await getNavigation();
      const information: IGeneralInformation = await getInformation();

      console.log(res);
      console.log(information);
    })();
  });

  return (
    <header>
      <div>HEllo</div>
    </header>
  );
};

export default StartPage;
