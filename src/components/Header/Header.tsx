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
        p: 2,
        display: "flex",
        alignItems: "center",
        backgroundColor: "light",
      }}
    >
      <Link href="/">
        <a href="/">
          <img
            alt={logo.title}
            src={logo.url}
            sx={{
              height: "100px",
              p: 1,
            }}
          />
        </a>
      </Link>

      <Navigation navigation={navigation} />
    </header>
  );
};

export default Header;
