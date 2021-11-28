/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const SecondaryHeading: React.FC<Props> = ({ text }) => {
  return <h4>{text}</h4>;
};

export default SecondaryHeading;
