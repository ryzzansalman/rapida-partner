import type { IForm } from "../../../interfaces/project.interface";
import { realEstateRoomTab } from "../elements/form/realEstateRoomTab.element";

export const realEstateRoomForm: IForm = {
  id: "realEstateRoomForm",
  title: "Gerenciamento de espaço de imóvel",
  guards: "isAuthorized",
  elements: [realEstateRoomTab]
};