/** @jsxRuntime classic **/
/** @jsx jsx */
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { jsx } from "theme-ui";
import { basePageInformation } from "../../integrations/api/contentful/basePageInformation";
import { getBlogPost } from "../../integrations/api/contentful/blogPost";
import CMSContent from "../../src/components/CMSContent/CMSContent";
import Layout from "../../src/components/Layout/Layout";
import { IBlogPostPage } from "../../types/content/IBlogPostPage";
import { IGeneralInformation } from "../../types/content/IGeneralInformation";
import { INavigation } from "../../types/content/INavigation";

type Props = {
  pageContent: IBlogPostPage;
  navigation: INavigation;
  information: IGeneralInformation;
};

const Contact: React.FC<Props> = ({ pageContent, navigation, information }) => {
  const { favicon } = information;
  const { title, description, blocks } = pageContent;
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
        <CMSContent blocks={blocks} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const router = useRouter();
  const { friendlyName } = router.query;
  console.log(friendlyName);
  const pageContent: IBlogPostPage = await getBlogPost("my-first-blog-post"); //TODO change
  const { navigation, information } = await basePageInformation();
  return {
    props: {
      pageContent,
      navigation,
      information,
    },
  };
};

export default Contact;
