import type { IForm } from "../../../interfaces/project.interface";
import { formTabs } from "./tabs/formTabs.form-element";

export const rapidaForm: IForm = {
  id: "formForm",
  title: "Gerenciar formulário",
  elements: [
    formTabs
  ],
};
