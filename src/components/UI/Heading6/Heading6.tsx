/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading6: React.FC<Props> = ({ text }) => {
  return <h6 sx={{ variant: "styles.h6", fontFamily: "mono" }}>{text}</h6>;
};

export default Heading6;
