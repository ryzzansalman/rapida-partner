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
                    key: "formType",
                    comparisonOperator: "!==",
                    value: "array",
                },
                {
                    logicalOperator: "||",
                    key: "formType",
                    comparisonOperator: "!==",
                    value: "tab",
                },
            ]
        }
    ]
};