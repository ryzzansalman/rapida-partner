import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const projectName: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Nome do projeto",
  name: "projectName",
  isUnique: true,
};
