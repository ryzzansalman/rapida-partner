import type { IModule } from "../../../interfaces/project.interface";

export const customerModule: IModule = {
  id: "customerModule",
  title: "Clientes",
  icon: "groups",
  elements: [
    {
      id: "customerPersonForm",
      type: "forms"
    },
    {
      id: "customerPersonList",
      type: "lists"
    },
    {
      id: "customerCompanyForm",
      type: "forms"
    },
    {
      id: "customerCompanyList",
      type: "lists"
    },
  ]
};