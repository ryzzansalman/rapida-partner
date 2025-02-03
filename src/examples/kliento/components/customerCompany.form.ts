import type { IForm } from "../../../interfaces/project.interface";
import { companyTab } from "../elements/form/companyTab.element";

export const customerCompanyForm: IForm = {
  id: "customerCompanyForm",
  title: "Gerenciamento de pessoa",
  guards: "isAuthorized",
  elements: [companyTab]
};