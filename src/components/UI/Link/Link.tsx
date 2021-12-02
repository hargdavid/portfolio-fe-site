/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  href: string;
  value: string;
};

const Link: React.FC<Props> = ({ href, value }) => {
  return (
    <a sx={{ variant: "styles.a" }} href={href}>
      {value}
    </a>
  );
};

export default Link;
