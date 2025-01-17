import type { IForm } from "../../../interfaces/project.interface";
import { personTab } from "../elements/form/personTab.element";

export const customerPersonForm: IForm = {
  id: "customerPersonForm",
  title: "Gerenciamento de pessoa",
  guards: "isAuthorized",
  elements: [personTab]
};