import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const artistPersonCpf: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CPF",
  name: "artistPersonCpf",
  validators: ["cpf"],
};
