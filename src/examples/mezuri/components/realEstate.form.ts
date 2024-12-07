import type { IForm } from "../../../interfaces/project.interface";
import { realEstateTab } from "../elements/form/realEstateTab.element";

export const realEstateForm: IForm = {
  id: "realEstateForm",
  title: "Gerenciamento de imóvel",
  guards: "isAuthorized",
  elements: [realEstateTab]
};