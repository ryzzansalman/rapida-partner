import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personPhoneOne: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone principal",
  name: "personPhoneOne",
  validators: ["phone"],
};