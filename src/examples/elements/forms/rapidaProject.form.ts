import type { IForm } from "../../../interfaces/project.interface";
import { projectTabs } from "./tabs/projectTabs.form-element";

export const rapidaProjectForm: IForm = {
  id: "projectForm",
  title: "Gerenciar projeto",
  guards: "isAuthorized",
  elements: [
    projectTabs,
  ],
};
