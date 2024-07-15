import type { IFormArray } from "../../../../interfaces/form-array.interface";

export const populate: IFormArray = {
  type: "array",
  id: "populate",
  title: "Popular",
  elements: [
    {
      type: "input",
      name: "property",
      label: "Entidades/Coleções",
      dataType: "text",
      isRequired: true,
      tooltip: "Nome de entidades ou coleções que servirão como base para popular o retorno da API com informações relativa a 'macthes'"
    }
  ]
};