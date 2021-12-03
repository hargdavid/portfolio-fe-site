/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading3: React.FC<Props> = ({ text }) => {
  return <h3 sx={{ variant: "styles.h3", fontFamily: "mono" }}>{text}</h3>;
};

export default Heading3;
