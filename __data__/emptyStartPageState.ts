import { IStartPage } from "../types/content/IStartPage";
import { emptyBasePageState } from "./emptyBasePageState";
import { emptyImageState } from "./emptyImageState";

export const emptyStartPageState: IStartPage = {
  ...emptyBasePageState,
  heroComponent: {
    title: "",
    image: emptyImageState,
  },
};
