import React from "react";
import { IRichTextField } from "../../../types/content/IRichTextField";
import { CMS_CONTENT_TYPES } from "../../../types/contentful/cmsContentTypes.enum";
import Heading1 from "../UI/Heading1/Heading1";
import Heading2 from "../UI/Heading2/Heading2";
import Heading3 from "../UI/Heading3/Heading3";
import Heading4 from "../UI/Heading4/Heading4";
import Heading5 from "../UI/Heading5/Heading5";
import Heading6 from "../UI/Heading6/Heading6";
import Link from "../UI/Link/Link";
import List from "../UI/List/List";
import Paragraph from "../UI/Paragraph/Paragraph";

type Props = {
  block: IRichTextField[];
};

const RichTextField: React.FC<Props> = ({ block }) => {
  return (
    <article>
      {block.map((blockValue, blockKey) => {
        switch (blockValue.type) {
          case CMS_CONTENT_TYPES.H1:
            return <Heading1 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.H2:
            return <Heading2 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.H3:
            return <Heading3 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.H4:
            return <Heading4 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.H5:
            return <Heading5 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.H6:
            return <Heading6 key={blockKey} text={blockValue.value} />;
          case CMS_CONTENT_TYPES.ORDEREDLIST:
          case CMS_CONTENT_TYPES.UNORDEREDLIST:
            return (
              <List
                key={blockKey}
                elements={blockValue.value as unknown as string[]}
                ordered={blockValue.type === CMS_CONTENT_TYPES.ORDEREDLIST}
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
            return <Paragraph key={blockKey} text={blockValue.value} />;
          }
        }
      })}
    </article>
  );
};

export default RichTextField;
