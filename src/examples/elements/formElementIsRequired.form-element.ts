import type { IFormSelect } from "../../interfaces/form-select.interface";

export const formElementIsRequired: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Is required",
    name: "formElementIsRequired",
    options: [
        {
            label: "Sim",
            value: 1
        },
        {
            label: "Não",
            value: 0
        },
    ],
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