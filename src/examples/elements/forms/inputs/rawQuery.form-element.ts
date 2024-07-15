import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const rawQuery: IFormInput = {
  type: "input",
  dataType: "text",
  label: "Query crua",
  name: "rawQuery",
  tooltip: "Query hard coded a ser utilizada por intermédio da API (evitar)",
}