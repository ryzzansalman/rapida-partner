import type { IModule } from "../../../interfaces/project.interface";

export const productModule: IModule = {
  id: "productModule",
  title: "Produtos",
  icon: "inventory_2",
  elements: [
    {
      id: "productForm",
      type: "forms"
    },
    {
      id: "productList",
      type: "lists"
    },
  ]
};