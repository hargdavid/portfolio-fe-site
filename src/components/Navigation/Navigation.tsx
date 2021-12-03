/** @jsxRuntime classic **/
/** @jsx jsx */
import Link from "next/link";
import React from "react";
import { jsx } from "theme-ui";
import { isClient } from "../../../helpers/browserCheck";
import { useIsMobile } from "../../../helpers/hooks/useIsMobile";
import { INavigation } from "../../../types/content/INavigation";
import Menu from "../Menu/Menu";

type Props = {
  navigation: INavigation;
};

export const Navigation: React.FC<Props> = ({ navigation }) => {
  const isMobile = useIsMobile();
  const currentPath = isClient ? window.location.pathname : "";

  return (
    <>
      {isMobile ? (
        <Menu navigation={navigation} />
      ) : (
        <nav
          sx={{
            display: "flex",
            width: "100%",
            pl: 3,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {navigation.links.map((linkEl, key) => {
            const { external, link, name } = linkEl;
            const isActive = currentPath === link;
            console.log("isActive", isActive);

            if (isActive) {
              return (
                <p
                  key={key}
                  sx={{
                    variant: "navigation.links",
                    textDecoration: "underline",
                  }}
                >
                  {name}
                </p>
              );
            } else if (external) {
              return (
                <a
                  key={key}
                  href={link}
                  sx={{
                    variant: "navigation.links",
                  }}
                  target="_blank"
                >
                  {name}
                </a>
              );
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
      )}
    </>
  );
};

export default Navigation;
