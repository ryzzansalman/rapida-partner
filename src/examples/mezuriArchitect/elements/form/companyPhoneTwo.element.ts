import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const companyPhoneTwo: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Telefone secundário",
  name: "companyPhoneTwo",
  validators: ["phone"],
};