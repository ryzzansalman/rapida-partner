import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { realEstateAverageWindPowerGeneration } from "./averageWindPowerGeneration";
import { realEstateArea } from "./realEstateArea";
import { realEstateAverageSolarPowerGeneration } from "./realEstateAverageSolarPowerGeneration";
import { realEstateDescription } from "./realEstateDescription.element";
import { realEstateEnergySystem } from "./realEstateEnergySystem.element";
import { realEstateName } from "./realEstateName";
import { realEstatePictures } from "./realEstatePictures.element";
import { realEstateWaterSupply } from "./realEstateProductActivityWaterSupply";
import { tags } from "./tags.element";

export const realEstateTab: IFormTab = {
  type: "tab",
  id: "realEstateTab",
  tabs: [
    {
      id: "realEstateMainDataTab",
      title: "Dados principais",
      elements: [realEstateName, realEstateDescription, realEstateArea, realEstatePictures, realEstateEnergySystem, realEstateWaterSupply, realEstateAverageSolarPowerGeneration, realEstateAverageWindPowerGeneration, tags],
    },
    {
      id: "realEstateDocumentTab",
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