import type { IModule } from "../../../interfaces/project.interface";

export const tagModule: IModule = {
  id: "tagModule",
  title: "Gerenciamento de tags",
  icon: "tag",
  elements: [
    {
      id: "tagForm",
      type: "forms"
    },
    {
      id: "tagList",
      type: "lists"
    },
  ]
};