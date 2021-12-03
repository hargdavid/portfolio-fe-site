import { IListItem } from "../../types/content/IListItem";
import { IContentfulResponse } from "../../types/contentful/IContentfulResponse";
import { mapFields } from "./mapFields";

export const mapEntryToListEl = (entry: IContentfulResponse): IListItem => {
  //TODO continue here with the mapping, need to setup fields for listing
  const fields = mapFields(entry.items[0].fields, entry.includes);
  return {
    image: { title: "", type: "", url: "" },
    title: "",
    description: "",
    href: "",
  };
};
