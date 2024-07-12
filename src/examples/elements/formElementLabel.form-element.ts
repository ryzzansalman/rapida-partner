import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementLabel: IFormInput = {
    type: "input",
    dataType: "text",
    label: "Label",
    name: "formElementLabel",
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