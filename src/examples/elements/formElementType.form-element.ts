import type { IFormSelect } from "../../interfaces/form-select.interface";

export const formElementType: IFormSelect = {
  type: "select",
  name: "formElementType",
  dataType: "text",
  label: "Tipo de formulário",
  options: [
    { value: "array", label: "Array" },
    { value: "autocomplete", label: "Autocomplete" },
    { value: "input", label: "Input" },
    { value: "select", label: "Select" },
    { value: "tab", label: "Tab" },
  ],
  isRequired: true,
};