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