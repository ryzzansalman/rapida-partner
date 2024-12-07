import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateEnergySystem: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Sistema de energia",
  name: "realEstateEnergySystem",
  options: [
    {
      label: "Monofásico",
      value: "singlePhase",
    },
    {
      label: "Trifásico",
      value: "threePhase",
    },
    {
      label: "Sem energia",
      value: "noEnergy",
    },
  ],
};