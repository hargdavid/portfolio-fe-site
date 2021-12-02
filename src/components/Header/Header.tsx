/** @jsxRuntime classic **/
/** @jsx jsx */
import Link from "next/link";
import React from "react";
import { jsx } from "theme-ui";
import { IImage } from "../../../types/content/IImage";
import { INavigation } from "../../../types/content/INavigation";
import Navigation from "../Navigation/Navigation";

type Props = {
  navigation: INavigation;
  logo: IImage;
};

const Header: React.FC<Props> = ({ navigation, logo }) => {
  return (
    <header
      sx={{
        p: 3,
        backgroundColor: "light",
        boxShadow: "1px -8px 11px 8px rgb(0 0 0 / 30%)",
        position: "fixed",
        width: "100%",
        zIndex: 2,
      }}
    >
      <div
        sx={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <a href="/">
            <img
              alt={logo.title}
              src={logo.url}
              sx={{
                height: "75px",
                p: 1,
              }}
            />
          </a>
        </Link>

        <Navigation navigation={navigation} />
      </div>
    </header>
  );
};

export default Header;
