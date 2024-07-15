import type { IForm } from "../../../interfaces/project.interface";
import { ofmBackofficeCompanyTabs } from "./tabs/ofmBackofficeCompanyTabs.form.element";

export const ofmBackofficeCompanyForm: IForm = {
    id: "ofmBackofficeCompanyForm",
    title: "Gerenciar empresa",
    guards: "isAuthorized",
    elements: [ofmBackofficeCompanyTabs]
}