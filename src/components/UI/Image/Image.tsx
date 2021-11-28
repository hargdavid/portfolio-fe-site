/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IImage } from "../../../../types/content/IImage";

type Props = {
  image: IImage;
};

const Image: React.FC<Props> = ({ image }) => {
  const { url, title } = image;
  return <img sx={{ maxWidth: "100%" }} alt={title} src={url} />;
};

export default Image;
