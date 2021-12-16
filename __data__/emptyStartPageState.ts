import { IStartPage } from "../types/content/IStartPage";
import { emptyBasePageState } from "./emptyBasePageState";
import { emptyContentBlock } from "./emptyContentBlock";
import { emptyList } from "./emptyList";

export const emptyStartPageState: IStartPage = {
  ...emptyBasePageState,
  heroComponent: {
    title: emptyContentBlock,
    image: emptyContentBlock,
  },
  list: emptyList,
};
