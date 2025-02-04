import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonPhoneOne: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone principal",
  name: "artistPersonPhoneOne",
  validators: ["phone"],
};