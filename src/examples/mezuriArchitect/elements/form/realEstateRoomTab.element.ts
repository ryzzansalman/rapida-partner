import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { realEstateRelatedToRoom } from "./realEstateRelatedToRoom.element";
import { realEstateRoomArea } from "./realEstateRoomArea";
import { realEstateRoomDescription } from "./realEstateRoomDescription.element";
import { realEstateRoomName } from "./realEstateRoomName";
import { realEstateRoomPictures } from "./realEstateRoomPictures.element";
import { tags } from "./tags.element";

export const realEstateRoomTab: IFormTab = {
  type: "tab",
  id: "realEstateRoomTab",
  tabs: [
    {
      id: "realEstateMainDataTab",
      title: "Dados principais",
      elements: [realEstateRoomName, realEstateRoomDescription, realEstateRoomArea, realEstateRoomPictures, realEstateRelatedToRoom, tags],
    },
    {
      id: "landDetailsTab",
      title: "Detalhes do espaço",
      elements: [],
    },
  ],
};