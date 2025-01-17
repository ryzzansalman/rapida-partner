import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personPhoneTwo: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone secundário",
  name: "personPhoneTwo",
  validators: ["phone"],
};