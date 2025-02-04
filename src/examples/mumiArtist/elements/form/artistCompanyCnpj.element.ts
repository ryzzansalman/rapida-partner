import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistCompanyCnpj: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CNPJ",
  name: "artistCompanyCnpj",
  validators: ["cnpj"],
};
