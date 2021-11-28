/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IBlogPostPage } from "../../../types/content/IBlogPostPage";
import { IImage } from "../../../types/content/IImage";
import { IRichTextField } from "../../../types/content/IRichTextField";
import { RICH_TEXT_TYPES } from "../../../types/content/richTextTypes.enum";
import { CMS_CONTENT_TYPES } from "../../../types/contentful/cmsContentTypes.enum";
import Heading from "../UI/Heading/Heading";
import Image from "../UI/Image/Image";
import Paragraph from "../UI/Paragraph/Paragraph";

type Props = {
  pageContent: IBlogPostPage;
};

const CMSContent: React.FC<Props> = ({ pageContent }) => {
  return (
    <>
      {pageContent.blocks.map((block, key) => {
        switch (block.type) {
          case CMS_CONTENT_TYPES.CONTENT_BLOCK: {
            const value = block.value as IRichTextField[];
            return value.map((blockValue) => {
              switch (blockValue.type) {
                case RICH_TEXT_TYPES.H1: {
                  return <Heading key={key} text={blockValue.value} />;
                }
                default: {
                  return <Paragraph key={key} text={blockValue.value} />;
                }
              }
            });
          }

          case CMS_CONTENT_TYPES.HERO_IMAGE:
          case CMS_CONTENT_TYPES.CONTENT_IMAGE:
            return <Image key={key} image={block.value as IImage} />;
          default:
            break;
        }
      })}
    </>
  );
};

export default CMSContent;
