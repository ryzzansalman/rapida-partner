import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const valueField: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Campo para o value",
  name: "valueField",
  tooltip: "Campo retornado da API para servir de valor para a option",
}