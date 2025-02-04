import type { IList } from "../../../interfaces/list.interface";
import { artistCompanyCnpj } from "../elements/form/artistCompanyCnpj.element";
import { artistCompanyEmailOne } from "../elements/form/artistCompanyEmailOne.element";
import { artistCompanyName } from "../elements/form/artistCompanyName.element";
import { artistCompanyPhoneOne } from "../elements/form/artistCompanyPhoneOne.element";

export const artistCompanyList: IList = {
  componentType: "list",
  id: "artistCompanyList",
  title: "Lista de empresas",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/artists-companies",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "CNPJ", property: artistCompanyCnpj.name, type: "title" },
    { label: "Nome", property: artistCompanyName.name, type: "title" },
    { label: "Telefone", property: artistCompanyPhoneOne.name, type: "subtitle" },
    { label: "E-mail", property: artistCompanyEmailOne.name, type: "subtitle" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/artist-company-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/artist-company-list",
        },
        request: {
          endpoint: "/artists-companies",
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