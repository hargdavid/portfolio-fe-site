/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Paragraph: React.FC<Props> = ({ text }) => {
  return <p sx={{ fontFamily: "body", fontSize: 1, m: 0, mb: 3 }}>{text}</p>;
};

export default Paragraph;
