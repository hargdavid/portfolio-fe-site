/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IContactPage } from "../../../types/content/IContactPage";
import RichTextField from "../RichTextField/RichTextField";
import Heading1 from "../UI/Heading1/Heading1";

type Props = {
  contact: IContactPage;
};

const ContactSection: React.FC<Props> = ({ contact }) => {
  const { title, address, mail, information, location, phone } = contact;

  return (
    <section
      sx={{ maxWidth: 1140, margin: "0 auto", pr: 3, pl: 3, pt: 4, pb: 4 }}
    >
      <Heading1 text={title} />
      <RichTextField block={information} />

      {/* TODO add some map here if location exist */}

      <div sx={{ display: "flex", flexFlow: "column" }}>
        <ul sx={{ listStyleType: "none", p: 0, m: 0 }}>
          <li sx={{ pb: 2 }}>{address}</li>
          <li sx={{ pb: 2 }}>
            <a sx={{ variant: "styles.a" }} href={`mailto:${mail}`}>
              {mail}
            </a>
          </li>
          <li sx={{ pb: 2 }}>{phone}</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
