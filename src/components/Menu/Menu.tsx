/** @jsxRuntime classic **/
/** @jsx jsx */
import React, { useState } from "react";
import { Close, jsx } from "theme-ui";
import { INavigation } from "../../../types/content/INavigation";
import NavItem from "../NavItem/NavItem";

type Props = { navigation: INavigation };

export const Menu: React.FC<Props> = ({ navigation }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        sx={{
          border: "none",
          background: "none",
          fontFamily: "sans",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "primary",
          fontWeight: "bold",
          fontSize: 1,
        }}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {open && (
        <nav
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexFlow: "column",
            p: 4,
            pt: 4,
            zIndex: 10,
            backgroundColor: "white",
          }}
        >
          <div
            sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Close
              sx={{
                m: 2,
                cursor: "pointer",
                color: "black",
                height: 8,
                width: 8,
              }}
              onClick={() => setOpen(false)}
            />
          </div>

          {navigation.links.map((navItem, key) => (
            <NavItem key={key} item={navItem} />
          ))}
        </nav>
      )}
    </>
  );
};

export default Menu;
