/** @jsxRuntime classic **/
/** @jsx jsx */
import Head from "next/head";
import React from "react";
import { jsx } from "theme-ui";
import { basePageInformation } from "../integrations/api/contentful/basePageInformation";
import { getStartPage } from "../integrations/api/contentful/startPage";
import CMSContent from "../src/components/CMSContent/CMSContent";
import HeroComponent from "../src/components/HeroComponent/HeroComponent";
import Layout from "../src/components/Layout/Layout";
import { IGeneralInformation } from "../types/content/IGeneralInformation";
import { INavigation } from "../types/content/INavigation";
import { IStartPage } from "../types/content/IStartPage";

type Props = {
  pageContent: IStartPage;
  navigation: INavigation;
  information: IGeneralInformation;
};

const StartPage: React.FC<Props> = ({
  pageContent,
  navigation,
  information,
}) => {
  const { favicon } = information;
  const { title, description, blocks, heroComponent } = pageContent;

  console.log(heroComponent);

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
        <HeroComponent heroComponent={heroComponent} />
        <CMSContent blocks={blocks} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const pageContent: IStartPage = await getStartPage();
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
