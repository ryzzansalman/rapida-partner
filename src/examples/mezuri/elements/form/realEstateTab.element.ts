import type { IFormTab } from "../../../../interfaces/form-tab.interface";
import { realEstateAverageWindPowerGeneration } from "./averageWindPowerGeneration.element";
import { realEstateArea } from "./realEstateArea";
import { realEstateAverageSolarPowerGeneration } from "./realEstateAverageSolarPowerGeneration";
import { realEstateDescription } from "./realEstateDescription.element";
import { realEstateEnergySystem } from "./realEstateEnergySystem.element";
import { realEstateHydrographies } from "./realEstateHydrographies";
import { realEstateLandPositions } from "./realEstateLandPositions";
import { realEstateName } from "./realEstateName";
import { realEstateOwners } from "./realEstateOwners.element";
import { realEstatePictures } from "./realEstatePictures.element";
import { realEstateWaterSupply } from "./realEstateProductActivityWaterSupply";
import { realEstateSoils } from "./realEstateSoils";
import { realEstateTopographies } from "./realEstateTopographies";
import { tags } from "./tags.element";

export const realEstateTab: IFormTab = {
  type: "tab",
  id: "realEstateTab",
  tabs: [
    {
      id: "realEstateMainDataTab",
      title: "Dados principais",
      elements: [realEstateName, realEstateDescription, realEstateArea, realEstatePictures, realEstateEnergySystem, realEstateWaterSupply, realEstateAverageSolarPowerGeneration, realEstateAverageWindPowerGeneration, realEstateOwners, tags],
    },
    {
      id: "landDetailsTab",
      title: "Detalhes do terreno",
      elements: [realEstateLandPositions, realEstateTopographies, realEstateHydrographies, realEstateSoils],
    },
  ],
};