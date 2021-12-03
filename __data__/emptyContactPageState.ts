import { IContactPage } from "../types/content/IContactPage";

export const emptyContactPageState: IContactPage = {
  title: "",
  information: [],
  location: {
    lat: 0,
    lon: 0,
  },
  address: "",
  mail: "",
  phone: "",
};
