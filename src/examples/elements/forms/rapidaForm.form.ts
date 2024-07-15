import type { IForm } from "../../../interfaces/project.interface";
import { formTab } from "./tabs/formTab.form-element";

export const rapidaForm: IForm = {
  id: "formForm",
  title: "Gerenciar formulário",
  elements: [
    formTab
  ],
};
