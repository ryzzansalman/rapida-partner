import type { IFormArray } from "../../interfaces/form-array.interface";

export const formElementConditions: IFormArray = {
    type: "array",
    id: "formElementConditions",
    title: "Condição",
    elements: [
        {
            type: "select",
            name: "conditionType",
            dataType: "text",
            label: "Tipo de condição",
            options: [
                {
                    label: "Form", value: "form"
                },
                {
                    label: "Code", value: "code"
                },
                {
                    label: "Array", value: "array" 
                }
            ]
        },
        {
            type: "array",
            id: "conditionElements",
            title: "Elemento",
            elements: [
                {
                    type: "input",
                    name: "conditionElementKey",
                    dataType: "text",
                    label: "Key", 
                    isRequired: true
                },
                {
                    type: "input",
                    dataType: "text",
                    label: "Value",
                    name: "conditionElementValue",
                },
                {
                    type: "input",
                    dataType: "text",
                    label: "Array",
                    name: "conditionElementArray"
                },
                {
                    type: "select",
                    dataType: "text",
                    label: "Operdor de comparação",
                    name: "conditionElementComparisonOperator",
                    options: [
                        {
                            label: "Igual", value: "==="
                        },
                        {
                            label: "Maior que", value: ">"
                        },
                        {
                            label: "Maior ou igual a", value: ">=" 
                        },
                        {
                            label: "Pertence", value: "in" 
                        },
                        {
                            label: "Menor que", value: "<" 
                        },
                        {
                            label: "Menor ou igual a", value: "<=" 
                        },
                        {
                            label: "Diferente", value: "!==" 
                        },
                        {
                            label: "Não pertence", value: "nin" 
                        },
                    ],
                },
                {
                    type: "select",
                    dataType: "text",
                    label: "Operador lógico",
                    name: "conditionElementLogicalOperator",
                    options: [
                        {
                            label: "E", value: "&&"
                        },
                        {
                            label: "Não", value: "!"
                        },
                        {
                            label: "Não exclusivo", value: "nor"
                        },
                        {
                            label: "Ou", value: "||"
                        },
                    ]
                }

            ]
        },
        {
            type: "input",
            dataType: "text",
            label: "Campo gatilho",
            name: "codeTriggerField",
        },
        {
            type: "input",
            dataType: "text",
            label: "Código ",
            name: "codeCode",
        },

    ]
}