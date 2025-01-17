import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateWaterSupply: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Fonte de água",
  name: "realEstateWaterSupply",
  options: [
    {
      label: "Barragem",
      value: "waterDam",
    },
    {
      label: "Barragem subterrânea",
      value: "undergroundWaterDam",
    },
    {
      label: "Cacimba",
      value: "well",
    },
    {
      label: "Companhia de abastecimento",
      value: "waterSupplyCompany",
    },
    {
      label: "Poço artesiano",
      value: "artesianWell",
    },
    {
      label: "Rio / riacho",
      value: "riverOrStream",
    },
    {
      label: "Sem abastecimento",
      value: "noWaterSupply",
    },
  ],
  isMultiple: true,
};