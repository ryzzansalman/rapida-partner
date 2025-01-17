import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { companiesRelatedToProject } from "./companiesRelatedToProject.element";
import { peopleRelatedToProject } from "./peopleRelatedToProject.element";
import { projectFiles } from "./projectFiles.element";
import { projectName } from "./projectName.element";
import { projectStepsRelatedToProject } from "./projectStepsRelatedToProject.element";
import { tags } from "./tags.element";

export const projectTab: IFormTab = {
  type: "tab",
  id: "projectTab",
  tabs: [
    {
      id: "projectMainDataTab",
      title: "Dados principais",
      elements: [
        {...projectName, isRequired: true},
        projectStepsRelatedToProject,
        peopleRelatedToProject,
        companiesRelatedToProject,
        tags
      ],
    },
    {
      id: "projectFilesTab",
      title: "Arquivos do projeto",
      elements: [
        projectFiles
      ],
    },
  ],
};
