import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonPassportNumber: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Número de passaporte",
  name: "artistPersonPassportNumber",
  validators: ["onlyNumbers"],
};
