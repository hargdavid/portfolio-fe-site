/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Paragraph from "../Paragraph/Paragraph";

type Props = {
  title?: string;
  text: string;
  link?: string;
};

const FooterElement: React.FC<Props> = ({ title, text, link }) => {
  return (
    <>
      {text.length > 0 && (
        <li sx={{ variant: "footer.listItem" }}>
          {link ? (
            <a href={link}>
              <Paragraph text={text} />
            </a>
          ) : (
            <>
              <Paragraph text={title} />
              <Paragraph text={text} />
            </>
          )}
        </li>
      )}
    </>
  );
};

export default FooterElement;
