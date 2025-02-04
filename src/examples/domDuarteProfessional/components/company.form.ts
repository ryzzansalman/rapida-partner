import type { IForm } from "../../../interfaces/project.interface";
import { companyTab } from "../elements/form/companyTab.element";

export const companyForm: IForm = {
  componentType: "form",
  id: "artistForm",
  title: "Artista",
  elements: [
    companyTab
  ]
};