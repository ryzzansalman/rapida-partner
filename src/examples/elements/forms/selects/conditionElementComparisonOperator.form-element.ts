import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const conditionElementComparisonOperator: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Operdor de comparação",
  name: "conditionElementComparisonOperator",
  options: [
      {
          label: "Igual", value: "==="
      },
      {
          label: "Maior que", value: ">"
      },
      {
          label: "Maior ou igual a", value: ">=" 
      },
      {
          label: "Pertence", value: "in" 
      },
      {
          label: "Menor que", value: "<" 
      },
      {
          label: "Menor ou igual a", value: "<=" 
      },
      {
          label: "Diferente", value: "!==" 
      },
      {
          label: "Não pertence", value: "nin" 
      },
  ],
};