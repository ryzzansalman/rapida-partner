import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const conditionType: IFormSelect = {
  type: "select",
  name: "conditionType",
  dataType: "text",
  label: "Tipo de condição",
  options: [
      {
          label: "Form", value: "form"
      },
      {
          label: "Code", value: "code"
      },
      {
          label: "Array", value: "array" 
      }
  ]
};