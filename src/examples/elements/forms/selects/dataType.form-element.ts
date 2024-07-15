import type { IFormSelect } from "../../../../interfaces/form-select.interface";

export const dataType: IFormSelect = {
    type: "select",
    dataType: "text",
    label: "Data type",
    name: "dataType",
    isRequired: true,
    options: [
        {
            label: "Text",
            value: "text" 
        },
        {
            label: "Number",
            value: "number" 
        },
        {
            label: "Password",
            value: "password" 
        },
        {
            label: "Email",
            value: "email" 
        },
        {
            label: "Color",
            value: "color" 
        },
        {
            label: "Date",
            value: "date" 
        },
        {
            label: "File",
            value: "file" 
        },
        {
            label: "WYSIWYG",
            value: "wysiwyg"
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