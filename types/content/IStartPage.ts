import { IHeroComponent } from "./IHeroComponent";
import { IImage } from "./IImage";
import { IList } from "./IList";
import { IPageBase } from "./IPageBase";

export interface IStartPage extends IPageBase {
  heroComponent: IHeroComponent;
  list: IList;
}
