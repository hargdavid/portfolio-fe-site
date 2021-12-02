/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

type Props = {
  elements: string[];
  ordered?: boolean;
};

const List: React.FC<Props> = ({ elements, ordered }) => {
  const renderList = () =>
    elements.map((el, key) => (
      <li sx={{ mb: 2 }} key={key}>
        {el}
      </li>
    ));
  return (
    <>
      {ordered ? (
        <ol sx={{ pl: 3, ml: 2 }}>{renderList()}</ol>
      ) : (
        <ul sx={{ pl: 3, ml: 2 }}>{renderList()}</ul>
      )}
    </>
  );
};

export default List;
