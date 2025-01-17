import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateLandPositions: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Posição do terreno",
  name: "realEstateLandPositions",
  options: [
    {
      label: "Voltado para o leste (Nascente)",
      value: "eastFacing",
    },
    {
      label: "Voltado para o oeste (Poente)",
      value: "westFacing",
    },
    {
      label: "Voltado para o norte",
      value: "northFacing",
    },
    {
      label: "Voltado para o sul",
      value: "southFacing",
    },
  ],
  isMultiple: true,
};