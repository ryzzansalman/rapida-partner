import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { formElements } from "../arrays/formElements.form-element";
import { formId } from "../inputs/formId.form-element";
import { formTitle } from "../inputs/formTitle.form-element";

export const formTabs: IFormTab = {
  type: "tab",
  id: "formTabs",
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