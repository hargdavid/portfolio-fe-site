/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IHeroComponent } from "../../../types/content/IHeroComponent";
import { IImage } from "../../../types/content/IImage";

type Props = {
  heroComponent: IHeroComponent;
};

export const HeroComponent: React.FC<Props> = ({ heroComponent }) => {
  const image = heroComponent.image.value as IImage;
  const title = heroComponent.title.value;

  return (
    <section
      sx={{
        position: "relative",
        maxHeight: "100%",
        minHeight: "auto",
        display: "block",
      }}
      data-attribute="page-hero"
    >
      <img
        sx={{
          maxWidth: "100%",
          width: "100%",
        }}
        src={image.url}
        alt={image.title}
      />
      <div
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
          height: "calc(100% - 6px)",
        }}
      >
        <h1
          sx={{
            color: "primary",
            m: 0,
            pl: 5,
            pr: 5,
            fontFamily: "mono",
            fontSize: [5, 5, 6, 7],
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroComponent;
