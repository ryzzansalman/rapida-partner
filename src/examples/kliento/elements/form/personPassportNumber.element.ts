import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personPassportNumber: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Número de passaporte",
  name: "personPassportNumber",
  validators: ["onlyNumbers"],
};
