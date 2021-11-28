/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IGeneralInformation } from "../../../types/content/IGeneralInformation";
import FooterElement from "../UI/FooterElement/FooterElement";
import SecondaryHeading from "../UI/SecondaryHeader/SecondaryHeader";

type Props = {
  information: IGeneralInformation;
};

const Footer: React.FC<Props> = ({ information }) => {
  const {
    author,
    address,
    mail,
    social: { instagram, facebook },
  } = information;
  return (
    <footer
      sx={{
        p: 3,
        backgroundColor: "light",
      }}
    >
      <SecondaryHeading text="Contact" />
      <ul
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
        }}
      >
        <FooterElement title={"Author"} text={author} />
        <FooterElement title={"Address"} text={address} />
        <FooterElement title={"Mail"} text={mail} />
        <FooterElement title={"Instagram"} link={instagram} />
        <FooterElement title={"Facebook"} link={facebook} />
      </ul>
    </footer>
  );
};

export default Footer;
