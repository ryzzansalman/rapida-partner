import type { IForm } from "../../../interfaces/project.interface";
import { tagName } from "../elements/form/tagName.element";

export const tagForm: IForm = {
  componentType: "form",
  id: "tagForm",
  title: "Gerenciamento de tag",
  guards: "isAuthorized",
  elements: [tagName],
};