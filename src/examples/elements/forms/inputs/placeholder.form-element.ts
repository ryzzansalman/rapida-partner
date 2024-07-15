import type { IFormInput } from "../../../../interfaces/form-input.interface";

export const placeholder: IFormInput = {
    type: "input",
    dataType: "text",
    label: "Placeholder",
    name: "placeholder",
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