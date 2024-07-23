import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { saveButton } from "../buttons/saveButton.form-element";
import { clientSecret } from "../inputs/clientSecret.form-elemtent";
import { cnpj } from "../inputs/cnpj.form-element";
import { companyTag } from "../inputs/companyTag.form-element";
import { ssoClientId } from "../inputs/ids/ssoClientId.form-element";
import { ssoTenantId } from "../inputs/ids/ssoTenantId.form-element";
import { companyName } from "../inputs/names/companyName.form-element";
import { ssoName } from "../inputs/names/ssoName.form-element";
import { urlRedirect } from "../inputs/urlRedirect.form-element";


const newCompanyName = {  ...companyName, isRequired: true };
const newTag = { ...companyTag, isRequired: true };
const newCnpj = { ...cnpj, isRequired: true };
const newUrlRedirect = { ...urlRedirect, isRequired: true };

export const ofmBackofficeCompanyTabs: IFormTab = {
    type: "tab",
    id: "ofmBackofficeCompanyTabs",
    tabs: [
        {
            id: "mainDataTab",
            title: "Dados principais",
            elements: [
                newCompanyName,
                newTag,
                newCnpj,
                newUrlRedirect,
                saveButton
            ]
        },
        {
            id: "ssoTab",
            title: "Dados de SSO externo",
            elements: [
                ssoClientId,
                clientSecret,
                ssoTenantId,
                ssoName,
            ]
        }
    ]
};