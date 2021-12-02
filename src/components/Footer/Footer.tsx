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
  const { author, address, mail } = information;
  return (
    <footer
      sx={{
        p: 3,
        pt: 4,
        pb: 4,
        backgroundColor: "light",
      }}
    >
      <div sx={{ maxWidth: "1100px", margin: "0 auto" }}>
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
        </ul>

        {author && (
          <p
            sx={{
              fontFamily: "mono",
              fontSize: 0,
              fontStyle: "italic",
              textAlign: "right",
              pt: 4,
            }}
          >
            <span sx={{ mr: 1 }}>©</span>
            {author}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
