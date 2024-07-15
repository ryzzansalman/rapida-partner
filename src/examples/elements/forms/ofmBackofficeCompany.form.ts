import type { IForm } from "../../../interfaces/project.interface";

export const ofmBackofficeCompanyForm: IForm = {
    id: "ofmBackofficeCompanyForm",
    title: "Gerenciar empresa",
    guards: "isAuthorized",
    elements: [
        {
            type: "tab",
            id: "companyTabs",
            tabs: 
            [
                {
                    id: "mainDataTab",
                    title: "Dados principais",
                    elements: [
                        {
                            type: "input",
                            name: "name",
                            dataType: "text",
                            label: "Nome",
                            isRequired: true
                        },
                        {
                            type: "input",
                            name: "cnpj",
                            dataType: "text",
                            label: "CNPJ",
                            isRequired: true
                        }
                    ]
                },
                {
                    id: "ssoTab",
                    title: "Dados de SSO",
                    elements: [
                        {
                            type: "input",
                            name: "ssoName",
                            dataType: "text",
                            label: "SSO relacionado"
                        },
                        {
                            type: "input",
                            name: "clientId",
                            dataType: "text",
                            label: "Id do app"
                        },
                        {
                            type: "input",
                            name: "clientSecret",
                            dataType: "text",
                            label: "Secret do cliente"
                        },
                        {
                            type: "input",
                            name: "tenantId",
                            dataType: "text",
                            label: "Id do inquilino (tenant)"
                        }
                    ]
                }
            ]
        },
    ]
}