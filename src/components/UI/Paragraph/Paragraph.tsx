/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Paragraph: React.FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

export default Paragraph;
