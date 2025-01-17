import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateHydrographies: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Hidrografias",
  name: "realEstateHydrographies",
  options: [
    {
      label: "Passagem de rio",
      value: "hasRiver",
    },
    {
      label: "Passagem de córrego",
      value: "hasStream",
    },
    {
      label: "Passagem de riacho",
      value: "hasBrook",
    },
    {
      label: "Possui lago",
      value: "hasLake",
    },
    {
      label: "Possui lagoa",
      value: "hasLagoon",
    },
    {
      label: "Possui nascente",
      value: "hasSource",
    },
  ],
  isMultiple: true,
};