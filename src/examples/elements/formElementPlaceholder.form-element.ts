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