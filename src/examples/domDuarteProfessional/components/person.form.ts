import type { IForm } from "../../../interfaces/project.interface";
import { personTab } from "../elements/form/personTab.element";

export const personForm: IForm = {
  componentType: "form",
  id: "artistForm",
  title: "Artista",
  elements: [
    personTab
  ]
};