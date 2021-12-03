/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IContentBlock } from "../../../types/content/IContentBlock";
import { IImage } from "../../../types/content/IImage";
import { IRichTextField } from "../../../types/content/IRichTextField";
import { CMS_CONTENT_TYPES } from "../../../types/contentful/cmsContentTypes.enum";
import RichTextField from "../RichTextField/RichTextField";
import Image from "../UI/Image/Image";

type Props = {
  blocks: IContentBlock[];
};

const CMSContent: React.FC<Props> = ({ blocks }) => {
  return (
    <section
      sx={{
        p: [3, , , 0],
        pt: [4, 4, 4, 4],
        pb: [4, 4, 4, 4],
        overflowX: "hidden",
        maxWidth: "1100px",
        m: "0 auto",
      }}
    >
      {blocks.map((block, key) => {
        switch (block.type) {
          case CMS_CONTENT_TYPES.CONTENT_BLOCK: {
            const value = block.value as IRichTextField[];
            return <RichTextField block={value} />;
          }
          case CMS_CONTENT_TYPES.START_TEXT:
            break;
          case CMS_CONTENT_TYPES.HERO_IMAGE:
          case CMS_CONTENT_TYPES.CONTENT_IMAGE:
            return <Image key={key} image={block.value as IImage} />;
          default:
            break;
        }
      })}
    </section>
  );
};

export default CMSContent;
