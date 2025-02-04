import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const personAddressTwoType: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Tipo",
  name: "personAddressTwoType",
  options: [
    { value: "Residencial", label: "Residencial" },
    { value: "Comercial", label: "Comercial" },
    { value: "Outro", label: "Outro" },
  ],
};