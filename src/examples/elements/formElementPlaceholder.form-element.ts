import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementPlaceholder: IFormInput = {
    type: "input",
    dataType: "text",
    label: "Placeholder",
    name: "formElementPlaceholder",
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