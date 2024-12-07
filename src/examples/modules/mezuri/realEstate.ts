import type { IModule } from "../../../interfaces/project.interface";

export const realEstate: IModule = {
  id: "realEstateModule",
  title: "Imóveis",
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
    {
      id: "realEstateTagForm",
      type: "forms"
    },
    {
      id: "realEstateTagList",
      type: "lists"
    },
  ]
};