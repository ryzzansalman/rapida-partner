import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const realEstateFaunas: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Faunas",
  name: "realEstateFaunas",
  options: [
    {
      label: "Insetos",
      value: "insects",
    },
    {
      label: "Aves",
      value: "birds",
    },
    {
      label: "Mamíferos",
      value: "mammals",
    },
    {
      label: "Répteis",
      value: "reptiles",
    },
    {
      label: "Anfíbios",
      value: "amphibians",
    },
  ],
  isMultiple: true,
};