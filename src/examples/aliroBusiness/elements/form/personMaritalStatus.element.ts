import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const personMaritalStatus: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Estado civil",
  name: "personMaritalStatus",
  options: [
    { label: "Solteiro", value: "single" },
    { label: "Casado", value: "married" },
    { label: "Divorciado", value: "divorced" },
    { label: "Viúvo", value: "widower" },
    { label: "Noivo", value: "engaged" },
    { label: "União estável", value: "stableUnion" },
  ],
};