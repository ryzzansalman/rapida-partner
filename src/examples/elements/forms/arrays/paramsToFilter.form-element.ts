import type { IFormArray } from "../../../../interfaces/form-array.interface";

export const paramsToFilter: IFormArray = {
  type: "array",
  id: "paramsToFilter",
  title: "Propriedade para filtragem",
  elements: [
    {
      type: "input",
      name: "property",
      label: "Propriedade",
      dataType: "text",
      isRequired: true,
      tooltip: "Nome de propriedade retronadas pela API que servirá como filtro pra busca do autocomplete"
    }
  ]
};