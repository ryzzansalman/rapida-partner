import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistCompanyPhoneOne: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone principal",
  name: "artistCompanyPhoneOne",
  validators: ["phone"],
};