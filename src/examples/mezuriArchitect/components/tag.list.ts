import type { IList } from "../../../interfaces/list.interface";
import { tagName } from "../elements/form/tagName.element";

export const tagList: IList = {
  id: "tagList",
  title: "Lista de marcações",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/tags",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "Nome", property: tagName.name, type: "title" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/tag-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/tag-list",
        },
        request: {
          endpoint: "/tags",
          verb: "delete",
          propertiesAsPathParam: ["_id"],
          dialog: {
            title: "Excluir marcação",
            message: "Deseja realmente excluir essa marcação?",
          }
        }
      },
    }
  ]
};