import type { IList } from "../../../interfaces/list.interface";
import { companiesRelatedToProject } from "../elements/form/companiesRelatedToProject.element";
import { peopleRelatedToProject } from "../elements/form/peopleRelatedToProject.element";
import { projectDescription } from "../elements/form/projectDescription.element";
import { projectName } from "../elements/form/projectName.element";
import { usersSharingProject } from "../elements/form/usersSharingProject.element";

export const projectList: IList = {
  id: "projectList",
  title: "Lista de projetos",
  guards: ["isAuthorized"],
  dataSource: {
    endpoint: "/projects",
    paramType: "query",
    hasAuthentication: true,
  },
  properties: [
    { label: "Nome", property: projectName.name, type: "title" },
    { label: "Descrição", property: projectDescription.name, type: "description" },
    { label: "Pessoas relacionadas", property: peopleRelatedToProject.name, type: "subtitle" },
    { label: "Empresas relacionadas", property: companiesRelatedToProject.name, type: "subtitle" },
    { label: "Usuários compartilhando o projeto", property: usersSharingProject.name, type: "subtitle" },
  ],
  callsToActionMenu: [
    {
      label: "Editar",
      icon: "pencil",
      action: {
        link: {
          endpoint: "/project-form",
          propertiesAsQueryParam: ["_id"],
        },
      },
    },
    {
      label: "Excluir",
      icon: "delete",
      action: {
        link: {
          endpoint: "/project-list",
        },
        request: {
          endpoint: "/projects",
          verb: "delete",
          propertiesAsPathParam: ["_id"],
          dialog: {
            title: "Excluir projeto",
            message: "Deseja realmente excluir essa projeto?",
          }
        }
      },
    }
  ]
};