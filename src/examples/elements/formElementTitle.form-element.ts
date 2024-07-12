import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementTitle: IFormInput = {
  type: "input",
  name: "formElementTitle",
  dataType: "text",
  label: "Título",
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
      ],
    },
  ],
};