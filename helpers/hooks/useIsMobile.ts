import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../../constants/breakpoints.enum";
import { isClient } from "../browserCheck";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth < BREAKPOINTS.md);
    }
    if (isClient) {
      (window as Window).addEventListener("resize", () => {
        setIsMobile(window.innerWidth < BREAKPOINTS.md);
      });
      return () => {
        (window as Window).removeEventListener("resize", () => {
          setIsMobile(window.innerWidth < BREAKPOINTS.md);
        });
      };
    }
  }, []);

  return isMobile;
};
