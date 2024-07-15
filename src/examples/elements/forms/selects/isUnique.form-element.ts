import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const isUnique: IFormSelect = {
    type: "select",
    dataType: "number",
    label: "Is unique",
    name: "isUnique",
    options: [
        {
            label: "Sim",
            value: true
        },
        {
            label: "Não",
            value: false
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