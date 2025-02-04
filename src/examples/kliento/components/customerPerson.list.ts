import type { IList } from "../../../interfaces/list.interface";
import { personCpf } from "../elements/form/personCpf.element";
import { personEmailOne } from "../elements/form/personEmailOne.element";
import { personName } from "../elements/form/personName.element";
import { personPhoneOne } from "../elements/form/personPhoneOne.element";

export const customerPersonList: IList = {
  componentType: "list",
  id: "customerPersonList",
  title: "Lista de pessoas",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/people",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "CPF", property: personCpf.name, type: "title" },
    { label: "Nome", property: personName.name, type: "title" },
    { label: "Telefone", property: personPhoneOne.name, type: "subtitle" },
    { label: "E-mail", property: personEmailOne.name, type: "subtitle" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/person-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/person-list",
        },
        request: {
          endpoint: "/people",
          verb: "delete",
          propertiesAsPathParam: ["_id"],
          dialog: {
            title: "Excluir pessoa",
            message: "Deseja realmente excluir essa pessoa?",
          }
        }
      },
    }
  ]
};