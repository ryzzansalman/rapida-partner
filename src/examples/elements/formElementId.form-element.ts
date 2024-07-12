import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementId: IFormInput = {
  type: "input",
  name: "formElementId",
  dataType: "text",
  label: "Id",
  isRequired: true,
  conditions: [
    {
      type: "form",
      elements: [
        {
          key: "formElementType",
          comparisonOperator: "===",
          value: "array",
        },
        {
          logicalOperator: "||",
          key: "formElementType",
          comparisonOperator: "===",
          value: "tab",
        },
      ],
    },
  ],
};