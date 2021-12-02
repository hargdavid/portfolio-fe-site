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
  const renderFooterElement = () => (
    <>
      <p sx={{ fontWeight: "semibold", m: 0, fontFamily: "mono" }}>{title}</p>
      <p sx={{ mt: 1, fontFamily: "mono" }}>{text}</p>
    </>
  );

  return (
    <>
      {title.length > 0 && (
        <li sx={{ variant: "footer.listItem" }}>
          {link ? (
            <a href={link}>{renderFooterElement()}</a>
          ) : (
            renderFooterElement()
          )}
        </li>
      )}
    </>
  );
};

export default FooterElement;
