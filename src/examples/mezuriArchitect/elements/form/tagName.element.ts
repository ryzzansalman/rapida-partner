import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const tagName: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Nome da tag",
  name: "tagName",
  isUnique: true,
};
