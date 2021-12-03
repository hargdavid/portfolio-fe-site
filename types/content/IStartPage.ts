import { IHeroComponent } from "./IHeroComponent";
import { IPageBase } from "./IPageBase";

export interface IStartPage extends IPageBase {
  heroComponent: IHeroComponent;
}
