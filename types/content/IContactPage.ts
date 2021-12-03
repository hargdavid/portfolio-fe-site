import { IRichTextField } from "./IRichTextField";

export interface IContactPage {
  title: string;
  information: IRichTextField[];
  location: {
    lat: number;
    lon: number;
  };
  address: string;
  mail: string;
  phone: string;
}
