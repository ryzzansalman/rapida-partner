import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonPhoneTwo: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone secundário",
  name: "artistPersonPhoneTwo",
  validators: ["phone"],
};