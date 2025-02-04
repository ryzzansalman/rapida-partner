import type { IList } from "../../../interfaces/list.interface";
import { artistPersonCpf } from "../elements/form/artistPersonCpf.element";
import { artistPersonEmailOne } from "../elements/form/artistPersonEmailOne.element";
import { artistPersonName } from "../elements/form/artistPersonName.element";
import { artistPersonPhoneOne } from "../elements/form/artistPersonPhoneOne.element";

export const artistPersonList: IList = {
  componentType: "list",
  id: "artistPersonList",
  title: "Lista de pessoas",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/artists-people",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "CPF", property: artistPersonCpf.name, type: "title" },
    { label: "Nome", property: artistPersonName.name, type: "title" },
    { label: "Telefone", property: artistPersonPhoneOne.name, type: "subtitle" },
    { label: "E-mail", property: artistPersonEmailOne.name, type: "subtitle" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/artist-person-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/artist-person-list",
        },
        request: {
          endpoint: "/artists-people",
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