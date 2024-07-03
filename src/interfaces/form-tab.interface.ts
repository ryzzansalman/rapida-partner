import { IFormElement } from "./project.interface";

export interface FormTab {
  type: "tab";
  todo?: string;
  id: string;
  tabs: {
    id: string;
    title: string;
    elements: IFormElement[];
  }[];
}