import type { IFormElement } from "./project.interface";

export interface IFormTab {
  type: "tab";
  todo?: string;
  id: string;
  title: string;
  tabs: {
    id: string;
    title: string;
    elements: IFormElement[];
  }[];
}