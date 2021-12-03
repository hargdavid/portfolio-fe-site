/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IContentBlock } from "../../../types/content/IContentBlock";
import { IImage } from "../../../types/content/IImage";
import { IRichTextField } from "../../../types/content/IRichTextField";
import { CMS_CONTENT_TYPES } from "../../../types/contentful/cmsContentTypes.enum";
import Heading from "../UI/Heading/Heading";
import Image from "../UI/Image/Image";
import Link from "../UI/Link/Link";
import List from "../UI/List/List";
import Paragraph from "../UI/Paragraph/Paragraph";

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
            return (
              <article key={key}>
                {value.map((blockValue, blockKey) => {
                  switch (blockValue.type) {
                    case CMS_CONTENT_TYPES.H1: {
                      return <Heading key={blockKey} text={blockValue.value} />;
                    }
                    case CMS_CONTENT_TYPES.ORDEREDLIST:
                    case CMS_CONTENT_TYPES.UNORDEREDLIST:
                      return (
                        <List
                          key={blockKey}
                          elements={blockValue.value as unknown as string[]}
                          ordered={
                            blockValue.type === CMS_CONTENT_TYPES.ORDEREDLIST
                          }
                        />
                      );
                    case CMS_CONTENT_TYPES.HYPERLINK:
                      return (
                        <Link
                          key={blockKey}
                          href={blockValue.href}
                          value={blockValue.value}
                        />
                      );
                    default: {
                      return (
                        <Paragraph key={blockKey} text={blockValue.value} />
                      );
                    }
                  }
                })}
              </article>
            );
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
