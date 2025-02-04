import type { IForm } from "../../../interfaces/project.interface";
import { artistPersonTab } from "../elements/form/artistPersonTab.element";

export const artistPersonForm: IForm = {
  componentType: "form",
  id: "artistForm",
  title: "Artista",
  elements: [
    artistPersonTab
  ]
};