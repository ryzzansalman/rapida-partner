import type { IList } from "../../../interfaces/list.interface";
import { companyCnpj } from "../elements/form/companyCnpj.element";
import { companyEmailOne } from "../elements/form/companyEmailOne.element";
import { companyName } from "../elements/form/companyName.element";
import { companyPhoneOne } from "../elements/form/companyPhoneOne.element";

export const customerCompanyList: IList = {
  id: "customerCompanyList",
  title: "Lista de empresas",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/companies",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "CNPJ", property: companyCnpj.name, type: "title" },
    { label: "Nome", property: companyName.name, type: "title" },
    { label: "Telefone", property: companyPhoneOne.name, type: "subtitle" },
    { label: "E-mail", property: companyEmailOne.name, type: "subtitle" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/company-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/company-list",
        },
        request: {
          endpoint: "/companies",
          verb: "delete",
          propertiesAsPathParam: ["_id"],
          dialog: {
            title: "Excluir empresa",
            message: "Deseja realmente excluir essa empresa?",
          }
        }
      },
    }
  ]
};