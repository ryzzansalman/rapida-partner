import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { formElements } from "../arrays/formElements.form-element";
import { formId } from "../inputs/formId.form-element";
import { formTitle } from "../inputs/formTitle.form-element";

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