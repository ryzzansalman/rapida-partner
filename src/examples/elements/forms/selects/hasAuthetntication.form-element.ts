import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const hasAuthentication: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Has authentication",
    name: "hasAuthentication",
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