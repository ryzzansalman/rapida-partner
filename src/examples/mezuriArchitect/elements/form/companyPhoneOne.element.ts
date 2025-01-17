import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const companyPhoneOne: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone principal",
  name: "companyPhoneOne",
  validators: ["phone"],
};