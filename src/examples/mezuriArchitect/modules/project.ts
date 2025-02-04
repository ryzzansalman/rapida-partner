import type { IModule } from "../../../interfaces/project.interface";
import { projectForm } from "../components/project.form";
import { projectList } from "../components/project.list";
import { projectStepForm } from "../components/projectStep.form";
import { projectStepList } from "../components/projectStep.list";

export const projectModule: IModule = {
  id: "projectModule",
  title: "Gerenciamento de projetos",
  icon: "tactic",
  components: [
    projectForm,
    projectList,
    projectStepForm,
    projectStepList,
    // {
    //   id: "projectForm",
    //   type: "forms"
    // },
    // {
    //   id: "projectList",
    //   type: "lists"
    // },
    // {
    //   id: "projectDisplay",
    //   type: "displays"
    // },
    // {
    //   id: "projectChart",
    //   type: "charts"
    // },
    // {
    //   id: "projectStepForm",
    //   type: "forms"
    // },
    // {
    //   id: "projectStepList",
    //   type: "lists"
    // },
  ]
};