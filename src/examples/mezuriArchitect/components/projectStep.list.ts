import type { IList } from "../../../interfaces/list.interface";
import { projectStepName } from "../elements/form/projectStepNameName.element";


export const projectStepList: IList = {
  id: "projectStepList",
  title: "Lista de estapas do projeto",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/projects-steps",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "Nome", property: projectStepName.name, type: "title" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/project-step-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/project-step-list",
        },
        request: {
          endpoint: "/projects-steps",
          verb: "delete",
          propertiesAsPathParam: ["_id"],
          dialog: {
            title: "Excluir etapa do projeto",
            message: "Deseja realmente excluir essa etapa do projeto?",
          }
        }
      },
    }
  ]
};