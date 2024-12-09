import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const realEstateName: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Nome do imóvel",
  name: "realEstateName",
  isUnique: true,
};
