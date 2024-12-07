import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateSoils: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Solos",
  name: "realEstateSoils",
  options: [
    {
      label: "Argiloso",
      value: "clayey",
    },
    {
      label: "Arenoso",
      value: "sandy",
    },
    {
      label: "Argiloso-arenoso",
      value: "clayLoam",
    },
    {
      label: "Orgânico",
      value: "organic",
    },
    {
      label: "Pedregoso",
      value: "rocky",
    },
    {
      label: "Calcário",
      value: "calcareous",
    },
  ],
  isMultiple: true,
};