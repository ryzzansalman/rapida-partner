import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const minLength: IFormInput = {
  type: "input",
  dataType: "text",
  label: "MinLength",
  name: "formElementMinLength",
  isRequired: true,
  conditions: [
      {
          type: "form",
          elements: [
              {
                  key: "formElementType",
                  comparisonOperator: "!==",
                  value: "array",
              },
              {
                  logicalOperator: "||",
                  key: "formElementType",
                  comparisonOperator: "!==",
                  value: "tab",
              },
          ]
      }
  ]
};