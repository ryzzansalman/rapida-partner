import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const maxLenght: IFormInput = {
  type: "input",
  dataType: "text",
  label: "MaxLength",
  name: "formElementMaxLength",
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