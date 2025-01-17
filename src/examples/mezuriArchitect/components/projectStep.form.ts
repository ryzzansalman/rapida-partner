import type { IForm } from "../../../interfaces/project.interface";
import { projectStepDescription } from "../elements/form/projectStepDescription.element";
import { projectStepName } from "../elements/form/projectStepNameName.element";

export const projectStepForm: IForm = {
  id: "projectStepForm",
  title: "Gerenciamento de etapa de projeto",
  guards: "isAuthorized",
  elements: [
    projectStepName, 
    projectStepDescription
  ]
};