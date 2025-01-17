import type { IForm } from "../../../interfaces/project.interface";
import { companiesRelatedToProject } from "../elements/form/companiesRelatedToProject.element";
import { peopleRelatedToProject } from "../elements/form/peopleRelatedToProject.element";
import { projectName } from "../elements/form/projectName.element";
import { projectStepsRelatedToProject } from "../elements/form/projectStepsRelatedToProject.element";
import { tags } from "../elements/form/tags.element";
import { usersSharingProject } from "../elements/form/usersSharingProject.element";

export const projectForm: IForm = {
  id: "projectForm",
  title: "Gerenciamento de projeto",
  guards: "isAuthorized",
  elements: [
    {...projectName, isRequired: true},
    projectStepsRelatedToProject,
    peopleRelatedToProject,
    companiesRelatedToProject,
    usersSharingProject,
    tags
  ]
};