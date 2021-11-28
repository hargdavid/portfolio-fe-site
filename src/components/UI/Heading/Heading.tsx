/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading: React.FC<Props> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Heading;
