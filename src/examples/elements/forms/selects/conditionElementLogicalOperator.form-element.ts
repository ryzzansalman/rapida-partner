import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const conditionElementLogicalOperator: IFormSelect = {
  type: "select",
  dataType: "text",
  label: "Operador lógico",
  name: "conditionElementLogicalOperator",
  options: [
      {
          label: "E", value: "&&"
      },
      {
          label: "Não", value: "!"
      },
      {
          label: "Não exclusivo", value: "nor"
      },
      {
          label: "Ou", value: "||"
      },
  ]
};