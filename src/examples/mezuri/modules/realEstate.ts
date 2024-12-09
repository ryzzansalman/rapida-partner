import type { IModule } from "../../../interfaces/project.interface";

export const realEstateModule: IModule = {
  id: "realEstateModule",
  title: "Gerenciamento de imóveis",
  icon: "real_estate_agent",
  elements: [
    {
      id: "realEstateForm",
      type: "forms"
    },
    {
      id: "realEstateList",
      type: "lists"
    },
    {
      id: "realEstateDisplay",
      type: "displays"
    },
    {
      id: "realEstateChart",
      type: "charts"
    },
    {
      id: "realEstateRoomForm",
      type: "forms"
    },
    {
      id: "realEstateRoomList",
      type: "lists"
    },
  ]
};