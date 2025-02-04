import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const artistPersonAddressTwoType: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Tipo",
  name: "artistPersonAddressTwoType",
  options: [
    { value: "Residencial", label: "Residencial" },
    { value: "Comercial", label: "Comercial" },
    { value: "Outro", label: "Outro" },
  ],
};