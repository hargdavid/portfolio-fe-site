/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading4: React.FC<Props> = ({ text }) => {
  return <h4 sx={{ variant: "styles.h4", fontFamily: "mono" }}>{text}</h4>;
};

export default Heading4;
