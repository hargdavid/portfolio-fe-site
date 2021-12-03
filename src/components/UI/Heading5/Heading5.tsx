/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading5: React.FC<Props> = ({ text }) => {
  return <h5 sx={{ variant: "styles.h5", fontFamily: "mono" }}>{text}</h5>;
};

export default Heading5;
