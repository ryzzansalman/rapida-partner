import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const personCpf: IFormInput = {
  type: "input",
  dataType: "text",
  label: "CPF",
  name: "personCpf",
  validators: ["cpf"],
};
