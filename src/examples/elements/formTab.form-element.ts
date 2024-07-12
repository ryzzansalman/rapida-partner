import type { IFormTab } from "../../interfaces/form-tab.interface";
import { formElements } from "./formElements.form-element";
import { formId } from "./formId.form-element";
import { formTitle } from "./formTitle.form-element";

export const formTab: IFormTab = {
  type: "tab",
  id: "formTab",
  tabs: [
    {
      id: "mainTab",
      title: "Dados principais",
      elements: [formId, formTitle],
    },
    {
      id: "elementsTab",
      title: "Elementos",
      elements: [formElements],
    },
  ],
};