/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IImage } from "../../../types";

type Props = {
  image: IImage;
  title: string;
  subTitle: string;
};

const Hero: React.FC<Props> = ({ image, title, subTitle }) => {
  return (
    <div
      sx={{
        width: "100%",
        paddingBottom: "50%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}
        src={image.src}
        alt={image.alt}
      />
      <div sx={{ position: "absolute", bottom: 0, left: 0, p: 3 }}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Hero;
