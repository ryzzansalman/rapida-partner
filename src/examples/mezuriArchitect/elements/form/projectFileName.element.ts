import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const projectFileName: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Nome do arquivo",
  name: "projectFileName",
  isRequired: true,
};
