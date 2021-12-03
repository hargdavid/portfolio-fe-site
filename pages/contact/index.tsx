/** @jsx jsx */
/** @jsxRuntime classic **/
import Head from "next/head";
import React from "react";
import { jsx } from "theme-ui";
import { basePageInformation } from "../../integrations/api/contentful/basePageInformation";
import { getContactPage } from "../../integrations/api/contentful/contactPage";
import ContactSection from "../../src/components/ContactSection/ContactSection";
import Layout from "../../src/components/Layout/Layout";
import { IContactPage } from "../../types/content/IContactPage";
import { IGeneralInformation } from "../../types/content/IGeneralInformation";
import { INavigation } from "../../types/content/INavigation";

type Props = {
  contactInformation: IContactPage;
  navigation: INavigation;
  information: IGeneralInformation;
};

const Contact: React.FC<Props> = ({
  navigation,
  information,
  contactInformation,
}) => {
  const { favicon } = information;

  return (
    <>
      <Head>
        <title>{contactInformation.title}</title>
        <link rel="icon" type={favicon.type} href={favicon.url} />
        <meta name="description" content={contactInformation.title} />{" "}
        {/* TODO change */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout navigation={navigation} information={information}>
        <ContactSection contact={contactInformation} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const { navigation, information } = await basePageInformation();
  const contactInformation = await getContactPage();
  return {
    props: {
      contactInformation,
      navigation,
      information,
    },
  };
};

export default Contact;
