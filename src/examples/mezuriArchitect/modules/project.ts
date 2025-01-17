import type { IModule } from "../../../interfaces/project.interface";

export const projectModule: IModule = {
  id: "projectModule",
  title: "Gerenciamento de projetos",
  icon: "tactic",
  elements: [
    {
      id: "projectForm",
      type: "forms"
    },
    {
      id: "projectList",
      type: "lists"
    },
    {
      id: "projectDisplay",
      type: "displays"
    },
    {
      id: "projectChart",
      type: "charts"
    },
    {
      id: "projectStepForm",
      type: "forms"
    },
    {
      id: "projectStepList",
      type: "lists"
    },
  ]
};