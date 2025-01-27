import type { IFormElement } from "./project.interface";

export interface IFormTab {
  type: "tab";
  todo?: string;
  id: string;
  tabs: {
    id: string;
    title: string;
    elements: IFormElement[];
  }[];
}