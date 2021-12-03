/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IGeneralInformation } from "../../../types/content/IGeneralInformation";
import { INavigation } from "../../../types/content/INavigation";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  navigation: INavigation;
  children: React.ReactNode;
  information: IGeneralInformation;
};

const Layout: React.FC<Props> = ({ navigation, children, information }) => {
  const { logo } = information;
  return (
    <>
      <Header logo={logo} navigation={navigation} />
      <div sx={{ height: "114px" }} />
      <main sx={{ overflowX: "hidden" }}>{children}</main>
      <Footer information={information} />
    </>
  );
};

export default Layout;
