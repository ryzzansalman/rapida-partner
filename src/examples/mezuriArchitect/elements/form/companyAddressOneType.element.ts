import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const personAddressOneType: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Tipo",
  name: "personAddressOneType",
  options: [
    { value: "Residencial", label: "Residencial" },
    { value: "Comercial", label: "Comercial" },
    { value: "Outro", label: "Outro" },
  ],
};