import type { IFormInput } from "../../../../../interfaces/form-input.interface";

export const projectTitle: IFormInput = {
  type: "input",
  name: "projectTitle",
  dataType: "text",
  label: "Título",
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
      ],
    },
  ],
};