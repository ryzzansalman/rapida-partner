import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { birthday } from "../inputs/birthday.form-element";
import { personName } from "../inputs/names/personName.form-element";
import { gender } from "../selects/gender.form-element";

export const personTab: IFormTab = {
  type: "tab",
  id: "personTab",
  tabs: [{
    id: "personMainDataTab",
    title: "Dados principais",
    elements: [personName, gender, birthday]
  }]
};