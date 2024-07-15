import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { cnpj } from "../inputs/cnpj.form-element";
import { ssoClientId } from "../inputs/ids/ssoClientId.form-element";
import { ssoTenantId } from "../inputs/ids/ssoTenantId.form-element";
import { companyName } from "../inputs/names/companyName.form-element";
import { ssoName } from "../inputs/names/ssoName.form-element";

const newCompanyName = {  ...companyName, isRequired: true };
const newCnpj = { ...cnpj, isRequired: true };

export const ofmBackofficeCompanyTabs: IFormTab = {
    type: "tab",
    id: "ofmBackofficeCompanyTabs",
    tabs: [
        {
            id: "mainDataTab",
            title: "Dados principais",
            elements: [
                newCompanyName,
                newCnpj
            ]
        },
        {
            id: "ssoTab",
            title: "Dados de SSO",
            elements: [
                ssoName,
                ssoClientId,
                ssoClientId,
                ssoTenantId,
            ]
        }
    ]
};