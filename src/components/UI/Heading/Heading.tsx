/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  text: string;
};

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <h1 sx={{ fontFamily: "mono", fontSize: [5, , 7], m: 0, mb: [1, , , 2] }}>
      {text}
    </h1>
  );
};

export default Heading;
