import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const artistPersonMaritalStatus: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Estado civil",
  name: "artistPersonMaritalStatus",
  options: [
    { label: "Solteiro", value: "single" },
    { label: "Casado", value: "married" },
    { label: "Divorciado", value: "divorced" },
    { label: "Viúvo", value: "widower" },
    { label: "Noivo", value: "engaged" },
    { label: "União estável", value: "stableUnion" },
  ],
};