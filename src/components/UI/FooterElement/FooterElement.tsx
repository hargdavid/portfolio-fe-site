/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Paragraph from "../Paragraph/Paragraph";

type Props = {
  title: string;
  text?: string;
  link?: string;
};

const FooterElement: React.FC<Props> = ({ title, text, link }) => {
  return (
    <>
      {title.length > 0 && (
        <li sx={{ variant: "footer.listItem" }}>
          {link ? (
            <a href={link}>
              <Paragraph text={title} />
            </a>
          ) : (
            text && (
              <>
                <Paragraph text={title} />
                <Paragraph text={text} />
              </>
            )
          )}
        </li>
      )}
    </>
  );
};

export default FooterElement;
