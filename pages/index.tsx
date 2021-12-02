/** @jsxRuntime classic **/
/** @jsx jsx */
import { jsx } from "theme-ui";
import { INavigation } from "../types/content/INavigation";
import { IBlogPostPage } from "../types/content/IBlogPostPage";
import { IGeneralInformation } from "../types/content/IGeneralInformation";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import React, { useEffect } from "react";
import CMSContent from "../src/components/CMSContent/CMSContent";
import { basePageInformation } from "../integrations/api/contentful/basePageInformation";
import { getStartPage } from "../integrations/api/contentful/startPage";

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

  console.log("pageContent", pageContent.blocks);

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
  const pageContent: IBlogPostPage = await getStartPage();
  const { navigation, information } = await basePageInformation();
  return {
    props: {
      pageContent,
      navigation,
      information,
    },
  };
};

export default StartPage;
