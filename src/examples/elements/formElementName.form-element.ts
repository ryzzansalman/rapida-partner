import type { IFormInput } from "../../interfaces/form-input.interface";

export const formElementName: IFormInput = {
    type: "input",
    dataType: "text",
    label: "Name",
    name: "formElementName",
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