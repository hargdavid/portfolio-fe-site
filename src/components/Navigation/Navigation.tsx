/** @jsxRuntime classic **/
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { INavigation } from "../../../types/content/INavigation";
import Link from "next/link";

type Props = {
  navigation: INavigation;
};

export const Navigation: React.FC<Props> = ({ navigation }) => {
  return (
    <nav
      sx={{
        display: "flex",
        width: "100%",
        p: 3,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {navigation.links.map((linkEl, key) => {
        const { external, link, name } = linkEl;
        if (external) {
          <a
            key={key}
            href={link}
            sx={{
              variant: "navigation.links",
            }}
          >
            {name}
          </a>;
        } else {
          return (
            <Link key={key} href={link}>
              <a
                href={link}
                sx={{
                  variant: "navigation.links",
                }}
              >
                {name}
              </a>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
