/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading2: React.FC<Props> = ({ text }) => {
  return <h2 sx={{ variant: "styles.h2", fontFamily: "mono" }}>{text}</h2>;
};

export default Heading2;
