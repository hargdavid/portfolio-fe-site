/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { INavigationObj } from "../../../types/content/INavigation";

type Props = { item: INavigationObj };

export const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <a
      sx={{
        display: "block",
        color: "primary",
        textDecoration: "none",
        fontFamily: "mono",
        fontSize: 3,
        pb: 2,
        pt: 2,
      }}
      href={item.link}
    >
      {item.name}
    </a>
  );
};

export default NavItem;
