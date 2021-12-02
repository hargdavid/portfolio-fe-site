/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const SecondaryHeading: React.FC<Props> = ({ text }) => {
  return <h4 sx={{ fontFamily: "mono", fontSize: 2, m: 0, mb: 3 }}>{text}</h4>;
};

export default SecondaryHeading;
