import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementTooltip: IFormInput = {
    type: "input",
    dataType: "text",
    label: "Tooltip",
    name: "formElementTooltip",
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