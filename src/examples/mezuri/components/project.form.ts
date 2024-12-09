import type { IForm } from "../../../interfaces/project.interface";
import { projectName } from "../elements/form/projectName.element";
import { projectStepsRelatedToProject } from "../elements/form/projectStepsRelatedToProject.element";
import { realEstateRoomRelatedToProject } from "../elements/form/realEstateRoomRelatedToProject.element";
import { tags } from "../elements/form/tags.element";

export const projectForm: IForm = {
  id: "projectForm",
  title: "Gerenciamento de projeto",
  guards: "isAuthorized",
  elements: [
    projectName, 
    realEstateRoomRelatedToProject, 
    projectStepsRelatedToProject, 
    tags
  ]
};