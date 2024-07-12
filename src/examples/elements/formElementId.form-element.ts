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
          key: "formType",
          comparisonOperator: "===",
          value: "array",
        },
        {
          logicalOperator: "||",
          key: "formType",
          comparisonOperator: "===",
          value: "tab",
        },
      ],
    },
  ],
};