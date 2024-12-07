import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { realEstateName } from "./realEstateName";

export const realEstateTab: IFormTab = {
  type: "tab",
  id: "realEstateTab",
  tabs: [
    {
      id: "realEstateMainDataTab",
      title: "Dados principais",
      elements: [realEstateName, realEstateDescription, realEstateValue, realEstateArea, realEstateRooms, realEstateBathrooms, realEstateGarageSpaces, realEstateFloor, realEstateCondominiumValue, realEstateIptuValue, realEstatePictures],
    },
    {
      id: "personDocumentTab",
      title: "Documentos",
      elements: [personCpf, personPassportNumber],
    },
    {
      id: "personContactTab",
      title: "Contatos e redes",
      elements: [personPhoneOne, personPhoneTwo, personEmailOne, personEmailTwo, personSiteOne, personSiteTwo, personLinkedin, personInstagram, personFacebook],
    },
    {
      id: "personAddressTab",
      title: "Endereços",
      elements: [personAddressOne, personAddressTwo],
    },
  ],
};