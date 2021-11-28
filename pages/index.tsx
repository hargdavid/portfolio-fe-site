/** @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import { getBlogPost } from "../integrations/api/contentful/blogPost";
import { INavigation } from "../types/content/INavigation";
import { getNavigation } from "../integrations/api/contentful/navigation";
import { IBlogPostPage } from "../types/content/IBlogPostPage";
import { getInformation } from "../integrations/api/contentful/information";
import { IGeneralInformation } from "../types/content/IGeneralInformation";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import React from "react";
import CMSContent from "../src/components/CMSContent/CMSContent";

type Props = {
  pageContent: IBlogPostPage;
  navigation: INavigation;
  information: IGeneralInformation;
};

const StartPage: React.FC<Props> = ({
  pageContent,
  navigation,
  information,
}) => {
  const { favicon } = information;
  const { title, description } = pageContent;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type={favicon.type} href={favicon.url} />
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navigation={navigation} information={information}>
        <CMSContent pageContent={pageContent} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const pageContent: IBlogPostPage = await getBlogPost("my-first-blog-post"); //TODO change
  const navigation: INavigation = await getNavigation();
  const information: IGeneralInformation = await getInformation();
  return {
    props: {
      pageContent,
      navigation,
      information,
    },
  };
};

export default StartPage;
