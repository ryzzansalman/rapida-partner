import type { IForm } from "../../../interfaces/project.interface";
import { artistCompanyTab } from "../elements/form/artistCompanyTab.element";

export const artistCompanyForm: IForm = {
  componentType: "form",
  id: "artistForm",
  title: "Artista",
  elements: [
    artistCompanyTab
  ]
};