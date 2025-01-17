import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const companyCnpj: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CNPJ",
  name: "companyCnpj",
  validators: ["cnpj"],
};
