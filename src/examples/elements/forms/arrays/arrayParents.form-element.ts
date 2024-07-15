import type { IFormArray } from "../../../../interfaces/form-array.interface";

export const arrayParents: IFormArray = {
  type: "array",
  id: "arrayParents",
  title: "Pais do array",
  elements: [
    {
      type: "input",
      dataType: "text",
      label: "Id",
      name: "arrayParentId",
    },
  ],
}