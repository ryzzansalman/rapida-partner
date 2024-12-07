import type { IModule } from "../../../interfaces/project.interface";

export const customerModule: IModule = {
  id: "customerModule",
  title: "Clientes",
  icon: "groups",
  elements: [
    {
      id: "customerForm",
      type: "forms"
    },
    {
      id: "customerList",
      type: "lists"
    },
    {
      id: "customerDisplay",
      type: "displays"
    },
    {
      id: "customerChart",
      type: "charts"
    }
  ]
};