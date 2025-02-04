import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistCompanyPhoneTwo: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone secundário",
  name: "artistCompanyPhoneTwo",
  validators: ["phone"],
};