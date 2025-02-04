import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const artistPersonAddressOneType: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Tipo",
  name: "artistPersonAddressOneType",
  options: [
    { value: "Residencial", label: "Residencial" },
    { value: "Comercial", label: "Comercial" },
    { value: "Outro", label: "Outro" },
  ],
};